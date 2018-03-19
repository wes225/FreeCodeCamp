
function palindrome(str) {
  // Good luck!
  str.toLowerCase();
  var isPalindrome = true;
  let pattern =  /[^a-zA-Z0-9]/g ;
  var newString = str.replace(pattern,"");
  var lowerCaseString = newString.toLowerCase();


console.log(lowerCaseString);


  let reversedString ="";
  for (var i = (lowerCaseString.length-1); i>= 0 ; i--) {
    reversedString += lowerCaseString.charAt(i);
  }


console.log (lowerCaseString);
console.log (reversedString);
console.log((lowerCaseString == reversedString));
  return (lowerCaseString === reversedString);
}



palindrome("1 eye for of 1 eye.");
