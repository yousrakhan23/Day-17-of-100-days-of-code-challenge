
// Q 127:

// Convert a traditional function expression to an arrow function.
// Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own
// bindings to this or super, and should not be used as methods.

const traditionalFunctions = function (a : any , b : any ) {
    return a + b ;
} ;
const arrowFunctions = (a : any , b : any ) => a + b ;

console.log(traditionalFunction(7 , 4)) ; // 11
console.log(arrowFunction(2 , 6)) ; // 8

//.....................................................................................................................

// Q 128: Create an arrow function that takes multiple parameters and returns the product of all parameters.
// Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters,
// you enclose them in parentheses.

const multiplyParameterss = (... numbers : number []) =>
    numbers.reduce((total , number) => total * number , 1) ;

console.log(multiplyParameters(2 , 3 , 4)) ; // 24

// Q 129:

// Explain how this behaves differently in arrow functions compared to traditional functions.
// Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary
// depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code 
//that contains the arrow function.

const traditionalVsArroww = {
    value : "traditionalVsArrow value" , 
    traditionalFunction : function() {
        console.log("Traditional Function:" , this.value) ;
    } , 
    arrowFunction :function () {
        console.log("Arrow Function:" , this.value);
    },
} ;
traditionalVsArrow.traditionalFunction() ;
traditionalVsArrow.arrowFunction() ;

//........................................................................................................................

