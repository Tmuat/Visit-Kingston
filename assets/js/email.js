// EmailJS taken from https://www.emailjs.com/docs/sdk/installation/ & https://codeinstitute.net/ 

// Set the function to be called upon form submission on the contact page
function sendMail(contactForm) {
    // Changes the submit button to a loading gif so users know the form is submitting
    $("#form-submit-button").html(`<img class="loader" src="assets/media/images/loading_bars.gif"/>`);
    // EmailJS user ID
    emailjs.init("user_dXKiXtry6J70AYkRbQh46");
    // EmailJS function to send email, taking information from the contact form to fill template
    emailjs.send('service_sta4808', 'ms2_template', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.text.value,
        "subject": contactForm.subject.value,
    })
    .then(
        function(response) {
            // On successfull submission, clears the form
            $("#form-name").val("");
            $("#form-email").val("");
            $("#form-subject").val("");
            $("#form-text").val("");
            // Sets the submit button back to submit as opposed to loading gif
            $("#form-submit-button").html("Submit");
            // Puts up an alert to acknowledge form submission
            // Code for the alert from https://getbootstrap.com/docs/4.0/components/alerts/#dismissing
            $("#email-alert").html(`
                <div class="alert alert-success alert-dismissible fade show mb-0 custom-alert" role="alert">
                    <strong>Message Has Been Sent!</strong> We will get back to you ASAP.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `);
        },
        function(error) {
            // Changes the button from loading gif to re-submit
            $("#form-submit-button").html("Re-Submit");
            // Puts up an alert to highlight error in form submission
            // Code for the alert from https://getbootstrap.com/docs/4.0/components/alerts/#dismissing
            $("#email-alert").html(`
                <div class="alert alert-danger alert-dismissible fade show mb-0 custom-alert" role="alert">
                    <strong>Message Has NOT Been Sent!</strong> Please try to re-submit the contact form.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            `);
        }
    );
    // Stops the whole page from reloading on submission
    return false;
}
