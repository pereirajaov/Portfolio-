document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Formulário de Contato
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'process_form.php'); // Substitua 'process_form.php' pelo script de backend adequado

        xhr.onload = function() {
            if (xhr.status === 200) {
                formResponse.textContent = 'Mensagem enviada com sucesso!';
                contactForm.reset();
            } else {
                formResponse.textContent = 'Houve um problema ao enviar a mensagem. Tente novamente mais tarde.';
            }
        };

        xhr.send(formData);
    });
});
