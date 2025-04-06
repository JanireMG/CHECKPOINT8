---
cover: >-
  https://lh3.googleusercontent.com/Avb0S8I_BAXE0CDVlX7F-6-5O2TvW45e04EwW2Dju3Cgeh_fIYPVE3SSelBskkIh4iWQdsITSZO7qgcL1U3szpBNM57tSK6TytgMYLy1ZhivlvcO_YMCqMP3yFJuvnrOeNCX2dsu=s0
coverY: 0
---

# ¿Cuáles son las diferencias entre const, let y var?

### VAR

`Var` es la palabra clave original para declarar variables, aunque actualmente **no se recomienda su uso**, a menos que sea por compatibilidad con navegadores antiguos .&#x20;

Es la más flexible de las 3 palabras clave.&#x20;

Permite **declarar la misma variable varias veces** y **reasignarle valores**, lo que puede llegar a crear errores en el código porque al estar disponible en toda la función, incluso declarándola dentro de un bloque(`if` o `for`) sigue estando estando disponible fuera de él. Esto nos puede llevar a errores inesperados o redeclaraciones por accidente.

```javascript
var x = 20;
var x = 58;

console.log(x) //58
```

```javascript
function greeting() {
  var txt= "Goodmorning!"
  if (true) {
    var txt = "Goodnight!"; //reasignamos la variable
  }
  console.log(txt); // Goodnight
}
greeting();
```

### LET

Esta palabra clave es relativamente nueva, se creó para resolver los problemas que surgían con `var` .

`Let`, a diferencia de `var`, tiene **ámbito de bloque**, es decir, si se declarar una variable con `let`dentro de un bloque, esta sólo estará disponible dentro de él. Con `let` **no es posible declarar la misma variable mas de una vez**, lo que esto previene  errores.

```javascript
let x = 20;
let x = 58;

console.log(x) //SyntaxError: Identifier 'x' has already been declared
```

```javascript
function greeting() {
  let txt= "Goodmorning!" //declaración de la variable
  if (true) {
    let txt = "Goodnight!"; //esta variable solo existe dentro del if, fuera del él no se puede usar
  }
  console.log(txt); // Goodmorning
}
greeting();
```

### CONST

Esta palabra clave se utiliza **para declarar** [**constantes**](#user-content-fn-1)[^1]**. Ú**til cuando trabajamos con valores que no tienen que cambiar. Es **posible modificar las propiedades** de un objeto u array aun habiéndolas declarado con `const` pero no se puede reasignar la variable.

```javascript
const x = 20;
const x = 58;

console.log(x) //SyntaxError: Identifier 'x' has already been declared
```

```javascript
const greeting = {
  fName: "Janire",
  lName: "Martinez",
  age:28
}

greeting.fName = "Jani" //modificamos el valor de fName

console.log(greeting.fName) //Jani
console.log(greeting.lName) //Martinez
console.log(greeting.age) //28
```

### DIFERENCIAS

| CARACTERISTICAS | VAR                                                                               | LET                                                                 | CONST                                                |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- |
| Reasignacion    | Se puede reasignar                                                                | Se puede reasignar                                                  | Una vez asignado, no se puede reasignar              |
| Redeclaracion   | Se puede redeclarar                                                               | No se puede redeclarar                                              | No se puede redeclarar                               |
| Modificacion    | Se puede modificar                                                                | Se puede modificar                                                  | No se puede modificar                                |
| Hoisting        | Se eleva a la parte superior, pero se inicializa con 'undefined'                  | Se elevan a la parte superior pero no se inicializan                | Se elevan a la parte superior pero no se inicializan |
| Alcance         | Tienen alcance global o alcance de función/local                                  | Tienen alcance de bloque                                            | Tienen alcance de bloque                             |
| Uso             | Se recomienda no usarlo, de usarlo, sólo debería usarse para navegadores antiguos | Se usa en la mayoría de los casos para variables que pueden cambiar | Se usa para valores constantes o inmutables          |



{% embed url="https://medium.com/winkhostinglatam/javascript-cu%C3%A1les-son-las-diferencias-entre-var-let-y-const-711c23408be7" %}

[^1]: Valor que no puede ser reasignado una vez declarado
