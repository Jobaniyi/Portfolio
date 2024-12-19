// JavaScript for form validation (optional but useful for interactive behavior)
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevents form submission for now
        
        // You can replace this with your actual form submission logic (e.g., AJAX or backend integration)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Your message has been sent!');
        } else {
            alert('Please fill out all fields.');
        }
    });
});
