// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");//--this targets the generate ID in the HTML + CSS

function generatePassword () {
  console.log ("the button has been clicked!") //--making sure the button is working correctly
  
  //--PSEUDO CODING

  //--1. need to prompt for the different password criteria
  //--  A. password length of 8-128 characters
  //--  B. numbers, special characrers, uppercase, lowercase
  //--  C. Create boolean for the confirmation of choice
  //--    * ie UTA 4-web apis>activities>07-ins_create-append>line 17: 
  //--    
  //--        var nextTag = confirm("Would you like to add another tag?");
  //--          
  //--        if (nextTag === true) {
  //--               var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  //--                if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
  //--                     alert("please enter a valid tag"); <<LILY NOTE: THIS IS AN EXAMPLE OF VALIDATION FOR STEP 2>>
  //--                 } else {
  //--                      var secondTag = document.createElement(secondTagName);
  //--                      secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName + ".";
  //--                      document.body.appendChild(secondTag);
  //--                 }
  //--                }

  //--2. validate the input in the moment/for each prompt (not at the end)
  //--  A. put parameters on the input
  //--    * for the character range, what happens if they chose a number not listed in that range <<see lily note in 1>C>>
  //--    * <= one character type must be selected. What happens if they don't choose any? <<if none are chosen "must select one character type" else generate password>><<may be a few if elses in there>>
  
  //--3. generate a password based on that criteria
  //--  A. create a return value based on their input and the criteria (the return is made, we just need to fill it with a value)

  //--4. Display generated password
  //--  A. we know the button  works based on our console.log "the button has been clicked" test
  //--  B. we know a string of "generated password here" appears in test, so as long as we don't screw anything up too much, it shouldn't break

  return "generated password here" //--must finish with an actural return value
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//--an incomplete function.
  //--being called but isn't defined (see console)
  var passwordText = document.querySelector("#password");//--this is where the generated password is displayed on the screen
 
  passwordText.value = password; //--takes the value from generated password and plugs it into what is displayed on the screen

}

// Add event listener to generate button // --this is alreafy working, noything needed here - LS 4.3.23
generateBtn.addEventListener("click", writePassword);//--when you click the generate button, it will "call" the the write password function listed above in the code.
//--the addEventListener connects the generateBtn and the writePassword function by "listening" for that call
