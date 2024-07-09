document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            form.reset(); // Optional: Reset form after successful submission
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch(error => alert('Error sending message: ' + error.message));
});


