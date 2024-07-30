/* 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de 
elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, 
de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado 
por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7] */

class Pila {
    constructor() {
        this.datos = [];
    }

    agregar(valor) {
        this.datos.push(valor);
    }

}

let pilaDos = new Pila();

let valores = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
for (let index = 0; index < valores.length; index++) {
    pilaDos.agregar(valores[index]);
}

let nuevo = 7;
let viejo = 2;
console.log(pilaDos);

function reemplazar(pilaDos, nuevo, viejo) {
var i=0;
    for (let index = 0; index < pilaDos.datos.length; index++) {
      
        if (pilaDos.datos[index] == viejo) {
            pilaDos.datos[index] = nuevo;
            i = index;
        }
    }
    pilaDos.datos.splice(i+1);
    return pilaDos.datos;

    
}

console.log(reemplazar(pilaDos, nuevo, viejo));