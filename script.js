// Assignment Code
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


function generatePassword(){
  var confirmLength = prompt("How many characters would you like your password to be? Choose 8-128")
    while (confirmLength < 8 || confirmLength > 128) {
      alert("You must choose a number between 8 and 128")
      var confirmLength = prompt("How many characters would you like your password to be? Choose 8-128")
    }

    var confirmNumber = confirm("Do you want your password to inclue numbers?");
    var confirmSymbol = confirm("Do you want your password to include symbols?");
    var confirmLower = confirm("Do you want your password to inclue lowercase characters?");
    var confirmUpper = confirm("Do you want your password to include Uppercase characters?")
     while (confirmNumber === false && confirmSymbol === false && confirmLower === false && confirmUpper === false){ 
        alert("You must choose at least one criteria")
        var confirmNumber = confirm("Do you want your password to inclue numbers?");
        var confirmSymbol = confirm("Do you want your password to include symbols?");
        var confirmLower = confirm("Do you want your password to inclue lowercase characters?");
        var confirmUpper = confirm("Do you want your password to include Uppercase characters?")
      }
     

      var passwordChar = []

      if (confirmNumber){
        passwordChar = passwordChar.concat(number)
      }

      if (confirmSymbol){
        passwordChar = passwordChar.concat(symbol)
      }

      if (confirmLower){
        passwordChar = passwordChar.concat(lower)
      }

      if (confirmUpper){
        passwordChar = passwordChar.concat(upper)
      }
      

      var newPassword = ""

      for (var i = 0; i < confirmLength; i++) {
        newPassword = newPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
        
      }
      return newPassword;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

