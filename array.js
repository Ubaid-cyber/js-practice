// Theory 
// Array can be defined as the colectio of items which gets stored in the linear fashion 
// arrays are contigious memory allocation in nature 
//CMA means that they are strored contuiously and o.s gives them a block of  memory that must be fied in size

// below are the some basics example of the array 

// we can intialize the array as let as well as Const 

// Array is the type of object internally 

const array= [1,2,3,4,5,6];

console.log(array[3]);

// Arrays are mutable 

array[0]= 9;
console.log(array);

// we can not change the string indices as strings are immutable 

let str = "hello";

str[0]= "P";

console.log(str);


//