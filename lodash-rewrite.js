const _ = require('lodash');

function chunkArray(arr, size) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++){
        if (i + size <= arr.length - 1){
            newArray.push(arr.slice(i, i + size));
            i += size - 1;
        } else {
            newArray.push(arr.slice(i,arr.length));
            i = arr.length;
        }
    }
    return newArray;
}
// console.log(chunkArray(['a', 'b', 'c', 'd','e','f','g',"w",'t'], 5));

function concatArray() {
    var result = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
        if (Array.isArray(arguments[i])){
            let tmp = arguments[i];
            for (let j = 0; j< arguments[i].length; j++){
                result.push(tmp[j])
            }
            continue
        }
        result.push(arguments[i]);
    }
    return result;
}
/*
console.log(concatArray([2,4,5,6,7], 5, [6,7,8,9], [[8]]));
console.log(_.concat([2,4,5,6,7], 5, [6,7,8,9], [[8]]));*/

// return difference between arrays (check only elements from Arr1 in Arr2 !like in the lodash lib)
function difference(arr1, arr2) {
    let diffArray = [];
    for (let i = 0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i])){
            diffArray.push(arr1[i])
        }
    }
    return diffArray;
}
/*console.log(difference([2, 1], [2, 3, 5]));
console.log(_.difference([2, 1], [2, 3, 5]));*/


