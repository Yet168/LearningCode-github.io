const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const JDoodle_ClientID = "your-client-id";
const JDoodle_ClientSecret = "your-client-secret";

app.post("/run", async (req, res) => {
    const { code } = req.body;

    try {
        const response = await axios.post("https://api.jdoodle.com/v1/execute", {
            script: code,
            language: "cpp",
            versionIndex: "0",
            clientId: JDoodle_ClientID,
            clientSecret: JDoodle_ClientSecret
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Execution failed" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
