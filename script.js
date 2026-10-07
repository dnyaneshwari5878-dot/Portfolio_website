// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("bi-list");
        icon.classList.add("bi-x");
    } else {
        icon.classList.remove("bi-x");
        icon.classList.add("bi-list");
    }
});


// ================= CLOSE MENU AFTER CLICK =================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("bi-x");
        icon.classList.add("bi-list");
    });
});