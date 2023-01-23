const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function () {
 const nameField = document.getElementById("contactName");
 const emailField = document.getElementById("contactEmail");
 const messageField = document.getElementById("contactMessage");

 const nameValue = nameField.value;
 const emailValue = emailField.value;
 const messageValue = messageField.value;
  
 const templateParams = {
    nameValue: nameValue,
    emailValue: emailValue,
    messageValue: messageValue,
    notes: 'Check this out!'
};

 if (nameValue && emailValue && messageValue) {
    console.log(nameValue, emailValue, messageValue);
    emailjs.send('service_myportfolio', 'service_myportfolio', templateParams, 'nrLq_YJHnnc6QCs0-');
 }

});

// preloder-area
window.onload = function () {
    const preloderArea = document.getElementById("preloder-area");
    preloderArea.className = "page-loaded";

    setTimeout(function() {
    preloderArea.style.display = "none";
    }, 500);     
}