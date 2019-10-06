// chunk Array
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
console.log(chunkArray(['a', 'b', 'c', 'd','e','f','g',"w",'t'], 5))