// =================================================
// Scroll Reveal
// =================================================

// بنجيب كل العناصر اللي عليها class="reveal"
const revealElements = document.querySelectorAll(".reveal");

// بنراقب العناصر أثناء الـ Scroll
const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            // لو العنصر دخل منطقة الشاشة
            if (entry.isIntersecting) {

                // نضيف class اسمها show
                entry.target.classList.add("show");

                // مش محتاجين نراقبه تاني بعد ظهوره
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        // يبدأ الظهور لما حوالي 12% من العنصر يدخل الشاشة
        threshold: 0.12
    }
);

// نبدأ مراقبة كل العناصر
revealElements.forEach((element) => {
    revealObserver.observe(element);
});