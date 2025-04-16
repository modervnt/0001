document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    if(!form) {
        console.error("Form not found!");
        return;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name')?.value.trim(),
            email: document.getElementById('email')?.value.trim(),
            acceptsPrivacy: document.getElementById('privacy-policy')?.checked
        };

        if (!formData.name || !formData.email || !formData.acceptsPrivacy) {
            alert('Please fill all required fields');
            return;
        }

        fetch('https://my-api.com/endpoint', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) throw new Error('Network error!');
            alert('Message sent succesfully!');
            form.reset();
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Error while sending');
        });
    });
});