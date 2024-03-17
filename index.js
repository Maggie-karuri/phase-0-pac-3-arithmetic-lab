function add(a, b) {
    return a + b;
  }
  const addResult = add(398, 97);
  console.log(addResult);
  
  function subtract(a, b) {
    return a - b;
  }
  const subtractResult = subtract(21, 390);
  console.log(subtractResult); 
  
  function multiply(a, b) {
    return a * b;
  }
  const multiplyResult = multiply(666, 1000);
  console.log(multiplyResult);

  function divide(a, b) {
    return a / b;
  }
  const divideResult = divide(10, 59.4);
    console.log(divideResult);
 
let n = 5;
function increment(n) {
    return ++n;
}
console.log(increment(n)); 
console.log(n);

function decrement(n) {
    return --n;
}
console.log(decrement(n));
console.log(n); 

function makeInt(n) {
    return parseInt(n, 10);
}
console.log(makeInt("3.4"));
function preserveDecimal(n) {
    const parsed = parseFloat(n);
    return isNaN(parsed) ? NaN : parsed;
}
console.log(preserveDecimal("25.7")); 
