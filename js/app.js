// نجيب كل العناصر اللي عليها reveal
const revealElements = document.querySelectorAll(".reveal");

// نراقب العناصر أثناء النزول في الصفحة
const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            // لما العنصر يدخل الشاشة
            if (entry.isIntersecting) {

                // نشغل الـ animation
                entry.target.classList.add("show");

                // نوقف مراقبة العنصر بعد ظهوره
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        // يبدأ الـ animation لما حوالي 15% من العنصر يظهر
        threshold: 0.15
    }
);


// نبدأ مراقبة كل العناصر
revealElements.forEach((element) => {
    revealObserver.observe(element);
});