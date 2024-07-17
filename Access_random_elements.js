function extract (arr) {
    const[first,second,,,,,last] = arr;
    return [first,second,last];
}
console.log(extract([1,2,3,4,5,6,7]));
console.log(extract([100,200,300,400,500,600,700]));

// Output:
// [ 1, 2, 7 ]
// [ 100, 200, 700 ]