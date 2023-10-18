document.addEventListener("DOMContentLoaded", function() {
    emailjs.init('7W1j7bZWJdWElRZ0T'); 

    const contactForm = document.getElementById("contact");
    const errorMessages = document.getElementById("errorMessages");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        errorMessages.textContent = "";
        let hasError = false;

        const params = {
            user_lname: document.getElementById("user_lname").value,
            user_fname: document.getElementById("user_fname").value,
            user_email: document.getElementById("user_email").value,
            user_phone: document.getElementById("user_phone").value,
            user_message: document.getElementById("user_message").value,
        };

        if (params.user_lname.trim() === "") {
            hasError = true;
            errorMessages.textContent += "Last Name is required. ";
        }

        if (params.user_fname.trim() === "") {
            hasError = true;
            errorMessages.textContent += "First Name is required. ";
        }

        if (params.user_email.trim() === "" || !isValidEmail(params.user_email)) {
            hasError = true;
            errorMessages.textContent += "Invalid Email Address. ";
        }

        if (params.user_phone.trim() === "" || !isValidPhone(params.user_phone)) {
            hasError = true;
            errorMessages.textContent += "Invalid Phone Number. ";
        }

        if (params.user_message.trim() === "") {
            hasError = true;
            errorMessages.textContent += "Message is required. ";
        }

        if (hasError) {
            return;
        }

        sendEmail(params);
    });

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    }

    function isValidPhone(phone) {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        return phoneRegex.test(phone);
    }

    function sendEmail(params) {
        const serviceID = 'service_nz0n4v1'; 
        const templateID = 'template_qtmlbp6'; 


        emailjs.send(serviceID, templateID, {
                from_name: params.user_fname + ' ' + params.user_lname,
                email_id: params.user_email,
                message: params.user_message,

        })
            .then(function(response) {
                alert("Email was sent!");
            })
            .catch(function(error) {
                console.error("Email could not be sent:", error);
            });
    }
});
