//Cree un bucle for en JS que imprima cada nombre en esta lista. miLista = “velma”, “exploradora”, “jane”, “john”, “harry”
const miLista = ["velma", "exploradora", "jane", "john", "harry"];

for (let x = 0; x < miLista.length; x++) {
  console.log(miLista[x]);  
}


//Cree un bucle while que recorra la misma lista y también imprima los nombres. Nota: Recuerda crear un contador para que el ciclo no sea infinito.
const miLista2 = ["velma", "exploradora", "jane", "john", "harry"];

let x = 0
while (x < miLista2.length) {
  console.log(miLista2[x]);  
  x++;
}


//Cree una función de flecha que devuelva "Hola mundo".
let myFx = () => "Hola mundo!"
 
console.log(myFx());