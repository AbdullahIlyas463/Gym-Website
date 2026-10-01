// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function()
{
    navbar.classList.toggle("active");
});


// Close menu after clicking a link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link)
{
    link.addEventListener("click", function()
    {
        navbar.classList.remove("active");
    });
});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event)
{
    event.preventDefault();

    alert(
        "Thank you! Your request has been received. " +
        "Our team will contact you soon."
    );

    contactForm.reset();
});