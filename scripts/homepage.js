document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const nav = document.querySelector(".navigation");

    hamburgerBtn.addEventListener("click", () => {
        nav.classList.toggle("active");

        hamburgerBtn.textContent = nav.classList.contains("active") ? "✖" : "☰";
    });
});