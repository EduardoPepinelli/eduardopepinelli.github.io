document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("seu_service_id", "seu_template_id", this, "seu_public_key")
        .then(() => alert("Email enviado com sucesso!"))
        .catch(error => console.error("Erro ao enviar:", error));
});
