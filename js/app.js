// =========================================
// 1. SCROLL REVEAL
// =========================================

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
        threshold: 0.15
    }
);


// نبدأ مراقبة كل العناصر
revealElements.forEach((element) => {
    revealObserver.observe(element);
});



// =========================================
// 2. زر استكشف المنهج
// =========================================

// زر استكشف المنهج الموجود في الـHero
const exploreCurriculum = document.getElementById(
    "explore-curriculum"
);


// زر استكشف المنهج الموجود في الـHero Card
const exploreCurriculumCard = document.getElementById(
    "explore-curriculum-card"
);


// وظيفة الانتقال إلى قسم المنهج
function goToCurriculum() {

    const curriculumSection = document.getElementById(
        "curriculum"
    );

    curriculumSection.scrollIntoView({
        behavior: "smooth"
    });
}


// تشغيل الوظيفة عند الضغط على زر الـHero
exploreCurriculum.addEventListener(
    "click",
    goToCurriculum
);


// تشغيل الوظيفة عند الضغط على زر الـCard
exploreCurriculumCard.addEventListener(
    "click",
    goToCurriculum
);