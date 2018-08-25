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


