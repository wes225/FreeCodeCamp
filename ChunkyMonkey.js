
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var finalArray = [];
  for (var i=0; i< arr.length; i = i+size){

    finalArray.push(arr.slice(i,i+size));
  }
  return finalArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
