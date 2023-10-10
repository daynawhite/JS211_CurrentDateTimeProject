// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
// let num = 5
// let text = num.toString()
// console.log(text)
// console.log(typeof text)


// Write a JavaScript program to convert a string to the number.
// let nbr = Number('765')
// console.log(nbr)


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String



let itemInput
const formOne = document.querySelector('#formOne')
const formOneInput = document.querySelector('#dataItem')

formOneInput.addEventListener("submit", function(event){
event.preventDefault()
console.log(formOneInput.value)
})

// const saveItem = (item) => {
//   itemInput = item.value
//   console.log(itemInput)
// }

// function itemID(valueX) {
// if (valueX === 'true' || valueX === 'false') {
//   console.log("Boolean")
// } else if (valueX === 'null') {
//   console.log("Null") 
// } else if (!valueX.length) {
//  console.log("Undefined")
// }else if (!isNaN(Number(valueX))) {
//   console.log("Number")
// } else if (isNaN(Number(valueX))) {
//   console.log("NaN")
// } else console.log('String')
// }

// itemID(itemInput)

// function getInputType(value) {
//   console.log(value)
//   if (value === "")
//       {return "";
//     console.log();}
//   else if(value === 'true' || value === "false")
//       {return "boolean";
//       console.log(value);}
//   else if(!isNaN(Number(value)))
//       return "number";
//   else
//       return typeof value;
// }


// getInputType(true)


// let x = 7
// console.log(typeof x)

  
// Write a JavaScript program that adds 2 numbers together.



// Write a JavaScript program that runs only when 2 things are true.

// const firstItem = (x) => {
//   if ((x === 'undefined')
//       || (x === '')
//       || (x === 'false')
//       || (x === '0')
//       || (x === 'zero')
//       || (x === 'null')){
//     return false;
//   // console.log(`${x} is a falsy value.`);
//   }
// //   else {
// //   return true;

// // }

// console.log(dType('undefined'));



// Write a JavaScript program that runs when 1 of 2 things are true.


// const compareItems() {
//   if firstItem() && secondItem()
// }



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
