/* Hacer una función que reciba como parámetros una pila, y un número. La función debe 
retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]. */

class Pila {
    constructor() {
        this.datos = [];
    }

    agregar(nuevoValor) {
        this.datos.push(nuevoValor);
    }
}

let pilaUno = new Pila();

pilaUno.agregar("Manzana");
pilaUno.agregar("Cebolla");
pilaUno.agregar("Apio");
pilaUno.agregar("Naranja");
pilaUno.agregar("Papaya");
pilaUno.agregar("Sandía");
pilaUno.agregar("Melón");

let cantidad = 3;


function ejercicioUno(pilaUno, cantidad) {
    let salida = [];
    console.log(`El arreglo inicial ${pilaUno.datos}`)
    console.log(`Regresa ${cantidad} elementos`)
    for (let index = 0; index < cantidad; index++) {
        salida.push(pilaUno.datos[index]);

    }
return salida;
}

console.log(ejercicioUno(pilaUno,cantidad));