// script.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const formDataJSON = Object.fromEntries(formData.entries());

        fetch('http://localhost:5000/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formDataJSON)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            formStatus.textContent = 'Your message has been sent successfully!';
            formStatus.classList.add('text-success');
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            formStatus.textContent = 'An error occurred while sending your message. Please try again later.';
            formStatus.classList.add('text-danger');
        });
    });
});

