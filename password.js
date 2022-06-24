// Directions
// Create a new file called password.js. Write a program that does the following:

// Create a variable called password and set it’s value to a string of your choice.

let password = "ihatepasswords"

// Write a conditional statement that checks if the password meets the following constraints:

// At least 10 characters long

// Contains at least one letter and one number

// If the password meets the constraint, console log a success message.

// If the password fails the constraint, console log a failure message.
let passCheck = password.split('')

console.log(passCheck)

let hasLetter = true
let hasNumber = true

for(let i=0; i<password.length; i++){
   if (isNaN(passCheck[i]) === true) {
    hasLetter = true
   } else if (isNaN(passCheck[i]) === false) {
    hasLetter = false
   }
} 

for(let i=0; i<password.length; i++){
    if (isNaN(passCheck[i]) === false) {
     hasNumber = true
    } else if (isNaN(passCheck[i]) === true) {
     hasNumber = false
    }
 } 

if (password.length >= 10 && password.length <= 20 && hasLetter === true && hasNumber === true) {
    console.log('Success')
} else {
    console.log('Failure!')
}

// Test out your conditional by changing the value of your password variable and running your file!

// String Length

// Need help with how to calculate the length of your password? This article should help.

// Additional Checks
// There are many other constraints you might want to check for the password.

// Add more constraints and checks to your program. You can read more about

// String methods in Javascript here.

// If you want to loop over your string you have to convert it into an array using the split method.Find more information here

// Add at least 2 other checks and write a comment in your code listing them.

// Here are some ideas, feel free to use these or come up with your own.

// Check for presence of uppercase, lowercase, special characters, etc.

// Check for maximum length (i.e. no more than 20 characters)

// Make sure there aren’t spaces

// Check for forbidden words (“password”, “letmein”)

// Going Even Further
// Add some ASCII Art to the output of your program!

// In order to use ASCII art in your output, you’ll need to use create a multi-line string. More info here .

// Be sure to push your code to Github for this assignment!

