const revealElements = document.querySelectorAll(".reveal");

console.log("Reveal elements:", revealElements.length);

revealElements.forEach((element) => {
    element.classList.add("reveal-active");
});