const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 80) {
            element.classList.add("reveal-active");
        }
    });
}

revealOnScroll();

window.addEventListener("scroll", revealOnScroll);