const removeFromArray = function( ) {

    array = arguments[0]; // the array
    for (let i = 1; i<arguments.length; i++) {
        while((firstInstanceIndex = array.indexOf(arguments[i])) != -1){
            array.splice(firstInstanceIndex,1);
            //firstInstanceIndex = array.indexOf(arguments[i]);
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
