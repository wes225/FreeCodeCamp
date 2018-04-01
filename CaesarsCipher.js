
function rot13(str) { // LBH QVQ VG!
 var treatedArray = [];
var untreatedArray = str.split('');

untreatedArray.forEach(element => {
    if (/[A-Z]/.test(element)){

        if ((element.charCodeAt(0) - 13) < 65 ) { 
            treatedArray.push(String.fromCharCode(element.charCodeAt(0) + 13));
        } else { 
            treatedArray.push(String.fromCharCode(element.charCodeAt(0) - 13));}
        

    } else {
        treatedArray.push(element);
    }
});


    return treatedArray.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
