// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Reveal components on scroll using Intersection Observer
const revealOnScroll = () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, observerOptions);

    // Select all elements with .reveal class
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// Initial check on load
window.addEventListener('DOMContentLoaded', () => {
    // Add staggered animation delay to research cards
    const researchCards = document.querySelectorAll('.research-card');
    researchCards.forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add staggered animation delay to publication list items
    const pubItems = document.querySelectorAll('.pub-list li');
    pubItems.forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add staggered animation delay to conference items
    const confItems = document.querySelectorAll('.conf-item');
    confItems.forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.05}s`;
    });

    // Initialize reveal animations after classes are added
    revealOnScroll();
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
