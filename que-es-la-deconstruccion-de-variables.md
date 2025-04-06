---
cover: >-
  https://www.nocountryforgeeks.com/assets/images/posts/2018-09-18-destructuring/header.jpg
coverY: 0
---

# ¿Qué es la deconstrucción de variables?

Es una forma rápida de sacar valores de un objeto o array y guardarlos en variables sin tener que acceder a cada propiedad manualmente.

Utiliza una sintaxis muy parecida a la de crear objetos.

#### Sintaxis

```javascript
let {firstName, lastName} = myName;
```

#### Ejemplo

```javascript
const myName = {firstName: "Janire", lastName: "Martinez"};
    
let {firstName, lastName} = myName; 
   
console.log(firstName)// Janire
console.log(lastName)// Martinez
```

### Beneficios de la deconstrucción

* **Código más limpio y legible.** Al permitir extraer valores de objetos o arrays de manera concisa, evita tener que escribir múltiples líneas de código.

```javascript
//En vez de hacer esto:
const myName = { firstName: "Janire", lastName: "Martinez" };
const firstName = user.firstName;
const lastName = user.lastName;

//Podemos hacer: 
const myName = { firstName: "Janire", lastName: "Martinez" };
let {firstName, lastName} = myName;
```

* **Asignación simultánea.** Permite asignar múltiples valores a variables al mismo tiempo.

```javascript
const [a, b]= ["banana", "apple"]; //asignamos los valores 'banana' y 'apple' a 'a' y 'b'
console.log(a + ", " +b)//'banana, apple'
```

* **Valores por defecto.** Permite establecer valores predeterminados para las variables. Evita errores en caso de las propiedades o elementos no existan.

```javascript
const myName = {firstName: "Janire", lastName: "Martinez"};
    
let {firstName, lastName, age = 28} = myName; 
   
console.log(firstName)// Janire
console.log(lastName)// Martinez
console.log(age)//28 
```

* **Renombrado de variables.** Permite cambiar el nombre de la variables al extraerlas del array u objeto

```javascript
const myName = {firstName: "Janire", lastName: "Martinez"};
    
let {firstName: name, lastName, age = 28} = myName; //hemos cambiado el nombre de la variable 'firstName' por 'name'
   
console.log(name)// usamos 'name' para llamarla
console.log(lastName)
console.log(age)
```

### Características

* **Deconstrucción anidada.** Permite extraer propiedades de objetos dentro de otros objetos.

```javascript
const myName = {
  firstName: "Janire", 
  lastName: "Martinez",
  adress:{
    city: "Portugalete",
    street: "Carlos VII"
  }
};
    
let {firstName, lastName, adress:{city, street}} = myName; 
   
console.log(firstName)// "Janire"
console.log(lastName)// "Martinez"
console.log(city)// "Portugalete"
console.log(street)// "Carlos VII"
```

* **Intercambio de variables.** Permite intercambiar las variables.

```javascript
let a = "banana", b = "apple";
[a, b] = [b, a];

console.log(a) // apple
console.log(b)// banana
```

* **Deconstrucción con parámetros de función.** Permite desestructurar un objeto o array directamente el los parámetros de una función.

```javascript
function greeting ({firstName, lastName}) {
  console.log(`Mi nombre es ${firstName} ${lastName}`)
};
    
let myName = {
  firstName:"Janire", 
  lastName:"Martinez"
};
   
greeting(myName)// Mi nombre es Janire Martinez
```

* **Deconstrucción en la importación de módulos.** Permite importar solo las partes necesarias de un módulo de manera clara y concisa.

```javascript
import { sum, multiply } from './math.js // importamos solamente las funciones "sum" y "multiply" 

console.log(sum(2, 8));  // 10
console.log(multiply(3, 3)); //9
```

* **Deconstrucción en ciclos.** Se puede utilizar en ciclos para iterar sobre arrays de objetos y extraer sus propiedades de manera concisa.

```javascript
const fruits = [
  {fruit: "apple", color: "red"}, 
  {fruit: "banana", color: "yellow"},
  {fruit: "pear", color:"green"}
];
    
for (const{fruit, color}of fruits) {
  console.log(`fruit: ${fruit}, color: ${color}`)
} //'fruit: apple, color: red' 
  //'fruit: banana, color: yellow'
  //'fruit: pear, color: green'
```

* **Deconstrucción y Rest Operator.** Se puede combinar con el operador **rest** `...`  para capturar el resto de las propiedades de un objeto en una variable.

```javascript
const myName = {
  firstName: "Janire", 
  lastName: "Martinez",
  age: 28,
  city: "Portugalete"
  
};
    
let {firstName, lastName, ...rest} = myName; 

console.log(firstName); //Janire
console.log(lastName); //Martinez
console.log(rest); //{age: 28, city: "Portugalete"}
```

* **Deconstrucción de arrays.** La deconstrucción también funciona con arrays.

```javascript
const [fruit1, fruit2, ...rest] = ["apple", "banana", "pear", "strawberry", "blueberry"];

console.log(fruit1) //apple
console.log(fruit2) //banana
console.log(rest) //["pear", "strawberry", "blueberry"]
```

{% embed url="https://dev.to/keogh/deconstrucion-de-objectos-en-javascript-3b9b" %}
