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
let num = 5
let text = num.toString()
console.log(text)
console.log(typeof text)


// Write a JavaScript program to convert a string to the number.
let nbr = Number('765')
console.log(nbr)


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
let itemIDResult = ""
const formOne = document.querySelector('#formOne')
const formOneInput = document.querySelector('#dataItem')

formOne.addEventListener("submit", function(event){
  event.preventDefault()
  console.log(formOneInput.value)
  itemID(formOneInput.value)
 
  }
  )

function itemID(valueX) {
if (valueX === 'true' || valueX === 'false') {
  itemIDResult = "Boolean";
  console.log("Boolean")
} else if (valueX === 'null') {
  itemIDResult ="Null";
  console.log("Null") 
} else if (!valueX.length) {
  itemIDResult ="Undefined";
  console.log("Undefined")
} else if (!isNaN(Number(valueX))) {
  itemIDResult ="Number";
  console.log("Number")
} else {itemIDResult ="String";
  console.log('String')};

document.getElementById("dataTypeResult").innerHTML = "The data type is: " + itemIDResult;
}

  
// Write a JavaScript program that adds 2 numbers together.

const formTwo = document.querySelector('#formTwo')
const firstNum = document.querySelector('#first-number')
const secondNum = document.querySelector('#second-Number')

formTwo.addEventListener("submit", function(event){
  event.preventDefault()
  console.log(firstNum.value)
  console.log(secondNum.value)
  add(firstNum.value,secondNum.value)
})

function add(n1,n2) {
  const num1 = parseInt(n1)
  const num2 = parseInt(n2)
  const sum = num1 + num2
  document.getElementById("display-sum").innerHTML = "The sum is: " + sum;
  console.log(sum)
}


// Write a JavaScript program that runs only when 2 things are true.
const formThree = document.querySelector('#formThree')
const firstItem = document.querySelector('#first-item')
const secondItem = document.querySelector('#second-item')

formThree.addEventListener("submit", function(event){
  event.preventDefault();
  if (truthyFalsyTest(firstItem.value) && truthyFalsyTest(secondItem.value)){
    console.log("both are truthy")
    document.getElementById("display-TF-results").innerHTML = "Both items are truthy."
  }
  else if (!truthyFalsyTest(firstItem.value) && !truthyFalsyTest(secondItem.value)){
    console.log("both are falsy")
    document.getElementById("display-TF-results").innerHTML = "Both items are falsy."
  }
  else {console.log('They are different')
  areTheyDifferent(firstItem.value,secondItem.value)
  document.getElementById("display-TF-results").innerHTML = "One is truthy and one is falsy."}
})


function truthyFalsyTest(x) {
  if ((x === 'undefined')
      || (!x.length)
      || (x === 'false')
      || (x === '0')
      || (x === 'null')){
    return false
  }
   else return true
 }



// Write a JavaScript program that runs when 1 of 2 things are true.
function areTheyDifferent(x) {
if ((truthyFalsyTest(firstItem.value) && !truthyFalsyTest(secondItem.value)) || (!truthyFalsyTest(firstItem.value) && truthyFalsyTest(secondItem.value)))
  console.log("One is truthy and one is falsy")
}




// Write a JavaScript program that runs when both things are not true.  

if (!truthyFalsyTest(firstItem.value) && !truthyFalsyTest(secondItem.value)){
  console.log("both are falsy")}

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
