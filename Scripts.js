// Demonstrates hoisting using var keyword
name = 'Llewellyn Barrett';
var name;
console.log(name); // Result: Llewellyn Barett

/*  Demonstartes Nonhoisting using let
name  = 'Llewellyn Barrett';
let name; 
console.log(name); ReferenceError: can't access lexical declaration `name' before initialization 
*/

//Demonstrates hoisting using function
setName();
function setName() {
    var name = 'Covalence';
    console.log(name);  //Result: Covalence
}

//Demonstrates hoisting using another function
console.log('Begin code');
let avg = average(2, 2);
console.log('After assignment ', avg);
function average(i, j) {
    console.log('Inside function:');   // Result : Begin Code 
    var answer = (i + j) / 2;         // Inside Function
    return answer;                   //  After assignment 2                      
}

//Demonstrates functions have separate local scopes and heave access to variables declared in global scope
let fruits = ['apples', 'bananas', 'pineapples'];
let favFruit;

function printFruits() {
    favFruit = fruits[2];
    console.log(fruits[0]);
}
function printFavFruit() {
    console.log(favFruit);
}

printFruits();                 //bananas
printFavFruit();              // pineapples

/*
// Demonstrates functions have separate local scopes where local scope of one function is not accessible globally
let fruits = ['apples', 'bananas', 'pineapples'];

function printFruits() {
    favFruit = fruits[2];
    console.log(fruits[0]);
}
function printFavFruit() {
    console.log(favFruit);
}

printFruits();                 //bananas
printFavFruit();              //  ReferenceError: favFruit is not defined

//Demonstrates separate local scopes within nested function where outer function does not have access to local scope of the inner function
let fruits = ['bananas', 'apples', 'pineapples'];
let favFruit;

function printFruits() {

    favFruit = fruits[2];
    function printFavFruit() {
        let leasFav = fruits[1];
        console.log(favFruit);
    }
    console.log(fruits[0]);
    printFavFruit();
    console.log(leasFav)

}

printFruits();               //bananas
                            // pineapples
                            // ReferenceError: leasFav is not defined

*/
// Demonstrates greeting function being hoisted to the top of scope which allows us to call it before declaring it.
greeting();
function greeting() {
    console.log("Hello Llewellyn")

// Demonstrates function expression are not hoisted to top of the scope and require declaration before invocation 
    /* aler(); */                 // ReferenceError: can't access lexical declaration `aler' before initialization
    let aler = function alertGreeting(){
        alert("Hello Llewellyn, again!")
    }
      aler();                  // Alert pop up ('Hello Llewellyn, again!')
}