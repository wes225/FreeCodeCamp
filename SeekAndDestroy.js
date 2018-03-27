function destroyer(arr) {
    // Remove all the values
    
    var toFilterOut=[];
    for (var i=1; i<arguments.length;i++){
        toFilterOut.push(arguments[i]);
    }

    function seeker(element){
        var cleared = true;
        toFilterOut.forEach((undesirable)=>{
            if (element == undesirable){
                cleared = false;
                console.log("found a bad value");
            }
        });
        return cleared;

    }
    return arr.filter(seeker);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
