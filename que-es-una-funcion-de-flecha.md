---
cover: https://miro.medium.com/v2/resize:fit:2000/0*IsthJcl_LiuEArTa.png
coverY: 0
---

# ¿Qué es una función de flecha?

Una `función de flecha` permite escribir una sintaxis de función más corta, pero tienen diferencias clave con las funciones tradicionales.

## Diferencias entre función tradicional y función de flecha

* Valor `this`

Las **funciones de flecha** no tienen su propio valor `this`, heredan el valor `this` del contexto en el que se crearon.

En cambio las **funciones tradicionales** tienen su propio valor `this` .

* Argumentos&#x20;

Las **funciones de flecha n**o tienen argumentos , por lo que no pueden usarse como constructoras. Para acceder a los argumentos dentro de una función flecha, se debe depender del contexto exterior.

Las **funciones tradicionales** si tienen la **palabra clave arguments,** que es un objeto similar a un array el cual contiene todos los argumentos pasadosa a la función.

* `call()`, `apply()` y `bind()`

Las **funciones de flecha** al no tener su propio `this`, no funcionan bien con los métodos `call()`, `apply()` y `bind()`.\
Las **funciones tradicionales** se pueden invocar con `call()`, `apply()` y `bind()` para modificar el valor `this`.

* `yield`

Las **funciones de flecha n**o pueden usar `yield` dentro de su cuerpo.

Las **funciones tradicionales** pueden usar la **palabra clave `yield`** para pausar su ejecución y retornar valores de manera controlada

* Uso de new.target

Las **funciones de flecha no tienen acceso a new.target.**

Las **funciones tradicionales** pueden acceder a la **palabra clave new.target,** esta indica si una función ha sido llamada con **new**

* Uso como constructores

Las **funciones de flecha no pueden ser usadas como constructores**, estas no tienen el comportamiento necesario para ser invocadas con **new.**

Las **funciones tradicionales pueden ser usadas como constructores.**

### Sintaxis

```javascript
let mySum = (x, y) => x + y
```

#### Ejemplo

```javascript
let mySum = (x, y) => x + y;

console.log(mySum(4, 2)); //6 

```

### Ventajas

* La sintaxis es más corta y clara.
* No necesitas usar `function` o `return` en casos sencillos.
* Comportamiento predecible de `this`, especialmente útil en callbacks y funciones asíncronas.

### **Desventajas**

* No se pueden usar como constructores.
* No tienen el objeto `arguments`.
* No tienen su propio `this`, puede ser problemático en ciertos casos donde necesitas un `this` específico.
