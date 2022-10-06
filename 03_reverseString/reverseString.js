const reverseString = function(str) {

    /*
    if ( str.length == 0){
        return "";
    }
    else {
        let strArray = str.split("");
        strArray.reverse();
        let reversedString = strArray.join("");
        return reversedString;
    }
    */

    // The above algorithm decoded in one line
    //return str.split("").reverse().join("")

    // recursion: start from front
    /*
    if((str.length == 0) || (str.length == 1)){
        return(str);
    }
    return(str.charAt(str.length-1) + reverseString(str.slice(0,-1)));
    */

    // recursion: start from back
    if((str.length == 0) || (str.length == 1)){
        return(str);
    }
    return( reverseString(str.slice(1))+ str.charAt(0) );
    


};
// Do not edit below this line
module.exports = reverseString;
