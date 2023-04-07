// Assignment code here
var lcaseChars = "asdfghjklqwertyuiopzxcvbnm"
var ucaseChars = lcaseChars.toUpperCase
var numberChars = "1234567890"
var specialChars = "!'()*+,-./:;<=>?@[]$#%&^_`{|}~"

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");//--this targets the generate ID in the HTML + CSS
//-- adding confirmtion prompts


function generatePassword () {
  console.log ("this button still works!") //--making sure the button is working correctly
  
  var howManyChars = prompt("How many characters should the password be?", "Enter here");
 

  if (howManyChars < 8){
    alert("Error: Not a valid input. Must enter a number between 8 - 128");
  } 
  if (howManyChars > 128) {
     alert("Error: Not a valid input. Must enter a number between 8 - 128");  
  } // makes sure the input is in the assignments required range

  var includeLowCase = confirm("Would you like to include lowercase letters?");
    
  var includeUpCase = confirm("Would you like to include uppercase letters?");
   
  var includeSpecial = confirm("Would you like to include special characters?");
   
  var includeNumbers = confirm("Would you like to include numbers?");
  


  let charCodes = "";
  
  if (includeLowCase === true) charCodes = lcaseChars;
  if (includeUpCase === true) charCodes = ucaseChars;
  if (includeNumbers === true) charCodes = numberChars;
  if (includeSpecial === true) charCodes = specialChars; 

  if (includeLowCase) {
    charCodes += lcaseChars
  }

  if (includeUpCase) {
    charCodes += ucaseChars
  }

  if (includeNumbers) {
   charCodes += numberChars
  }

  if (includeSpecial) {
    charCodes += specialChars
  }


  passwordContainer = "";
  for(var i=0; i < howManyChars; i++){
   var randomIndex = charCodes.charAt(Math.floor(Math.random() * howManyChars));
   passwordContainer += [randomIndex];
  }

  return passwordContainer;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");//--this is where the generated password is displayed on the screen
 
  passwordText.value = password; //--takes the value from generated password and plugs it into what is displayed on the screen

}

// Add event listener to generate button // --this is alreafy working, noything needed here - LS 4.3.23
generateBtn.addEventListener("click", writePassword);//--when you click the generate button, it will "call" the the write password function listed above in the code.
//--the addEventListener connects the generateBtn and the writePassword function by "listening" for that call
