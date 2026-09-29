/* =========================================
   SAKTHI DENTAL CLINIC
   Interactive JavaScript
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("show");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */

const sections = document.querySelectorAll("main section[id]");

function updateActiveLink() {

    const scrollPosition = window.scrollY + 150;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach((link) => {
                link.classList.remove("active");

                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });

        }

    });

}

window.addEventListener("scroll", updateActiveLink);


/* =========================================
   FAQ ACCORDION
========================================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        document.querySelectorAll(".faq-item").forEach((item) => {

            if (item !== currentItem) {
                item.classList.remove("open");
            }

        });

        currentItem.classList.toggle("open");

    });

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    let isValid = true;

    clearErrors();


    /* Name validation */

    if (name.value.trim().length < 2) {

        showError(
            name,
            "Please enter your name."
        );

        isValid = false;

    }


    /* Email validation */

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        email.value.trim() === "" ||
        !emailPattern.test(email.value.trim())
    ) {

        showError(
            email,
            "Please enter a valid email address."
        );

        isValid = false;

    }


    /* Phone validation */

    const phonePattern =
        /^[0-9+\-\s()]{10,15}$/;

    if (
        phone.value.trim() === "" ||
        !phonePattern.test(phone.value.trim())
    ) {

        showError(
            phone,
            "Please enter a valid phone number."
        );

        isValid = false;

    }


    /* Submit */

    if (isValid) {

        formSuccess.textContent =
            "Thank you! Your message has been submitted successfully.";

        contactForm.reset();

        setTimeout(() => {
            formSuccess.textContent = "";
        }, 5000);

    }

});


/* =========================================
   FORM ERROR HELPERS
========================================= */

function showError(input, message) {

    const formGroup = input.parentElement;

    formGroup.classList.add("error");

    const errorMessage =
        formGroup.querySelector(".error-message");

    errorMessage.textContent = message;

}


function clearErrors() {

    document
        .querySelectorAll(".form-group")
        .forEach((group) => {

            group.classList.remove("error");

            const errorMessage =
                group.querySelector(".error-message");

            if (errorMessage) {
                errorMessage.textContent = "";
            }

        });

}


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   INITIALIZE
========================================= */

updateActiveLink();