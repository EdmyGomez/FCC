// La sintaxis de desestructuración es una sintaxis especial introducida en ES6, para asignar los valores directamente desde un objeto.
const user = { name: 'John Doe', age: 34 };

// const name = user.name;
// const age = user.age;



const { name, age } = user


console.log(user.age)
console.log(name)

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Cambia solo el código debajo de esta línea
  
  const {today, tomorrow} = HIGH_TEMPERATURES
  
  // Cambia solo el código encima de esta línea


// *****************************************************************************************************************************************************************************



//   La desestructuración te permite asignar un nuevo nombre de variable al extraer valores. Puedes hacer esto al poner el nuevo nombre después de dos puntos al asignar el valor.


  const HIGH_TEMPERATURE = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Cambia solo el código debajo de esta línea
  
  const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURE
  // Cambia solo el código encima de esta línea



// ________________________________________________________________________________*******************************************************************************


//   Usa sintaxis de desestructuración para asignar variables desde objetos anidados

// Puedes usar los mismos principios de las dos lecciones anteriores para desestructurar los valores desde objetos anidados.

// Usando un objeto similar a los ejemplos anteriores:

// const user = {
//   johnDoe: { 
//     age: 34,
//     email: 'johnDoe@freeCodeCamp.com'
//   }
// };

// Así es como se extraen los valores de propiedades de objetos y se los asigna a variables con el mismo nombre:

// const { johnDoe: { age, email }} = user;

// Y así es como se puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:

// const { johnDoe: { age: userAge, email: userEmail }} = user;



const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Cambia solo el código debajo de esta línea
  
  const {today:{low:lowToday, high:highToday}} = LOCAL_FORECAST
  
  // Cambia solo el código encima de esta línea