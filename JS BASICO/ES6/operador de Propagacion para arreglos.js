// 6 introduce el operador de propagación, que nos permite expandir arreglos y otras expresiones en lugares donde se esperan múltiples parámetros o elementos.

// El siguiente código ES5 usa apply() para calcular el valor máximo en un arreglo:
// Arreglo
var arr = [6, 89, 3, 45, 99];
var maximus = Math.max.apply(null, arr);


console.log(maximus)


// Lista
var arr = (6, 89, 3, 45, 99);
var maximus = Math.max(arr);


console.log(maximus)

// Operador de propagacion 
var arr = [6, 89, 3, 45, 99];
var maximus = Math.max(...arr);


console.log(maximus)

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Cambia esta línea

console.log(arr2);