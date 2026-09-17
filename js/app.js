// =========================================
// 1. SCROLL REVEAL
// =========================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

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

} else {

    // لو المتصفح مش بيدعم IntersectionObserver
    revealElements.forEach((element) => {
        element.classList.add("show");
    });

}



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

    if (!curriculumSection) return;

    curriculumSection.scrollIntoView({
        behavior: "smooth"
    });
}


if (exploreCurriculum) {

    exploreCurriculum.addEventListener(
        "click",
        goToCurriculum
    );

}


if (exploreCurriculumCard) {

    exploreCurriculumCard.addEventListener(
        "click",
        goToCurriculum
    );

}



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

    if (!authModal) return;

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

                window.location.href =
                    "dashboard.html";

            }
        );

    }
);


// زر X
if (authClose) {

    authClose.addEventListener(
        "click",
        closeAuthModal
    );

}


// الضغط على الخلفية
if (authOverlay) {

    authOverlay.addEventListener(
        "click",
        closeAuthModal
    );

}



// =========================================
// 4. زر ESC
// =========================================

document.addEventListener(
    "keydown",
    (event) => {

        // إغلاق Login Modal
        if (event.key === "Escape") {

            closeAuthModal();

            closeMobileMenu();

        }

    }
);



// =========================================
// 5. نموذج تسجيل الدخول
// =========================================

const loginForm =
    document.getElementById("login-form");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            alert(
                "واجهة تسجيل الدخول جاهزة. سنربطها بالحسابات وقاعدة البيانات لاحقًا."
            );

        }
    );

}



// =========================================
// 6. زر تسجيل الدخول في الـ Navbar
// =========================================

const navbarLogin =
    document.getElementById("navbar-login");


if (navbarLogin) {

    navbarLogin.addEventListener(
        "click",
        openAuthModal
    );

}



// =========================================
// 7. MOBILE NAVBAR
// =========================================

const mobileMenuToggle =
    document.getElementById("mobile-menu-toggle");

const mainHeader =
    document.querySelector("header:not(.dashboard-header)");


// فتح القائمة
function openMobileMenu() {

    if (!mainHeader) return;

    mainHeader.classList.add("mobile-menu-open");

    if (mobileMenuToggle) {

        mobileMenuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        mobileMenuToggle.setAttribute(
            "aria-label",
            "إغلاق القائمة"
        );

    }

}


// إغلاق القائمة
function closeMobileMenu() {

    if (!mainHeader) return;

    mainHeader.classList.remove("mobile-menu-open");

    if (mobileMenuToggle) {

        mobileMenuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        mobileMenuToggle.setAttribute(
            "aria-label",
            "فتح القائمة"
        );

    }

}


// فتح / إغلاق القائمة
if (mobileMenuToggle) {

    mobileMenuToggle.addEventListener(
        "click",
        (event) => {

            event.stopPropagation();

            const isOpen =
                mainHeader.classList.contains(
                    "mobile-menu-open"
                );

            if (isOpen) {

                closeMobileMenu();

            } else {

                openMobileMenu();

            }

        }
    );

}



// =========================================
// 8. روابط الـ Mobile Navbar
// =========================================

if (mainHeader) {

    const mobileNavLinks =
        mainHeader.querySelectorAll("nav a");

    mobileNavLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    closeMobileMenu();

                }
            );

        }
    );

}



// =========================================
// 9. الضغط خارج الـ Mobile Navbar
// =========================================

document.addEventListener(
    "click",
    (event) => {

        if (!mainHeader) return;

        const isOpen =
            mainHeader.classList.contains(
                "mobile-menu-open"
            );

        if (!isOpen) return;


        const clickedInsideHeader =
            mainHeader.contains(event.target);


        if (!clickedInsideHeader) {

            closeMobileMenu();

        }

    }
);



// =========================================
// 10. إغلاق القائمة عند تغيير حجم الشاشة
// =========================================

window.addEventListener(
    "resize",
    () => {

        if (window.innerWidth > 800) {

            closeMobileMenu();

        }

    }
);



// =========================================
// 11. DARK MODE
// =========================================

const themeToggle =
    document.getElementById("theme-toggle");

const savedTheme =
    localStorage.getItem("badr-theme");


if (savedTheme === "dark") {

    document.body.classList.add(
        "dark-mode"
    );

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