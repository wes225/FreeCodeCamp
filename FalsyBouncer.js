function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    function isNotFalsy(value){
        if (value && value !==0) {
            return value
        }
    }
    var filteredArr = arr.filter(isNotFalsy)
    return filteredArr;
}


console.log(bouncer([7, "ate", "", false, 9]));
