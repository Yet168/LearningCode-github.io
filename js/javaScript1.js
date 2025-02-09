function showLesson(lessonId) {
    // Hide all lessons
    let lessons = document.querySelectorAll(".lessons");
    lessons.forEach(lesson => {
        lesson.style.display = "none";
    });

    // Show only the selected lesson
    document.getElementById(lessonId).style.display = "block";
}

