let password = "ihatepasswords1"
let passCheck = password.split('') //I didn't use this variable, but left it in since it was mentioned to use
let hasLetter = false
let hasNumber = false
let hasSpace = false

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

for(let i=0; i<password.length; i++){
    if (password.charAt(i) === " ") {
     hasSpace = true
    } 
 } 


//checks if variable password has at least 10 characters but not more than 20, and if hasLetter, hasNumber, & hasSpace are true or false.   I checked whether to switch them to true earlier.
//console logs ASCII art

if (password.length >= 10 && password.length <= 20 && hasLetter === true && hasNumber === true && hasSpace === false) {
    console.log(`
    /$$$$$$                                                            
   /$$__  $$                                                           
  | $$  \__/ /$$   /$$  /$$$$$$$  /$$$$$$$  /$$$$$$   /$$$$$$$ /$$$$$$$
  |  $$$$$$ | $$  | $$ /$$_____/ /$$_____/ /$$__  $$ /$$_____//$$_____/
   \____  $$| $$  | $$| $$      | $$      | $$$$$$$$|  $$$$$$|  $$$$$$ 
   /$$  \ $$| $$  | $$| $$      | $$      | $$_____/ \____  $$\____  $$
  |  $$$$$$/|  $$$$$$/|  $$$$$$$|  $$$$$$$|  $$$$$$$ /$$$$$$$//$$$$$$$/
   \______/  \______/  \_______/ \_______/ \_______/|_______/|_______/ 
                                                                       
                                                                       
                                                                       
  `)
} else {
    console.log(`
    ____  __    ____  __    __  __  ____  ____ 
   ( ___)/__\  (_  _)(  )  (  )(  )(  _ \( ___)
    )__)/(__)\  _)(_  )(__  )(__)(  )   / )__) 
   (__)(__)(__)(____)(____)(______)(_)\_)(____)
   `)
}

//extras
//made sure password has no spaces and is less than 20 characters and used ASCII art


// Check for presence of uppercase, lowercase, special characters, etc.

// Check for forbidden words (“password”, “letmein”)

