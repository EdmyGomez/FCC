// La sintaxis es a ? b : c, donde a es la condición, b es el código a ejecutar 
// cuando la condición devuelve true, y c es el código a ejecutar cuando la condición devuelve false.
// La siguiente función utiliza una sentencia if/else para comprobar una condición:

function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater or equal";
    }
  }

//   Esto puede reescribirse usando el operador condicional:

function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}


function checkEqual(a, b) {
    return a===b ? "Equal" : "Not Equal"
  }
  
  console.log(checkEqual(2, 2))