// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Parallax Effect
function setupParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.3;
            const yPos = -(scrollPosition * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });
}

// Contact Form Storage
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const contactData = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message'),
                date: new Date().toISOString()
            };
            
            // Save to localStorage
            saveContact(contactData);
            
            // Show confirmation
            alert('Thank you for your enquiry. We will contact you shortly.');
            this.reset();
        });
    }
}

function saveContact(data) {
    // Get existing contacts or initialize array
    const contacts = JSON.parse(localStorage.getItem('cakeContacts')) || [];
    
    // Add new contact
    contacts.push(data);
    
    // Save back to localStorage
    localStorage.setItem('cakeContacts', JSON.stringify(contacts));
    
    // In a real app, you would also send this to a server
    console.log('Contact saved:', data);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    setupParallax();
    setupContactForm();
    loadGallery();
    
    // Your existing initialization code
});

// Your existing gallery and other functions remain the same
