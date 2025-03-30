const nameText = "Shreyasi Soumya";
let index = 0;

function typeEffect() {
    const typingSpan = document.getElementById("typing-text");
    if (!typingSpan) return;
    if (index < nameText.length) {
        typingSpan.innerHTML += nameText[index];
        index++;
        setTimeout(typeEffect, 150);
    }
}

window.onload = () => {
    setTimeout(typeEffect, 500);
};
