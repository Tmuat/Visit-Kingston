// EmailJS taken from https://www.emailjs.com/docs/sdk/installation/ & https://codeinstitute.net/ 

function sendMail(contactForm) {
    $("#form-submit-button").html(`<img class="loader" src="assets/media/images/loading_bars.gif"/>`);
    emailjs.init("user_dXKiXtry6J70AYkRbQh46");
    emailjs.send('service_sta4808', 'ms2_template', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.text.value,
        "subject": contactForm.subject.value,
    })
    .then(
        function(response) {
            $("#form-name").val("");
            $("#form-email").val("");
            $("#form-subject").val("");
            $("#form-text").val("");
            $("#form-submit-button").html("Submit");
            // Code for the alert from https://getbootstrap.com/docs/4.0/components/alerts/#dismissing
            $("#email-alert").html(`
                <div class="alert alert-success alert-dismissible fade show mb-0" role="alert">
                    <strong>Message Has Been Sent!</strong> We will get back to you ASAP.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `);
        },
        function(error) {
            $("#form-submit-button").html("Re-Submit");
            // Code for the alert from https://getbootstrap.com/docs/4.0/components/alerts/#dismissing
            $("#email-alert").html(`
                <div class="alert alert-danger alert-dismissible fade show mb-0" role="alert">
                    <strong>Message Has NOT Been Sent!</strong> Please try to re-submit the contact form.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `);
        }
    );
    return false;
}
