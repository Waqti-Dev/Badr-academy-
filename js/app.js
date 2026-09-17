// =========================================
// 1. SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});



// =========================================
// 2. زر استكشف المنهج
// =========================================

const exploreCurriculum =
    document.getElementById("explore-curriculum");

const exploreCurriculumCard =
    document.getElementById("explore-curriculum-card");


function goToCurriculum() {

    const curriculumSection =
        document.getElementById("curriculum");

    curriculumSection.scrollIntoView({
        behavior: "smooth"
    });
}


exploreCurriculum.addEventListener(
    "click",
    goToCurriculum
);


exploreCurriculumCard.addEventListener(
    "click",
    goToCurriculum
);



// =========================================
// 3. LOGIN MODAL
// =========================================

const authModal =
    document.getElementById("auth-modal");

const authOverlay =
    document.getElementById("auth-overlay");

const authClose =
    document.getElementById("auth-close");

const startLearningButtons =
    document.querySelectorAll(".start-learning-button");


// فتح نافذة تسجيل الدخول
function openAuthModal() {

    authModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// إغلاق نافذة تسجيل الدخول
function closeAuthModal() {

    if (!authModal) return;

    authModal.classList.remove("active");

    // نرجع الـ scroll بعد انتهاء الأنيميشن
    setTimeout(() => {
        document.body.style.overflow = "";
    }, 400);
}


// أزرار ابدأ التعلم
startLearningButtons.forEach(
    (button) => {
        button.addEventListener(
            "click",
            () => {
                window.location.href = "dashboard.html";
            }
        );
    }
);


// زر X
authClose.addEventListener(
    "click",
    closeAuthModal
);


// الضغط على الخلفية
authOverlay.addEventListener(
    "click",
    closeAuthModal
);



// =========================================
// 4. زر ESC للإغلاق
// =========================================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeAuthModal();

        }

    }
);



// =========================================
// 5. نموذج تسجيل الدخول
// =========================================

const loginForm =
    document.getElementById("login-form");


loginForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        alert(
            "واجهة تسجيل الدخول جاهزة. سنربطها بالحسابات وقاعدة البيانات لاحقًا."
        );

    }
);
const navbarLogin =
    document.getElementById("navbar-login");

if (navbarLogin) {
    navbarLogin.addEventListener(
        "click",
        openAuthModal
    );
}
// =========================
// DARK MODE
// =========================

const themeToggle =
    document.getElementById("theme-toggle");

const savedTheme =
    localStorage.getItem("badr-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

if (themeToggle) {
    themeToggle.addEventListener(
        "click",
        () => {
            document.body.classList.toggle(
                "dark-mode"
            );

            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );

            if (isDark) {
                localStorage.setItem(
                    "badr-theme",
                    "dark"
                );
            } else {
                localStorage.setItem(
                    "badr-theme",
                    "light"
                );
            }
        }
    );
}