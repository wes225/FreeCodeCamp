
function largestOfFour(arr) {

  var finalArray = [""];
  arr.forEach(function(element,index,array){
    element = element.reduce(function(finalNumber,contenderNumber){
      if (parseInt(contenderNumber) > parseInt(finalNumber)) {
        return contenderNumber;
      } else {return finalNumber;}


    });
      console.log(element);
      array[index] = element;
  });

  console.log(arr);


  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
