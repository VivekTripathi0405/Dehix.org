

document.addEventListener("DOMContentLoaded", function() {
    // Hamburger Menu Toggle
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navMenu = document.getElementById("nav-menu");

    hamburgerMenu.addEventListener("click", function() {
        navMenu.classList.toggle("open");
    });

    // FAQ Toggle Function
    function toggleFAQ(id) {
        const answer = document.getElementById(`faq${id}`);
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    }

    // Attach the toggleFAQ function to global window object if needed
    window.toggleFAQ = toggleFAQ;
});



