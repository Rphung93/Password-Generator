function generatePassword() {
  var passwordLength = 12; 

  var allPossibleChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:'\",.<>/?";

  var generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allPossibleChars.length);
    generatedPassword += allPossibleChars.charAt(randomIndex);
  }

  var generatedPasswordBox = document.getElementById('generated-password');
  generatedPasswordBox.innerHTML = '<p>Your generated password is:</p><p>' + generatedPassword + '</p>';
  generatedPasswordBox.style.display = 'block';
}