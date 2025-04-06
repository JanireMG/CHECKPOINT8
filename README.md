---
cover: https://i.ytimg.com/vi/Kn06785pkJg/maxresdefault.jpg
coverY: 0
---

# ¿Qué tipo de bucles hay en JS?

`JavaScript` tiene **5 tipos** de bucles:

### FOR

Recorre un bloque de código varias veces.

#### Sintaxis

```javascript
for (expresiónInicial; expresiónCondicional; expresiónDeActualización) {
instruction
}
```

`Expresión inicial` : se usa para **inicialiar** uno o mas contadores de bucle, también se puede usar para inicializar una variable de control.\
`Expresión condicional`: si la expresión condicional es **verdadera**, **se ejecutan las instrucciones**, si es **falsa**, el bucle `for` **termina**.\
`Expresión de actualización`: se ejecuta después de cada iteración del bucle. Principalemnte se usa **para modificar la variable de control**.\
`Instrucción`: lo que se ejecuta cuando el bucle pasa por una nueva iteración.

#### Ejemplo

```javascript
for (let i = 0; i < 8; i++){
    console.log(i);
}
```

### FOR/IN

Itera una variable especificada sobre todas las propiedades enumerables de un objeto.

#### Sintaxis

```javascript
for (variable in object){
  instruction
}
```

#### Ejemplo

```javascript
const myName ={name:"Janire", lName:"Martinez", secondLName: "Gonzalez"};

  let fullName = "";
  for (let x in myName){
  fullName += myName[x]+ " ";
}
console.log(fullName) //? Janire Martinez Gonzalez
```

### FOR/OF

Itera sobre los valores de un objeto iterable, como por ejemplo `arrays`, `set`, `maps`, `strings`... No puede iterar directamente sobre el objeto.

#### Sintaxis

```javascript
for (item of iterable){
  expression
}
```

#### Ejemplo

```javascript
const fruits = ["apple", "pear", "orange", "strawberry", "banana"]
  for (let fruit of fruits){
    console.log(fruit) //? imprime cada fruta
  }
```

### WHILE

Se ejecuta siempre que una condición especificada sea verdadera. **Si la condición es falsa, este no se ejecuta**.

#### Sintaxis

```javascript
while (condition) {
  expression
}
```

#### Ejemplo

```javascript
let x = 0
while (x <= 5){ 
  console.log(x); //imprime el valor actual de la 'x'
  x++; //x se incrementa en 1, pararña en el momento en el que llegue a 5
}
```

### DO/WHILE

Se **ejecuta al menos 1 vez** aunque la condición sea falsa. Si es verdadera, se ejecuta mientras siga siendo verdadera la condición.

#### Sintaxis

```javascript
do{
  expression
}
while (condition)
```

#### Ejemplo

```javascript
let x = 0
do{
  console.log(x);
  x++; //incrementa 'x' en 1
}
while(x<=10) //el bucle acaba cuando 'x' sea igual o menor a 10
```



{% embed url="https://www.w3schools.com/js/js_loop_for.asp" %}
