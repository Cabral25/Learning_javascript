// RANDOM PASSWORD GENERATOR


function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '1234567890';
    const symbolChars = '!@#$%¨&*()_+-=,.<>;:/?ªº§|£¬¢°';

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : '';
    allowedChars += includeUpperCase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    if(length <= 0){
        return '(Password length must be at least 1)';
    }
    if(allowedChars.length === 0){
        return `(At least one set of characters needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIdex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIdex];
    }

    return password;
}


const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = false;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);

console.log(`Generated password: ${password}`);