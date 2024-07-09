document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    try {
        const response = await fetch('http://localhost:5000/api/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const data = await response.json();
        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message: ' + data.message);
        }
    } catch (err) {
        alert('Error sending message: ' + err.message);
    }
});
