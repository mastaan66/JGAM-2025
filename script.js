// Function to update the visitor counter dynamically
function updateVisitorCounter() {
    // Check if localStorage is available
    if (typeof(Storage) !== "undefined") {
        let count = localStorage.getItem('visitorCount');

        if (count === null) {
            count = 5000;
        } else {
            count = parseInt(count) + 1;
        }

        localStorage.setItem('visitorCount', count);

        document.getElementById('visitor-counter').innerText = count.toLocaleString();
    } else {
        console.warn("Local storage is not supported. Visitor counter will not be dynamic.");
    }
}

// Function to handle the accordion functionality
function setupAccordion() {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            // Toggle the 'open' class for content
            content.classList.toggle('open');
            // Toggle 'active' class for the button to rotate the arrow
            button.classList.toggle('active');
        });
    });
}

// Call functions when the page loads
window.onload = function() {
    updateVisitorCounter();
    setupAccordion();
};