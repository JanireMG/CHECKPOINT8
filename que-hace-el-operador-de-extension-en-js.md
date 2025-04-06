---
cover: https://miro.medium.com/v2/resize:fit:1024/1*u8zSAexhlhLqq5ZdWuJrmw.png
coverY: 0
---

# ¿Qué hace el operador de extensión en JS?

El **operador de extensión** (**spread operator**) permite que una expresión en lugares donde se esperan múltiples argumentos o elementos. Es una herramienta muy útil ya que ofrece una manera concisa y flexible de manejar datos en `JavaScript` .

El **operador spread** simplifica tareas complejas permitiendo escribir código mas limpio, expresivo y eficiente.

### Sintaxis

El operador de extensión se representa con tres puntos seguido de un iterable o expresión.

<pre class="language-javascript"><code class="lang-javascript"><strong>//sintaxis para declarar un array
</strong>let myNumbers = [...item]

//sintaxis para pasar argumentos a una función
function myNumbers(...item) {}
</code></pre>

#### Ejemplo

```javascript
let myNumbers= [1, 2, 3, 4, 5];
console.log(...myNumbers)
```

### Uso del operador spread

* **Concatenar arrays.** El **operador spread** se puede usar **para concatenar** 2 arrays **o** para **crear** una **copia** superficial de un array.

<pre class="language-javascript"><code class="lang-javascript">const myNumbers = [1, 2, 3];
const myOtherNumbers = [4, 5 ,6];
const myNumbersCopy= [...myNumbers];//hacemos una copia de myNumbers
const myTwoArrays =[...myNumbers, ...myOtherNumbers]; //concatenamos los 2 arrays

console.log(myNumbersCopy) //[1, 2, 3]
<strong>console.log(myTwoArrays)//[1, 2, 3, 4, 5 ,6]
</strong></code></pre>

* **Extender cadenas de texto.** Es **posible convertir un string en array de caracteres**, pudiéndose manipular o combinar con otros arrays utilizando métodos de array.

```javascript
const greeting = "Hello world!";
const greetingArray= [...greeting];

console.log(greetingArray);//[ 'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!' ]
```

* **Fusionar y clonar objetos.** El **operador spread** se puede utilizar **para copiar o combinar las propiedades de un  objeto dentro de otro**. Es útil para fusionar o crear o clonar objetos, crear un objeto nuevo con algunas propiedades anuladas o extraer propiedades específicas de un objeto

```javascript
const myName= {fName: "Janire", lName: "Gonzalez"};
const myOtherName= {lName: "Martinez", age: 28};
const concatenedName= {...myName, ...myOtherName};
const myNameCopy= {...myName}; 

console.log(concatenedName); //{ fName: 'Janire', lName: 'Martinez', age: 28 }
console.log(myNameCopy) //{ fName: 'Janire', lName: 'Gonzalez' }
```

* **Extender Argumentos de función.** El **operador spread** no solo sirve para trabajar con arrays u objetos, sino que, también es muy útil cuando se trata de **pasar valores a una función o constructor** de manera más flexible y dinámica.

```javascript
const numbers = [2, 20, 30];
const sum= (x, y, z) => (x * (y + z));

console.log(sum(...numbers)); //100 --> (2 * (20 + 30))
```

* **Combinación del Operador Spread con el Parámetro Rest.  El Operador Spread** se puede utilizar junto a otras funciones como, por ejemplo, la desestructuración de objetos y arrays. **Permite extraer y manipular elementos** de arrays o propiedades de objetos con una sintaxis concisa.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [firstNum, secondNum, ...rest] = numbers;

console.log(firstNum); //1
console.log(secondNum); //2
console.log(rest); //[ 3, 4, 5, 6, 7, 8, 9, 10 ]
```

{% embed url="https://kinsta.com/es/base-de-conocimiento/operador-javascript-spread/" %}
