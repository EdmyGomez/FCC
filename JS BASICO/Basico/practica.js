// Eliminar: shift() - Primer Elemento
// Agregar: push() - Agrega Eltimo elemento -  o prompt
// Eliminar pop - Ultimo Elemento
// Agrega: unshift - Agrega Primer Elemento
// Estricta igualdad y diferencia ===, !==

// .hasOwnProperty Para realizar TEST a Objetos
// .hasOwnProperty(propname) para determinar si un objeto tiene una propiedad con ese nombre. .hasOwnProperty() devuelve true o false si se encuentra la propiedad o no.

// Math.random() para generar un decimal aleatorio.
// Utiliza otra función, Math.floor() para redondear el número hacia abajo a su número entero más cercano.

//A) Math.round retorna el valor de un número redondeado al entero más cercano.
//B) Math.floor la usamos cuando queremos redondear un número al máximo entero menor.

// prompt() para pedir datos
/*   
\''   Comilla Simple
\""   Comilla Doble
\\    Barra invertida
\n    Linea nueva
\r    Retorno de Carro
\t    Tabulacion
\b    Retroceso
\f    Salto de PAgina
*/


// función parseInt() analiza una cadena y devuelve un entero
// Ejercicio 1
// Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

console.log(lastLetterOfLastName);

// Ejercicio 2
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var myData = myArray[0][0];
// primer index me ubica la posiciones en la matriz y el segun selecciona el numero dentro de la matriz seleccionada.
var myData = myArray[2][1];
console.log(myData);

// Ejercicio 3
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

// Ejercicio 4
var myArray = [
  ["John", 23],
  ["cat", 2],
];

// Only change code below this line
var removedFromMyArray;
// Se le asigna el valor que elimino
removedFromMyArray = myArray.pop();

console.log(removedFromMyArray);
// Se imprime como queda el valor de myarray luego de haber eliminado su ultimo dato
console.log(myArray);

// Ejercicio 5

// Creacion de Funciones Que pueden ser Reutilizables
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();

// Ejercicio 6

// Creaccion de Funciones Reutilizables
function functionWithArgs(a, b) {
  console.log(a + b);
}

functionWithArgs(4, 2);

function functionWithArgs1(a, b) {
  var sum = 0;
  sum = a + b;
}
functionWithArgs1(12, 2);

// Ejercicio 7

// Declare the myGlobal variable below this line
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

// Ejercicio 8

// Creacion de la funcion
function timesFive(num) {
  return num * 5;
}
// Asignacion de valor a la funcion
var answer = timesFive(5);
console.log(answer);

// Ejercicio 9

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

console.log(myOutfit());

// Ejercicio 10
// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(99));

// Ejercicio 11

function nextInLine(arr, item) {
  // Only change code below this line
  // Agrega item al final
  arr.push(item);
  // elimina item del comienzo
  let remove = arr.shift();

  return remove;
  // Only change code above this line
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// Ejercicio 12

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));

// Ejercicio 13

// 5   >  3
// 7   > '3'
// 2   >  3
// '1' >  9
// In order, these expressions would evaluate to true, true, false, and false.

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(10));

// Ejercicio 14
function testSize(num) {
  // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num <= 25) {
    return "Huge";
  }

  return "Change Me";
  // Only change code above this line
}

console.log(testSize(7));

// Ejercicio 15

var names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }

  // Only change code above this line
}

console.log(golfScore(5, 4));

// ejercicio 16

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  // Only change code above this line
  return answer;
}
console.log(caseInSwitch(1));

// Ejercicio 17

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  // Only change code above this line
  return answer;
}

console.log(switchOfStuff(1));

// Ejercicio 18

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1));


// Ejercicio 19

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

switch(val){
  case 'bob':
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99: 
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
    default:
      answer="";
      break;
}
  // Only change code above this line
  return answer;
}

console.log(chainToSwitch(7));


// Ejercicio 20

function isLess(a, b) {
  // Only change code below this line
return a<=b;
  // Only change code above this line
}

console.log(isLess(13, 15));


// Ejercicio 21

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
console.log(myFun());

// Setup
function abTest(a, b) {
  // Only change code below this line
if(a<0||b<0){
  return 
}else{


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
}

console.log(abTest(2,2));


// Ejercicio 22

var count = 0;

function cc(card) {
  // Only change code below this line
  if (card>=2 && card<=6){
    count += 1;
  }else if (card>=7 && card<=9){
    count +=0;
  }else if (card==10 || card=='J'|| card=='Q'|| card=='K'|| card=='A'){
    count -= 1;
  }
if(count>0){
  return count + " Bet";
}else{
  return count +" Hold";
}
  // Only change code above this line
}

cc(8); cc('Q'); cc(); cc();cc();
console.log(cc())



// Ejercicio 23
var myDog = {
  // Only change code below this line
  name: "Bob",
  'legs':4,
  'tails':1,
  friends:['Marley', 'Humans'] 
  
  // Only change code above this line
  };

  console.log(myDog);




  // Ejercicio 24

  // Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

console.log('usa un', hatValue+' y una camisa ' + shirtValue);




  // Ejercicio 24
  // Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj['an entree'];   // Change this line
var drinkValue = testObj['the drink'];    // Change this line




var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);



