function titleCase(str) {
  var transformedString = "";
  var capitalizedElement= "";
  var splitString = str.toLowerCase().split(" ");
  var capitalizingArray = function(array){
    array.forEach(function(element,index,theArray){

      theArray[index] = element.charAt(0).toUpperCase() + element.slice(1);

    });
  };
  capitalizingArray(splitString);
  console.log (splitString.join(" "));
  return splitString.join(" ");
}






titleCase("sHoRt AnD sToUt");


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
