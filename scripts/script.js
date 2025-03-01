function validateForm() {
    var name = document.feedbackForm.name.value;
    var phone = document.feedbackForm.phone.value;
    var email = document.feedbackForm.email.value;
    var subject = document.feedbackForm.subject.value;
    var topic = document.feedbackForm.topic.value;
    var message = document.feedbackForm.message.value;
    var hasErrors = false;

    // Validate name
    if (name == "" || name.length < 8) {
        document.getElementById("nameError").innerHTML = "Name is required and should be at least 8 characters.";
        hasErrors = true;
    } else {
        document.getElementById("nameError").innerHTML = "";
    }

    // Validate phone number
    if (phone != "" && !/^05[0-9]{8}$|^9665[0-9]{8}$|^009665[0-9]{8}$/.test(phone)) {
        document.getElementById("phoneError").innerHTML = "Invalid phone number.";
        hasErrors = true;
    } else {
        document.getElementById("phoneError").innerHTML = "";
    }

    // Validate email
    if (email == "" || !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email address.";
        hasErrors = true;
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
    // Validate subject
     if ( subject == "") {
        document.getElementById("subjectError").innerHTML = "subject are required.";
        hasErrors = true;
    } else {
        document.getElementById("subjectError").innerHTML = "";
    }
// Validate topic
     if ( topic == "") {
        document.getElementById("topicError").innerHTML = "topic are required.";
        hasErrors = true;
    } else {
        document.getElementById("topicError").innerHTML = "";
    }
    // Validate message
    if ( message == "") {
        document.getElementById("messageError").innerHTML = "message are required.";
        hasErrors = true;
    } else {
        document.getElementById("messageError").innerHTML = "";
    }

    return !hasErrors;
}