document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the default way

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        // Simulate form submission and response
        document.getElementById('responseMessage').textContent = 'Thank you for , ' + name + '. We will get back to you shortly!';
        
        // Optionally, you can send form data to a server here using fetch or XMLHttpRequest
        // Example:
        // fetch('/your-server-endpoint', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ name, email, message })
        // }).then(response => response.json())
        // .then(data => {
        //     document.getElementById('responseMessage').textContent = 'Message sent successfully!';
        // }).catch(error => {
        //     document.getElementById('responseMessage').textContent = 'There was an error sending your message.';
        // });
        
        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').textContent = 'Please fill out all fields.';
    }
});
