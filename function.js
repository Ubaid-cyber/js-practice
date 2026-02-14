function ubaid (str){

    let v = "aeiouAEIOU";
    let count =0;

    for(let i=0;i<str.length;i++){
        if(v.includes(str[i])){
          count++;
        }
    }
    return count;

}
let str =prompt("Enter Your String ")

let result = ubaid(str);

console.log(result);