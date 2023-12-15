function viewResume() {
    window.open("resume/My Resume (1).pdf", "_blank");
}

function downloadResume() {
    var link = document.createElement("a");
    link.href = "resume/My Resume (1).pdf";
    link.download = "My Resume.pdf";
    link.click();
}