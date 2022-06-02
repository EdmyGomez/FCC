// La siguiente función utiliza sentencias if, else if, y else para comprobar múltiples condiciones:

function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
// La función anterior puede ser reescrita utilizando múltiples operadores condicionales:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
// Se considera buena práctica dar formato a múltiples operadores condicionales de forma que cada condición esté en una línea separada, como se muestra arriba. Usar múltiples operadores condicionales sin una indentación adecuada puede hacer tu código difícil de leer. Por ejemplo:

function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}


function checkSign(num) {
    return (num == 0) ? "zero"
    : (num>0) ? "positive"
    : "negative" 
  }
  
  console.log(checkSign(0))