let password = "ihatepasswords"
let passCheck = password.split('')
let hasLetter = false
let hasNumber = false

for(let i=0; i<password.length; i++){
    if (isNaN(password.charAt(i)) === true) {
     hasLetter = true
    } 
 } 

 for(let i=0; i<password.length; i++){
    if (isNaN(password.charAt(i)) === false) {
     hasNumber = true
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