// Ejercicio 25
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
prom
var playerNumber= 16;       // Change this line
var player = testObj[playerNumber];   // Change this line


// Ejercicio 26
// Modificar datos a un objeto
// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name="Happy Coder"
myDog['legs']=5
// Only change code below this line



// Agregar datos a un objetp
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark='woof';




// Ejercicio 27
// Eliminar datos de un objeto
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;

// Only change code below this line






// Ejercicio 28
// Setup
function phoneticLookup(val) {
  var result = "";

 // Only change code below this line
 var lookup={
 "alpha":"Adams",
 "bravo":"Boston",
 "charlie":"Chicago",
 "delta":"Denver",
 "echo":"Easy",
 "foxtrot":"Frank"
 }
result=lookup[val];
 // Only change code above this line
 return result;
}

console.log(phoneticLookup("charlie"));



// Ejercicio 28
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");
(myObj.hasOwnProperty("middle"));




var checkObj={gift: "pony", pet: "kitten", bed: "sleigh"};

function checkObj(obj, checkProp) {
  // Only change code below this line
  var objeto='';
  if (obj.hasOwnProperty(checkProp)){
    objeto=obj[checkProp]
  }else{
    objeto='Not Found'
  }
  return objeto;
  // Only change code above this line
}






// Ejercicio 29

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true,
  },
{
  'artist': 'Billy',
  'title': 'One Year',
  'release_year':2000
}
];

console.log(myMusic)






let a = 11;
let b = 10;
a > b ? console.log(a) : console.log(b);




// Accede a objetos anidados 
// Se puede acceder a las sub propiedades de objetos encadenando la notación de puntos o corchetes.

// Aquí hay un objeto anidado:

const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

console.log(ourStorage.cabinet["top drawer"].folder2);
consolo.log(ourStorage.desk.drawer);
ourStorage.cabinet["top drawer"].folder2




// Accede a arreglos anidados de los Objetos
// Como hemos visto en ejemplos anteriores, los objetos pueden contener tanto objetos anidados como así también arreglos anidados. De manera similar a como se accede a los objetos anidados, la notación de corchetes de arreglos puede ser encadenada para acceder a arreglos anidados.

// En el siguiente ejemplo, vemos cómo se accede a un arreglo anidado:

const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];

ourPets[0].names[1];
ourPets[1].names[0];

// Ciclo while
// Configuración
const myArray = [];
let i = 5;
// Cambia solo el código debajo de esta línea
while (i>0){
  console.log(myArray.push(i))
  i--;
}




// Iteraciones de Arreglos
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
  //  console.log(arr[i+1]);
}









// Configuración
const myArr = [2, 3, 4, 5, 6];

// Cambia solo el código debajo de esta línea
let total = 0;
for (let i = 0 ; i < myArr.length ; i++){
   console.log(total += myArr[i])
}






const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}






function multiplyAll(arr) {
  let product = 1;
  // Cambia solo el código debajo de esta línea
for (let i = 0 ; i < arr.length ; i ++ ){
  for(let x = 0 ; x < arr[i].length ; x ++){
    console.log(product *= arr[i][x])
  }
}


  // Cambia solo el código encima de esta línea
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);









function sum(arr, n) {
  // Cambia solo el código debajo de esta línea
if (n<=0){
  return 0;
}else {
  return (sum(arr,n-1) + arr [n-1])
}
  // Cambia solo el código encima de esta línea
}
console.log(sum([1], 0) );
console.log(sum([2, 3, 4], 1) );
console.log(sum([2, 3, 4, 5], 3) );



// Muta un arreglo declarado con const
// Algunos desarrolladores prefieren asignar todas sus variables utilizando const por defecto, a menos que sepan que necesitarán reasignar el valor. Solo en ese caso, utilizan let.
// Sin embargo, es importante comprender que los objetos (incluyendo arreglos y funciones), asignados a una variable usando const siguen siendo mutables. Usar la declaración const solo previene la reasignación del identificador de una variable.

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);




// Usa funciones flecha para escribir funciones anónimas de manera breve
// En JavaScript, usualmente no necesitas nombrar tus funciones, especialmente cuando se pasa una función como argumento a otra función. En su lugar, creamos funciones inline (en línea). No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.
// Para lograr esto, por lo general se usa la siguiente sintaxis:
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
// ES6 nos proporciona el azúcar sintáctico, para no tener que escribir funciones anónimas de este modo. En su lugar, puedes usar la sintaxis de función flecha:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
// Cuando la función no posee cuerpo y sólo tiene un valor de retorno, la sintaxis de "función de flecha", te permite omitir la palabra clave return, así como los corchetes que rodean el código. Esto ayuda a simplificar las funciones más pequeñas en sentencias de una sola línea:

const myFunc = () => "value";
// Este código todavía devolverá la cadena value por defecto.
const magic = () => new Date();