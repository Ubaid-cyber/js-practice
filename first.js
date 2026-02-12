let FullName= prompt("please enter your Fullname");

console.log("You UserName is Given below \n")

let username= FullName.replaceAll(/ /g, "");

console.log(` @${username + username.length}`);
