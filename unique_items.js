function uniqueElements(arr) {
    return new Set(arr);    
}
console.log(uniqueElements([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]));
//Output: Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }