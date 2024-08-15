function isPalindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');
    
    // Check if the cleaned string is equal to its reversed version
    return cleanedStr === reversedStr;
}

// Test the function
const inputString = "skfklsnfk";
const isInputPalindrome = isPalindrome(inputString);
console.log(isInputPalindrome); // Output: true

// make an input from user 
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter a string: ', inputString => {
    const isInputPalindrome = isPalindrome(inputString);
    console.log(isInputPalindrome);
    readline.close();
  });