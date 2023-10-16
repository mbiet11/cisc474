function send(){
    (function(){
        emailjs.init("9O1vaHt6YRhMNVjGz");
    })();

    document.addEventListener("DOMContentLoaded", function() {
        const contact = document.getElementById("contact");
        const errorMessages = document.getElementById("errorMessages");

        contact.addEventListener("submit", function(event) {
            errorMessages.textContent = "";
            let hasError = false;

            var params = {
            user_lname: document.getElementById("user_lname").value,
             user_fname: document.getElementById("user_fname").value,
             user_email: document.getElementById("user_email").value,
             user_phone: document.getElementById("user_phone").value,
             user_message: document.getElementById("user_message").value,

            };

            if (user_lname.value.trim() === "") {
                hasError = true;
                errorMessages.textContent += "Last Name is required. ";
            }

            if (user_fname.value.trim() === "") {
                hasError = true;
                errorMessages.textContent += "First Name is required. ";
            }

            if (user_email.value.trim() === "" || !isValidEmail(user_email.value)) {
                hasError = true;
                errorMessages.textContent += "Invalid Email Address. ";
            }

            if (user_phone.value.trim() === "" || !isValidPhone(user_phone.value)) {
                hasError = true;
                errorMessages.textContent += "Invalid Phone Number. ";
            }

            if (user_message.value.trim() === "") {
                hasError = true;
                errorMessages.textContent += "Message is required. ";
            }

            if (hasError) {
                event.preventDefault();
            }
        });
 
        var serviceID = "service_nz0n4v1";
        var templateID = "template_qtmlbp6";

        emailjs.send(serviceID, templateID, params )
        .then (res => {alert("Email was sent!");
        })
        .catch();

        function isValidEmail(email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailRegex.test(email);
        }

        function isValidPhone(phone) {
            const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
            return phoneRegex.test(phone);
        }
    });
}