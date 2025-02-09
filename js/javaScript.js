// JavaScript សម្រាប់បង្ហាញ/លាក់ចម្លើយ
document.addEventListener("DOMContentLoaded", function () {
    let questions = document.querySelectorAll(".question");
    
    questions.forEach(q => {
        q.addEventListener("click", function () {
            let answer = this.querySelector(".answer");
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});

