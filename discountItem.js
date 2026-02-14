//let OriginalPrice= [250,645,300,900,50];

// let a = 200;

// let b= a *(20/100);

// let result = a-b;


// console.log(result);

let OriginalPrice= [250,645,300,900,50];
let result = [];
let discount =0;

for (let i =0; i< OriginalPrice.length; i++ ){
     
  discount = OriginalPrice[i] * (20/100);
  result.push(discount);


}
console.log(`original item ${OriginalPrice} \n`)
console.log(`Discount applied ${result}\n`)

// Using MAP GUMCTION BY PASSING THE ANNOMOUS FUNCTION 


let originalPrice= [250,645,300,900,50];

let discountItems = originalPrice.map(function(val) {
  return val * (20/100);
 }); 

 console.log(discountItems);

 // WE CAN USE ARROW FUNCTION AS WELL