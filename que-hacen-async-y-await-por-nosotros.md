---
cover: >-
  https://blog.alexdevero.com/wp-content/uploads/2020/06/08-06-20-how-javascript-async-await-works-and-how-to-use-it-blog.jpg
coverY: 0
---

# ¿Qué hacen async y await por nosotros?

**Async y await hacen que las promesas sean más fáciles de escribir.**

### Async

La palabra **async** se coloca antes de una función. Esta palabra significa que la función devolverá siempre una promesa aún si no escribimos `new Promise` .  Podemos utilizar **await** dentro de una función async.

### Await

La palabra **await** siempre se usa dentro de una función async. **Await** pausa una función hasta que la promesa se resuelva o se rechace. Si la promesa falla, podemos capturar el error con un bloque `try/catch`**.**

### **Asinc/await para comunicarse con APIs externas**

Para llamar a una API externa usamos `fetch( )` , añadiendo la url dentro del paréntesis ente comillas `" "`  .&#x20;

```javascript
async function apiExample() {
  try {
    const myApi = await fetch("https://api.github.com/search/repositories?q=javascript");

    if (!myApi.ok) { //verificamos que la respuesta sea correcta
      throw new Error('Error in API request'); //si no es correcta, lanzamos un error
    }
    const returnedApi = await myApi.json(); //nos devuelve la respuesta en formato JSON
    console.log(returnedApi);
  } catch (error) { //capturamos el error con catch en caso de que lo haya
    console.log(error);
  }
}

apiExample(); //llamamos a la función
```

### Manejar errores con async/await

* Usando `.then( )` y `.catch( )`&#x20;

Para manejar una promesa que ha sido resuelta se usa `.then`  y para manejar un error en la promesa se usa `.catch`

#### Ejemplo  `then/catch`

```javascript
const shoppingCart = () => {
  let myStock = 0;  
  
  return new Promise((resolve, reject) => {
    if (myStock > 0) {
      resolve("Stock available");
    } else {
      reject("Not enough stock");
    }
  });
};

async function stockVerify() {
  const returnedStock = await shoppingCart() //espera la respuesta de la promesa
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error(error);  
    });
}

stockVerify(); //imprimirá 'Not enough stock'.
```

* Usando el bloque `try/catch`

Este bloque  es útil cuando queremos capturar errores de manera más centralizada sin la necesidad de usar  `.then()` y `.catch()`. Se recomienda usar cuando se trabaja con `async/await`, porque es más limpio y fácil de leer.

#### Ejemplo  bloque `try/catch`

```javascript
const shoppingCart = () => {
  let myStock = 10; 
  
  return new Promise((resolve, reject) => {
    if (myStock > 0) {
      resolve("Stock available");
    } else {
      reject("Not enough stock");
    }
  });
};

async function stockVerify() {
  try {
    const returnedStock = await shoppingCart(); //espera la respuesta de la promesa
    console.log(returnedStock);  
  } catch (error) {
    console.error(error);  
  }
}

stockVerify(); //imprimirá Stock available
```



{% embed url="https://lenguajejs.com/asincronia/async-await/promesas/" %}

{% embed url="https://es.javascript.info/async-await" %}
