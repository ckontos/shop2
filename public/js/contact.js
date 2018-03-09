window.onload = function() {

    // Adding an event listener for when the form is submitted
    $("#submitButton").on('click', handleFormSubmit);

    // submit form function
    function handleFormSubmit(event) {
        var appointment;
        var location;
        var bodyInput = $("#message").val().trim();
        var nameInput = $("#name").val().trim();
        var phoneInput = $("#phone").val().trim();
        var emailInput = $("#email").val().trim();
        var time = $("#time").val().trim();
        var date = $("#date").val().trim();
        var selected = $("#whichLocation").val();
        var time2 = $("#time2").val().trim();
        var date2 = $("#date2").val().trim();


        event.preventDefault();
        // Don't submit unless the form is complete...... they don't have to give phone#
        if (!nameInput) {
            $("#wrong").text("Please complete the name section");
            $('#pleaseComplete').modal('open');
        }
        else if (!emailInput) {
            $("#wrong").text("Please provide an e-mail address for us to contact you at");
            $('#pleaseComplete').modal('open');
        }
        else if (!bodyInput) {
            $("#wrong").text("Please complete the message section");
            $('#pleaseComplete').modal('open');
        }
        else if (!selected) {
            $("#wrong").text("Please select which location you'd like to contact.");
            $('#pleaseComplete').modal('open');
        }

        else {
            if (selected === "charlotte") {
                location = "jamclashwebpage@gmail.com"
                appointment = "I would like to schedule an appointment for " + date2 + " at " + time2 + " at the concord location";
            }
            else {
                location = "joshjanculawebpage@gmail.com"
                appointment = "I would like to schedule an appointment for " + date + " at " + time + " at the concord location";
            }
            // Constructing a newMessage
            var newMessage = {
                name: nameInput,
                email: emailInput,
                phone: phoneInput,
                body: bodyInput,
                appointment: appointment,
                store: location
                // appointment2: appointment2

            }; // submit the new message
            submitMessage(newMessage);
            $('#thankYou').modal('open');

            // empty out the input fields
            $("#message").val("");
            $("#name").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#date").val("");
            $("#time").val("");

        }

    }
    // Submits the message
    function submitMessage(message) {
        console.log("about to send message");
        $.get("/send", {
                to: message.store,
                subject: "New Message",
                html: "<h3>" + "name: " + message.name + "</h3>" + "<br>" +
                    "<h4>" + "email: " + message.email + "</h4>" +
                    "<h4>" + "phone: " + message.phone + "</h4>" +
                    "<p>" + "message: " + message.body + "</p>" +
                    "<p>" + "appointment: " + message.appointment + "</p>"
                // "<p>" + "appointment: " + message.appointment2 + "</p>"

            },
            function(data) {
                if (data == "sent") {
                    console.log("Great Success!");
                }
            });
    }

};
