const oneArray =[1,2,3,4];
const twoArray = [5,6,7,8];
//Now arise the problem , how to merge this two array into a single array
//Solution:

//concat()
const threeArray = oneArray.concat(twoArray);
console.log(threeArray);
//Output: [1, 2, 3, 4, 5, 6, 7, 8]


const fourArray =[oneArray,twoArray];
console.log(fourArray);
//Output: [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

//Spread Operator
const fiveArray= [...oneArray,...twoArray] 
console.log(fiveArray);
//Output: [1, 2, 3, 4, 5, 6, 7, 8]
//'...' it is rest and spread both, based on the used and implementation is determined
// when we implement spread operator then all the elements of the array get spread out
//...oneArray = 1,2,3,4
//...twoArray = 5,6,7,8
//********************************************************************************************************************

//REST OPERATOR
function manyArguments(){
    let args= Array.from(arguments);
    console.log(typeof arguments);
    let finalArr =args.map(e=>e)
    console.log(finalArr);
}
manyArguments(1,2,3,4)
manyArguments(1,2,3,4,5,6,7)
//Output: Object [ 1, 2, 3 ,4]
// Object [ 1, 2, 3, 4, 5, 6, 7 ]

//Introducing Rest Operator
function manyArgumentsv2 (...args){
    console.log(typeof args);
    let finalArr =args.map(e=>e)
    console.log(finalArr);
}
manyArgumentsv2(1,2,3,4)
manyArgumentsv2(1,2,3,4,5,6,7)
//Output:object  [ 1, 2, 3 ,4]
// object [ 1, 2, 3, 4, 5, 6, 7 ]  
// Rest operator collects the elements of the array and returns it as an array 

//***************************************************************************************************************************

const siteName = 'Bangalore';
console.log([...siteName]);
//Output: [ 'B', 'a', 'n', 'g', 'a', 'l', 'o', 'r', 'e' ]
//Spread

function Heroes(...values){
    return values
}
console.log(Heroes("Superman","Batman","Spiderman"));
//Output: [ 'Superman', 'Batman', 'Spiderman' ]
//Rest

//************************************************************************************************************************** *
//SET
//The set object lets you store unique values of any type.
let emptySet = new Set();
console.log(emptySet.size);
//Output: 0

let myArray =[1,2,3,4]
let newSet = new Set(myArray);
console.log(newSet);
//Output:Set(4) { 1, 2, 3, 4 }

let new1Set = new Set();
new1Set.add(myArray);
console.log(new1Set);
//Output:Set(1) { [ 1, 2, 3, 4 ] }

let new2Set = new Set([...myArray]);
console.log(new2Set);
//Output:Set(4) { 1, 2, 3, 4 }
console.log(new2Set.has(9));
//Output: false
new2Set.add(9);
console.log(new2Set.has(9));
//Output: true
new2Set.clear();
console.log(new2Set);
//Output:Set(0) {}

//Set Differnece
function setDiffernece (setA, setB){
   return new Set(([...setA].filter(e=> !setB.has(e))));
}
const setT= new Set([1,2,3,4]);
const setF = new Set([3,4,5,6]);
console.log(setDiffernece(setT,setF));
//Output:Set(2) { 1, 2 }
//**********************************************************************************************************************
let map =new Map();
console.log(map.size);


let arr=[
    [1,"John"],
    [2,"Jane"],
    [3,"Jim"],
    [4,"Jill"],
    [5,"Jack"]
];

let newMap =arr.map((arrayItem)=>map.set(arrayItem[0],arrayItem[1]));
console.log(newMap);