function digPow(n, p){
    n = n.toString();
    let tmp = 0;
    for (let i = 0; i < n.length; i++){
        tmp += parseInt(n[i]) ** (p+i);
    }
    if(tmp % n === 0){
        return tmp / n;
    } else{
        return -1
    }
}
// console.log(digPow(89, 1));

function isTriangle(a,b,c)
{
    if(!a || !b || !c) return false;

    return a < b + c && a > Math.abs(b - c);
}

function findMissingLetter(array)
{
    let tmp  = array[0].toString().charCodeAt(0);
    for (let i = 0; i < array.length; i++){
        if (array[i].toString().charCodeAt(0) !== tmp + i) return String.fromCharCode(tmp + i)
    }
}
// console.log(findMissingLetter(['a','b','c','d','f']));

/*Given two integers a and b, which can be positive or negative, find the sum of all the numbers
between including them too and return it. If the two numbers are equal return a or b.*/
function GetSum( a,b )
{
    if (a === b) return a; else {
        let min,max; let out = 0;
        if (a < b) {min = a; max = b;} else {min = b; max = a}
        out = 0;

        for (let i = 0; i < Math.abs(max - min); i++){
            out += max - i;
        }
        return out + min;
    }
}
console.log(GetSum(0, 1));