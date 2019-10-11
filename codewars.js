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
// console.log(GetSum(0, 1));

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
// console.log(validParentheses("())(()"));
/*You are given an array (which will have a length of at least 3, but could be very large) containing integers.
    The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
    Write a method that takes the array as an argument and returns this "outlier" N.*/
function findOutlier(integers) {
    let count = (Math.abs(integers[0] % 2) + Math.abs(integers[1] % 2) + Math.abs(integers[2] % 2)) >= 2 ? 1 : 0;
    console.log(count);
    for (let i = 0; i < integers.length; i++) {
        if (Math.abs(integers[i] % 2) !== count) return integers[i];
    }
}
// console.log(findOutlier([-39982520, 27159825,-198404595,-108850805,75431755,125911243,-7376889,-68448241,82721157]));

function getW(height) {
    if (height > 1){
        let w = Array.of(height);
        for (let i = 0; i < height; i++){
            w[i] = ' '.repeat(i) + '*';
            w[i] += height - i === 1 ? ' '.repeat(i) : ' '.repeat(2*(height - i) - 3) + '*' + ' '.repeat(i);
            w[i] += i !== 0 ? ' '.repeat(i - 1) + '*' : '';
            w[i] += height - i === 1 ? ' '.repeat(i) : ' '.repeat(2*(height - i) - 3) + '*' + ' '.repeat(i);
        }
        return w;
    }
    else return [];
}
// console.log(getW(2))

/*I assume most of you are familiar with the ancient legend of the rice (but I see wikipedia suggests wheat, for some reason) problem,
but a quick recap for you: a young man asks as a compensation only 1 grain of rice for the first square, 2 grains for the second, 4 for the third,
8 for the fourth and so on, always doubling the previous.

Your task is pretty straightforward (but not necessarily easy): given an amount of grains, you need to return up to which square of the chessboard one
should count in order to get at least as many.
* */
function squaresNeeded(grains){
    let deg = 0;
    while (grains > 0) { grains = grains - 2 ** (deg); deg++; }
    return deg;
}

function letterCount(s){
    let out = {};
    for (let i = 0; i < s.length; i++){
        !out[s[i]] ? out[s[i]] = 1 : out[s[i]]++;
    }
    return out;
}
// console.log(letterCount('asdgfrreewwdsad'))

/*Your objective is to complete a function createSpiral(N) that receives an integer N and returns an NxN
two-dimensional array with numbers 1 through N^2 represented as a clockwise spiral.*/
function createSpiral(N) {
    if (N < 1 || parseInt(N) !== N){
        return [];
    }
    let array = [];
    for (let i = 0; i < N; i++){
        array[i] = [];
    }
    let help = { // Объект, чтобы передавать в функцию по ссылке
      i : 1,
      shift : N,
      row : {
          row : 0,
          next() {
              switch (help.steps % 4) {
                  case 1 : {
                      help.row.row++;
                      break;
                  }
                  case 2 : {
                      break;
                  }
                  case 3 :{
                      help.row.row--;
                      break;
                  }
                  case 0 :{
                      break;
                  }
              }
          },
      },
      column : {
          column : 0,
          next() {
              switch (help.steps % 4) {
                  case 1 : {
                      break;
                  }
                  case 2 : {
                      help.column.column--;
                      break;
                  }
                  case 3 : {
                      break;
                  }
                  case 0 : {
                      help.column.column++;
                      break;
                  }
              }
          },
      },
      steps: 0,
    };

    while (help.i <= N**2){ //
        gorisontalInput(help, array);
        verticalInput(help, array)
    }
    return array;
}
// console.log(createSpiral(4));

function gorisontalInput(help, array) {
    if(help.steps % 4 > 1){
        for (let i = 0; i < help.shift; i++){
            array[help.row.row][help.column.column] = help.i;
            help.i++; help.column.column--;
        }
        help.column.column++;
    } else{
        for (let i = 0; i < help.shift; i++){
            array[help.row.row][help.column.column] = help.i;
            help.i++; help.column.column++;
        }
        help.column.column--;
    }
    help.steps++;
    help.row.next();
}

function verticalInput(help, array) {
    help.shift--;
    if(help.steps % 4 > 1) {
        for (let i = 0; i < help.shift; i++){
            array[help.row.row][help.column.column] = help.i;
            help.i++; help.row.row--;
        }
        help.row.row++;
    } else {
        for (let i = 0; i < help.shift; i++){
            array[help.row.row][help.column.column] = help.i;
            help.i++; help.row.row++;
        }
        help.row.row--;
    }
    help.steps++;
    help.column.next();
}