
// sending Emails 
function sendEmail(){
    Email.send({
        // Host : "smtp.gmail.com",
        // Username : "engr.damsazali@gmail.com",
        // Password : "8A93EBD04B76AADA6992138B556C359224D7",
        SecureToken : "8dd1fc83-14db-46ee-a9b7-400c5959a58e",
        To : 'engr.damsazali@gmail.com',
        From : document.getElementById('email').value,
        Subject : "up work services",
        Body : "Name: " + document.getElementById('name').value
                + '<br> Email: ' + document.getElementById('email').value
                + '<br> Message: ' + document.getElementById('message').value
    }).then(
      message => alert(message)
    );
}