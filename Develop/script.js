// Assignment code here
var lcaseCharCode = arrayFromLowToHigh(97, 122)
var ucaseCharCode = arrayFromLowToHigh(65, 90)
var numberCharCode= arrayFromLowToHigh(48, 57)
var specialCharCode = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64) 
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)


function arrayFromLowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++){
    array.push (i)
  }
  return array
  //-- 2-18 is so I didn't have to type out a whole string of characters
}; //-- ADD TO README SOURCES: learned lines 2-18 from: https://www.youtube.com/watch?v=iKo9pDKKHnc



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");//--this targets the generate ID in the HTML + CSS
//-- adding confirmtion prompts

function generatePassword () {
  console.log ("this button still works!") //--making sure the button is working correctly
  // beginning of step one//
  var howManyChars = prompt("How many characters should the password be?", "Enter here");//--1. need to prompt for the different password criteria
  
  //-- *These prompts begin when the generate password button has been clicked. as we know, the button works,
  //-- *so we need to add a prompt when it has been clicked
  //--  A. password length of 8-128 characters
    if (howManyChars < 8){
      alert("Error: Not a valid input. Must enter a number between 8 - 128");
    } 
    if (howManyChars > 128) {
      alert("Error: Not a valid input. Must enter a number between 8 - 128");  //--for the character range, what happens if they chose a number not listed in that range

    }
    if (howManyChars >= 8 && howManyChars <= 128){
      var includeLowCase = confirm("Would you like to include lowercase letters?");
        if (includeLowCase === true){
          var includeUpCase = confirm("Would you like to include uppercase letters?");
            if (includeUpCase === true){
              var includeSpecial = confirm("Would you like to include special characters?");
                if (includeSpecial === true){
                  var includeNumbers = confirm("Would you like to include numbers?");
                  if (includeNumbers === true){
                  } 
              }
            }
          }
        } else 
          includeLowCase === false && includeNumbers === false && includeUpCase === false && includeSpecial === false
          alert("Error: Must choose at least one character type")
       
  //--{{PSEUDO CODING
  
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
  //--    * <= one character type must be selected. What happens if they don't choose any? <<if none are chosen "must select one character type" else generate password>><<may be a few if elses in there>>
  
  //--3. generate a password based on that criteria
  //--  A. create a return value based on their input and the criteria (the return is made, we just need to fill it with a value)

  //--4. Display generated password
  //--  A. we know the button  works based on our console.log "the button has been clicked" test
  //--  B. we know a string of "generated password here" appears in test, so as long as we don't screw anything up too much, it shouldn't break
  //-- }}

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
