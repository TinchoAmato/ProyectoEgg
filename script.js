function showAlert(){
    alert("¡Hola, esta es una alerta desde Javascript!")
}


document.querySelector("button.button-menu-toggle").addEventListener("click", function(){
    document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
});

(function() {
    emailjs.init("bcGUIJb9_uctdwVOP"); // Reemplaza "YOUR_USER_ID" con tu User ID de EmailJS

    document.getElementById('contact-form').addEventListener('submit', function(event) {
    
        event.preventDefault();
        // Obtén los valores del formulario
        var form = this;
        var email = document.getElementById('email').value;
        var mensaje = document.getElementById('mensaje').value;

        // Envía el correo electrónico
        emailjs.send("service_3vpefa7", "template_767zq01", {
            to_email: email,
            message_html: mensaje
        })
        .then(function(response) {
            alert("¡El correo electrónico ha sido enviado correctamente!");
            form.reset(); // Limpia el formulario después de enviar el correo
        }, function(error) {
            alert("Error al enviar el correo electrónico. Por favor, inténtalo de nuevo más tarde.");
        });
    });
})();