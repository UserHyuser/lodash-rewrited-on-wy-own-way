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

function noSpace(str) {
    return str.split(' ').join('')
}
//console.log(noSpace("2354 346675 fdghg"));

//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any
// elements with the same value next to each other and preserving the original order of elements.
var uniqueInString=function(iterable){
    //your code here - remember iterable can be a string or an array
    let out = [];
    for (let i = 0; i < iterable.length; i++){
        if (iterable.indexOf(iterable[i]) === i) {
            out.push(iterable[i]);
        }
        console.log(iterable.indexOf(iterable[i]))
    }
    return out;
};
//console.log(uniqueInString('AAAABBBCCDAABBB'))

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    if (!iterable) return [];
    let out = [];
    out[0] = iterable[0];
    for (let i = 1; i < iterable.length; i++){
        if (iterable[i] !== iterable[i-1]) {
            out.push(iterable[i]);
            while (iterable[i] === iterable[i-1]){
                i++;
            }
        }
    }
    return out;
};
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))

/*In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
If there are no good ideas, as is often the case, return 'Fail!'.*/
function well(x){
    let out = {
        good : 0,
        bad : 0
    };
    for (let i = 0; i< x.length; i++){
      if (x[i] === 'good') {
          out.good++;
          if (out.good > 2) return 'I smell a series!'
      }
    }
    return out.good >= 1 ? 'Publish!' : 'Fail!'
}

/*Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.*/
function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    let tmp = Math.sqrt(sq);
    return tmp % 1 === 0 ?  (tmp+1) ** 2 : -1;
}

function getMiddle(s)
{
    if (s.length % 2 === 0){
        return s[~~((s.length - 1) / 2)] + s[~~((s.length - 1) / 2) + 1]
    } else {
        return s[(s.length - 1) / 2]
    }
}

/*Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
(Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.*/
function spinWords(str){
    str = str.split(' ');
    let out = [];
    str.forEach(function (item, i, str) {
        if(item.length >= 5){
            let tmp = '';
            for (let j = item.length - 1; j >= 0; j--){
                tmp += item[j];
            }
            out.push(tmp)
        } else {
            out.push(item);
        }
    });
    return out.join(' ');
}
// console.log(spinWords('Welcome'));
/*
*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
You can guarantee that input is non-negative. */
var countBits = function(n) {
    let out = 0;
    while (n){
        if (n % 2 === 1) {
            out++;
        }
        n = ~~(n/2)
    }
    return out;
};

function validParentheses(parens) {
    let opened = 0, closed = 0;
    for (let i = 0; i< parens.length; i++){
        parens[i] === '(' ? opened++ : closed++;
        if (closed > opened) return false;
    }
    return opened === closed;
}
console.log(validParentheses("())(()"));