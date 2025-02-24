document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Hero Title Animation
    const heroTitle = document.querySelector(".hero-title");
    heroTitle.classList.add("animate");

    // Scroll Animations
const sections = document.querySelectorAll(".about-container, .dishes, .locations, .testimonials, .contact, .menu");
sections.forEach(section => {
    function checkVisibility() {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    }
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on page load
});

    document.addEventListener("DOMContentLoaded", function () {
        const reservationForm = document.getElementById("reservationForm");
        if (reservationForm) {
            reservationForm.addEventListener("submit", function (e) {
                e.preventDefault();
    
                // Get form values
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const date = document.getElementById("date").value;
                const guests = document.getElementById("guests").value;
    
                // Validate inputs
                if (name && email && date && guests) {
                    alert(`Thank you, ${name}! Your reservation for ${guests} guests on ${date} is confirmed.`);
                    reservationForm.reset(); // Clear the form
                } else {
                    alert("Please fill in all fields.");
                }
            });
        }
    });

    // Testimonials Slider
    const slides = document.querySelector(".testimonial-slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    if (slides && prevBtn && nextBtn) {
        let index = 0;
        const totalSlides = document.querySelectorAll(".testimonial").length;

        function updateSlide() {
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        prevBtn.addEventListener("click", () => {
            index = (index - 1 + totalSlides) % totalSlides;
            updateSlide();
        });

        nextBtn.addEventListener("click", () => {
            index = (index + 1) % totalSlides;
            updateSlide();
        });

        setInterval(() => {
            index = (index + 1) % totalSlides;
            updateSlide();
        }, 5000);
    }

    // Contact Form Submission
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! Your message has been sent successfully.");
            this.reset();
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            alert(`Thank you for subscribing with ${email}!`);
            this.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Hamburger Menu
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});