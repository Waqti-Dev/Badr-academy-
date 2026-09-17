const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 150) {
            element.classList.add("reveal-active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);