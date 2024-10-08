document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        // Here, you would typically send this data to your server
        console.log('User signed up with email:', email);
        
        // For now, we'll just show an alert
        alert('Thank you for signing up!');
        
        // Clear the form
        form.reset();
    });
});