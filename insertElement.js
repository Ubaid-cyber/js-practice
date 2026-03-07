// //create elements into the Document
// let btn = document.createElement("button");
// btn.innerText="ClickMe!";

// // add elements  into the document 

// // get the element 

// let div = document.querySelector("div");
// div.append(btn);
// div.prepend(btn);
// div.before(btn);
// div.after(btn);

// let para= document.querySelector(".para");
// para.remove();

let btn= document.querySelector("#btn");

btn.onclick = (evt) => {
    //  console.log("btn was clicked");
    //  let a =25;
    //  a++;
     console.log(evt);
      console.log(evt.type);
       console.log(evt.target);
};

// let box =  document.querySelector("div");
// box.onmouseover = () => {
//     console.log("you are on box ");
// };