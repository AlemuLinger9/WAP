/*
1.Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.
*/
function sum(arguments){
    console.log(typeof arguments)
    let sum = arguments.filter(e=>e>20).reduce((accum, num)=>accum+num);
    return sum;
}
arr = [1,1,20,34,2];
let res = sum(arr);
console.log("Sum elements of array= "+res);

/**
 * 2. Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’.
 */
let getNewArray = function(myStr){
    let myArr = myStr.filter(e=>e.length>=5).filter(s=>s.toLowerCase().indexOf('a')!==-1);
    return myArr;
};
let myStrArr = getNewArray(["Java","Wap","Algorithm", "Data Structure", "Script"]);
console.log("Q2: Strings contains a"+myStrArr);

/**
 * 3. Implement an arrow function with feature below:

concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']
 */

let spreadIt = (arg1, arg2, arg3)=> [arg1, ...arg2, ...arg3];
let flatted = spreadIt('hi', [1,2,3], ['Hello','world']);
console.log("Q3: Flattend: "+flatted);
