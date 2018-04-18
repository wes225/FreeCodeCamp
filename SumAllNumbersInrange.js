
function sumAll(arr) {
 if (arr[0]<arr[1]){
   return calculateSum(arr[0],arr[1]);
 }else {
   return calculateSum(arr[1], arr[0]);
 }
}

function calculateSum(small,big){
  let total = 0
  for (var i = small; i <= big; i++) {
    total += i ;
  }
  console.log(total);
}
sumAll([1, 4]);
