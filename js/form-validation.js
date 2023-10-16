const btn = document.getElementById('button');

    document.addEventListener("DOMContentLoaded", function() {
        const contact = document.getElementById("contact");
        const errorMessages = document.getElementById("errorMessages");

        contact.addEventListener("submit", function(event) {
            event.preventDefault();

            btn.value = 'Sending...';
         
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

            if (params.user_email.trim() === "" || !isValidEmail(user_email.value)) {
                hasError = true;
                errorMessages.textContent += "Invalid Email Address. ";
            }

            if (params.user_phone.trim() === "" || !isValidPhone(user_phone.value)) {
                hasError = true;
                errorMessages.textContent += "Invalid Phone Number. ";
            }

            if (params.user_message.trim() === "") {
                hasError = true;
                errorMessages.textContent += "Message is required. ";
            }

            if (hasError) {
                event.preventDefault();
            }
            else {
                sendEmail(params);
            }
        });
 

        function isValidEmail(email) {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return emailRegex.test(email);
        }

        function isValidPhone(phone) {
            const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
            return phoneRegex.test(phone);
        }

        const serviceID = "service_nz0n4v1"; 
        const templateID = "template_qtmlbp6"; 

        emailjs.sendForm(serviceID, templateID, params)
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
