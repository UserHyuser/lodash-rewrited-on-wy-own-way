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
    str.forEach(function (item) {
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
const countBits = function (n) {
    let out = 0;
    while (n) {
        if (n % 2 === 1) {
            out++;
        }
        n = ~~(n / 2)
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

//In this kata you need to build a function to return either true/True or
// false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

function hasSubpattern(string) {
    for (let i = 0; i < string.length / 2; i++) {
        let out = string.slice(0, i + 1);
        let strTmp = string.slice(i + 1, i + 1 + out.length);
        if (out === strTmp) {
            let check = 0;
            for (let j = 0; j < (string.length / strTmp.length); j++) {
                strTmp = string.slice((strTmp.length * j), (strTmp.length * (j + 1)));
                if (out === strTmp) {
                } else {
                    check = 1;
                    break
                }
            }
            if (check === 0) {
                return true
            }
        }
    }
    return false;
}

//console.log(hasSubpattern("aaaa"));

// Найти максимальную по сумме подпоследовательность в массиве
var maxSequence = function (arr) {
    let maxSeq = [], result = [], seq = 0;
    for (let i = 0; i < arr.length; i++) {
        if (seq + arr[i] < 0) {
            if (seq >= 0) result.push(seq);
            seq = 0; maxSeq = [];
        } else if (seq + arr[i] < seq) {
            let tmpSeq = seq, tmpMaxSeq = maxSeq.slice();
            while (arr[i] <= 0) {
                tmpSeq += arr[i]; tmpMaxSeq.push(arr[i]);
                i++;
            }
            if (tmpSeq + arr[i] > arr[i]) {
                result.push(seq);
                seq = tmpSeq; maxSeq = tmpMaxSeq.slice();
            } else {
                result.push(seq);
                seq = 0; maxSeq = []
            }
            i--;
        } else {
            seq += arr[i]; maxSeq.push(arr[i]);
        }
    }
    if (seq >= 0) result.push(seq);
    return Math.max.apply(null, result) === -Infinity ? [] : Math.max.apply(null, result);
};
/*
console.time('s');
console.log(maxSequence([ 11, 13, -35, 17, 17, -26, -18, 19, 32, 42, -10000, 46 ]))
console.timeEnd('s')

var maxSequence2 = function(arr){ // not mine :(
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; ++i) {
        sum += arr[i];
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);
        console.log({sum, min, ans})
    }
    return ans;
};
console.time('s');
console.log(maxSequence2([ 11, 13, -35, 17, 17, -26, -18, 19, 32, 42, -10000, 46 ]))
console.timeEnd('s');*/

function incrementString (string) {
    let tmp = string.replace(/\D+/g,"");
    let numeric = (Number(tmp) + 1).toString();
    if (numeric.length < tmp.length) {numeric = numeric.padStart(tmp.length,'0')}
    return string.slice(0, (string.length - tmp.length)) + numeric;
}
// console.log(incrementString('dsdfgh009'))

function rgb(r, g, b){
	for (let argumentsKey in arguments) {
		if (arguments[argumentsKey] < 0) {arguments[argumentsKey] = 0;} else if(arguments[argumentsKey] > 255) {arguments[argumentsKey] = 255}
	}
    return (0 + r.toString(16)).slice(-2).toUpperCase() + (0 + g.toString(16)).slice(-2).toUpperCase() + (0 + b.toString(16)).slice(-2).toUpperCase();
}
//console.log(rgb(300,0,-20))

function domainName(url){
    if (url.indexOf('//') !== -1){
        url = url.slice(url.indexOf('//') + 2)
    }
    url = url.split('.');
    return url[0] === 'www' ? url[1]: url[0];
}

/*let hrstart = process.hrtime(); // Замер времени
domainName('www.xakep.ru');
console.log(process.hrtime(hrstart));*/

function zeros (n) {
    let out = 0, iter = 1, tmp = 1;
    while (tmp){
        tmp = ~~(n/(5 ** iter));
        out += tmp;
        iter++;
    }
    return out // Делить на степень пятерки пока можно
}
/*let hrstart = process.hrtime()
console.log(zeros(34));
console.log(process.hrtime(hrstart));*/

//
function solution(list) {
    let out = [];
    for (let i = 1; i <= list.length; i++) {
        if (list[i] === list[i - 1] + 1) {
            let st = list[i - 1];
            while (list[i] === list[i - 1] + 1) {
                i++;
            }
            if (list[i - 3] === list[i - 2] - 1 && list[i - 2] + 1 === list[i - 1]) {
                out.push(st + '-' + list[i - 1]);
            } else {
                out.push(list[i - 2], list[i - 1])
            }
        } else {
            out.push(list[i - 1])
        }
    }
    return out.join(',')
}
//console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));

const Calculator = function() {
    this.evaluate = string => {
        // this.evaluate = s => (function*(){}).constructor('yield '+s)().next().value; - решение в одну строку
        return string.value;
    }
};

var calculate = new Calculator();
//console.log(calculate.evaluate('127'));

function replaceVogals(str) {
    return str.replace(/[aouei]/g, '?');
}
//console.log(replaceVogals('lorem'));

function flatten() {
    let out = [];

    function doFlat(arguments) {
        for (let index in arguments) {
            if (Array.isArray(arguments[index])) {
                doFlat(arguments[index])
            } else {
                out.push(arguments[index])
            }
        }
        return out
    }

    return doFlat(arguments)
}
//console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']]));

// perfect Power
const isPP = function (n) {
    let tmp;
    for (let i = 2; i <= ~~(Math.sqrt(n)); i++) {
        tmp = Math.round(Math.log(n) / Math.log(i));
        if (i ** (tmp) === n) {
            return [i, tmp]
        }
    }
    return null
};
//console.log(isPP(7056));

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

snail = function(array) {
    if (!array[0][0]){ return [] }
    let n = array.length, out = [];
    for (let i = 0, x = 0, y = 0; i < n * n;) {
        while (y < n && array[x][y] !== 0) {
            out.push(array[x][y]);
            array[x][y] = 0;
            y++; i++;
        }
        y--; x++;

        while (x < n && array[x][y] !== 0) {
            out.push(array[x][y]);
            array[x][y] = 0;
            x++; i++;
        }
        x--; y--;
        while (y >= 0 && array[x][y] !== 0) {
            out.push(array[x][y]);
            array[x][y] = 0;
            y--; i++;
        }
        y++; x--;
        while (x > 0 && array[x][y] !== 0) {
            out.push(array[x][y]);
            array[x][y] = 0;
            x--; i++;
        }
        x++; y++;
    }
    return out
};

/*console.log(snail([[1,2,3,4],
                        [5,6,7,8],
                        [9,10,11,12],
                        [13,14,15,16]]))*/

function sumIntervals(intervals) {
    let sum = 0;
    intervals = intervals.sort(sortFunction);

    function sortFunction(a, b) { // Сортировка по первому столбцу
        if (a[0] === b[0]) {
            return 0;
        } else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    }

    sum += intervals[0][1] - intervals[0][0];
    let max = intervals[0][1];
    for (let key = 1; key < intervals.length; key++) {
        if (intervals[key][1] <= max) {
            // nothing
        } else if (intervals[key][1] >= intervals[key - 1][1] && intervals[key][0] <= intervals[key - 1][1]) {
            sum += intervals[key][1] - intervals[key - 1][1];
            max = intervals[key][1];
        } else {
            sum += intervals[key][1] - intervals[key][0];
            max = intervals[key][1];
        }
    }
    return sum;
}
/*console.log(sumIntervals( [
    [ 1, 20 ], [ 1, 6 ], [ 5, 11 ], [ 10, 20 ], [ 16, 19 ]
] ));*/

function convert2bin(input) {

	// If input is 0|1
	if(input === 0 || input === 1) return '' + input

	//Calculate the binary representation
	var bin = ''
	while(input !== 0) {
		bin = bin + input % 2
		input = parseInt(input/2)
	}

	//Return the string in reverse
	return bin.split('').reverse().join('')
}

/**
 * frac2bin - Convert fractional part to binary representation
 * @param {input} - The fractional part
 * @return {bin} - The binary representation
 **/
function frac2bin(input) {

	//If input is 0
	if(input === 0) return '' + input

	// To limit the while loop in case of recurring decimals e.g. 0.1
	var limit = 0
	var bin = ''

	//Calculate the binary representation
	while(input !== 0 && limit < 32) {
		input = input * 2
		if(input >= 1) {
			bin = bin + '1'
			input -= 1
		}
		else bin = bin + '0'
		limit++
	}

	return bin
}

/**
 * binary32mantissa - Returns the mantissa from the normalized number
 * @param {input} - The normalized number
 * @param {exp} - The 'e' value required to get the normalized number
 * @return {result} - The mantissa portion
 **/
function binary32mantissa(input, exp) {

	// Remove the decimal point
	input = input.replace(/\./,'')

	return (exp > 0) ? input.slice(1, input.length) : input.slice(1 - (exp), input.length)
}

function pad(input, total, dir) {

	var padLen = total - input.length
	var padStr = ''
	while(padLen-->0) padStr = padStr.concat('0')

	// If dir == 1 then pad in front else pad in back
	return (dir === 1) ? padStr.concat(input) : input.concat(padStr)
}

function float2bin(input) {

	input = Number(input)

	//Components required
	let normalPart,
		fracPart,
		base2float,
		bin32exp,
		bin32mantissa,
		sign

	// Extract the integer from the real number
	normalPart = parseInt(Math.abs(input))

	// Extract the fractional part from the real number
	fracPart = Math.abs(input) - normalPart

	// Resolve sign of the number for the sign bit
	sign = Math.abs(input) === input ? '0' : '1'

	// Get the base2 representation of the real number
	// Ex. (12.375)_10 = (1100.011)_2
	base2float = convert2bin(normalPart) + '.' + frac2bin(fracPart)

	// Calculate the value of exp for Normalized number (https://en.wikipedia.org/wiki/Normalized_number)
	var exp = base2float.indexOf('.') - base2float.indexOf('1')
	if(exp > 0) exp = exp - 1

	// Get the 8-bit exponent part
	if(exp !== 1) bin32exp = pad(convert2bin(127 + exp), 8, 1)
	else bin32exp = pad('', 8, 1)

	// Get the 23-bit mantissa part
	bin32mantissa = pad(binary32mantissa(base2float, exp), 23, 0)

	// Return the 32-bit binary32 representation
	var bin32float = (bin32exp + bin32mantissa).slice(0, 31)
	return sign + bin32float
}
//console.log(float2bin(123))

// Do the wave from words
function wave(str) {
    let out = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ')
            out.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length))
    }

    return out
}


