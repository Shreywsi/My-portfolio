document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseenter", () => {
        let audio = new Audio("sounds/click.wav"); // Replace with your sound file
        audio.play();
    });
});
