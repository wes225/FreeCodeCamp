
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return ""
    ;}
  else{
    var arrayOfRepeats= [];
    for (var i=0;i<num; i++){
      arrayOfRepeats.push(str);
    }
    console.log(arrayOfRepeats.join(""));
    return arrayOfRepeats.join("");


  }
}

repeatStringNumTimes("abc", 3);
