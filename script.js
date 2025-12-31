// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        // Optional: Toggle icon between menu and close
        const isOpen = nav.classList.contains('active');
        // You could swap the SVG here if desired, but for now functionality is priority
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handler
function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    alert(`Thank you ${name}! We've received your request for ${service}. We'll contact you at ${email} soon.`);
    e.target.reset();
    return false;
}

// Attach handleSubmit to the form globally if needed, or rely on onsubmit in HTML
// The HTML uses onsubmit="handleSubmit(event)" so it needs to be in global scope
window.handleSubmit = handleSubmit;

// Service booking buttons
document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        const serviceCard = this.closest('.service-card');
        const serviceName = serviceCard.querySelector('h3').textContent;
        alert(`Booking request for ${serviceName}. Please fill out the contact form below.`);
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
