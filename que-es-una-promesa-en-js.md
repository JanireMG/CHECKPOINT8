---
cover: https://miro.medium.com/v2/resize:fit:600/1*CbXf__6Uv3wvnFZNkHaRAQ.png
coverY: 0
---

# Qué es una promesa en JS?

Una promesa es un **concepto para simplificar el manejo de la asincronía** que representa la terminación o el fracaso de una operación.

Una **promesa** es algo que en principio pensamos que se cumplirá en el futuro, pero a medida que pasa el tiempo pueden ocurrir varias cosas:

* La promesa **se cumple.**
* La promesa **no se cumple.**

<figure><img src="https://www.boardinfinity.com/blog/content/images/2023/02/Promise-in-JS-1.png" alt=""><figcaption></figcaption></figure>

### Sintaxis

```javascript
let myPromise = new Promise((resolve, reject) {
  resolve(); 
  reject();
});

myPromise.then(
  function(value) { },
);
myPromise.catch(
 function(error) { },
);
```

#### Ejemplo&#x20;

```javascript
const myPromise = new Promise(function(resolve, reject) {
  let number = 10;
    if (number > 8){
  resolve("It's correct"); 
  } else{
  reject("Error");
  }
});

myPromise.then(
  function(value) { 
  console.log(value) //si el numero es mayor de 8, imprimirá 'Good'
  }
);
myPromise.catch(
 function(error) { 
 console.log(error) //si el número es menos de 8, imprimirá 'Error'
 }
);
```

### Métodos de las promesas

* **.then( )**: Este método se utiliza **para obtener el resultado exitoso de una promesa**. Si estamos esperando a que algo se complete, por ejemplo, una solicitud a un servidor,`.then( )` se ejecutará cuando la tarea se resuelva con éxito.Recibe una función que se ejecuta con el resultado exitoso de la promesa.
* **.catch( )**: Se utiliza **para manejar los errores si algo sale mal con la promesa**. Puedes encadenar `.catch( )` después de `.then( )` para manejar errores específicos. `.catch( )` es como un plan B para cuando  algo no sale bien.
* **.finally( )**: Este método **se ejecuta siempre** después de que la promesa se resuelva o se rechace, **independientemente del resultado**. Es útil para hacer tareas de limpieza, como cerrar conexiones o liberar recursos.
* **Promise.all(iterable)**: Este método permite manejar múltiples promesas al mismo tiempo. Este método espera a que todas las promesas en el iterable se resuelvan antes de continuar. Si una promesa falla, `Promise.all( )` también falla.
* **Promise.race(iterable)**: Este método resuelve una promesa tan pronto como una de las promesas en el iterable se resuelva o se rechace. Es útil cuando deseas obtener el resultado más rápido de múltiples promesas.

### Estados de las promesas

Una promesa puede tener 3 estados:

* **Pendiente** (pending).  Es el estado inicial. Aún no se sabe si la operación será exitosa o fallará.
* **Resuelta con éxito** (fullfilled). Cuando la operación que estamos esperando se completa con éxito la promesa cambia al estado **fullfilled.** A continuación se ejecuta la función que pasamos al método `.then`
* **Rechazada** (rejected). SI ocurre un error durante la operación, la promesa pasa al estado **rejected** y se ejecutaría el código definido con el método `.catch`.

<figure><img src="https://miro.medium.com/v2/resize:fit:1400/1*twe3mTi-duRtRjI3WQXADw.png" alt=""><figcaption></figcaption></figure>
