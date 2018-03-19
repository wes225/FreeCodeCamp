
function truncateString(str, num) {
  var slicedString = "";
  if (num <= 3) {
    return str.slice(0,num) + "...";
  }else if (num >= str.length) {
    return str;
  }else {
    slicedString= str.slice(0,num-3);
console.log(slicedString + "...");
    return slicedString + "...";
  }


}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
