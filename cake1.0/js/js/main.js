// Sample cake data - in a real app this would come from storage
let cakes = [
    { id: 1, name: "Chocolate Cake", image: "images/cake1.jpg" },
    { id: 2, name: "Vanilla Cake", image: "images/cake2.jpg" },
    { id: 3, name: "Red Velvet", image: "images/cake3.jpg" }
];

// Load cakes on home page
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('cake-grid')) {
        loadCakes();
    }
    
    // Contact form handling
    if (document.getElementById('contact-form')) {
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will contact you soon.');
            this.reset();
        });
    }
});

function loadCakes() {
    const cakeGrid = document.getElementById('cake-grid');
    cakeGrid.innerHTML = '';
    
    cakes.forEach(cake => {
        const cakeItem = document.createElement('div');
        cakeItem.className = 'cake-item';
        cakeItem.innerHTML = `
            <img src="${cake.image}" alt="${cake.name}">
            <p>${cake.name}</p>
        `;
        cakeGrid.appendChild(cakeItem);
    });
}
