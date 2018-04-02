function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);
    var sortedArray = arr.sort( (a,b) => a>=b);
    function findMe (element){
        return element === num ;
    }
    return (sortedArray.findIndex(findMe));
}

getIndexToIns([10, 20, 30, 40, 50], 30);