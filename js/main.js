// Initialize Lucide Icons
lucide.createIcons();

// Update Year
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});

// Navbar Scroll Effect & Active Section Highlight
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    // Add background to navbar on scroll
    if (window.scrollY > 50) {
        navbar.classList.add('glass-nav', 'py-4');
        navbar.classList.remove('py-6');
    } else {
        navbar.classList.remove('glass-nav', 'py-4');
        navbar.classList.add('py-6');
    }

    // Active Section Logic
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-teal-400');
        link.classList.add('text-slate-300');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('text-teal-400');
            link.classList.remove('text-slate-300');
        }
    });
});
