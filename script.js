// Play sound on clicking navbar links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        let audio = new Audio("sounds/click.wav"); // Ensure the path is correct
        audio.play();
    });
});
function typeEffect(elementId, text, delay) {
    let index = 0;
    function type() {
        const element = document.getElementById(elementId);
        if (!element) return;
        if (index < text.length) {
            element.innerHTML += text[index];
            index++;
            setTimeout(type, 150);
        }
    }
    setTimeout(type, delay);
}

// Detect Swipe Gesture to Scroll Down
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener("touchstart", (event) => {
    touchStartY = event.touches[0].clientY;
});

document.addEventListener("touchmove", (event) => {
    touchEndY = event.touches[0].clientY;
});

document.addEventListener("touchend", () => {
    if (touchStartY - touchEndY > 50) {
        // Swipe up detected (Scroll to About Me)
        document.getElementById("aboutme").scrollIntoView({ behavior: "smooth" });
    }
});

window.onload = () => typeEffect("typing-text", "Shreyasi Soumya", 500);
// Change header text color when scrolling
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) { 
        header.classList.add("scrolled"); // Change text color
    } else {
        header.classList.remove("scrolled"); // Reset text color
    }
});
