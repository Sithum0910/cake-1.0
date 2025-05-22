document.addEventListener('DOMContentLoaded', function() {
    // Load existing cakes in admin view
    loadAdminCakes();
    
    // Set up upload button
    document.getElementById('upload-btn').addEventListener('click', function() {
        const fileInput = document.getElementById('image-upload');
        const nameInput = document.getElementById('image-name');
        
        if (fileInput.files.length === 0 || !nameInput.value) {
            alert('Please select an image and enter a name');
            return;
        }
        
        // In a real app, you would upload to a server here
        // For this example, we'll simulate it
        
        // Create a local URL for the image
        const imageUrl = URL.createObjectURL(fileInput.files[0]);
        
        // Add to our cakes array
        const newCake = {
            id: Date.now(), // Simple unique ID
            name: nameInput.value,
            image: imageUrl
        };
        
        cakes.push(newCake);
        loadAdminCakes();
        
        // Clear inputs
        fileInput.value = '';
        nameInput.value = '';
        
        alert('Image added successfully!');
    });
});

function loadAdminCakes() {
    const adminGrid = document.getElementById('admin-cake-grid');
    adminGrid.innerHTML = '';
    
    cakes.forEach(cake => {
        const cakeItem = document.createElement('div');
        cakeItem.className = 'cake-item';
        cakeItem.innerHTML = `
            <img src="${cake.image}" alt="${cake.name}">
            <p>${cake.name}</p>
            <button onclick="deleteCake(${cake.id})">Delete</button>
        `;
        adminGrid.appendChild(cakeItem);
    });
}

function deleteCake(id) {
    if (confirm('Are you sure you want to delete this cake?')) {
        cakes = cakes.filter(cake => cake.id !== id);
        loadAdminCakes();
        // On the home page, you would need to refresh to see changes
    }
}
