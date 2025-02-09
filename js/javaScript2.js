function runCode() {
    let htmlContent = document.getElementById("htmlCode").value;
    let cssContent = "<style>" + document.getElementById("cssCode").value + "</style>";
    let outputFrame = document.getElementById("output").contentWindow.document;

    outputFrame.open();
    outputFrame.write(htmlContent + cssContent);
    outputFrame.close();
}

function showCode() {
    let code = document.getElementById("csharpCode").value;
    document.getElementById("output").innerText = "កូដ C# ដែលបានបញ្ចូល៖\n\n" + code;
}

