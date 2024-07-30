/* 4.- Un almacén tiene capacidad para apilar “n” contenedores. 
Cada contenedor tiene un número de identificación. 
Cuando se desea retirar un contenedor específico, 
deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, 
efectuar el retiro y regresarlos a su respectivo lugar.
 */

class Pila {
    constructor(capacidad) {
        this.pilaUno = [];
        this.pilaReserva = [];
        this.capacidad = capacidad;
    }

    agregar(contenedor) {

        for (let index = 0; index < contenedor.length; index++) {
            this.pilaUno.push(contenedor[index])

        }
        return this.pilaUno;

    }



    buscar(busqueda) {
        var retiro = null;
        for (let index = this.pilaUno.length - 1; index >= 0; index--) {
            if (busqueda === this.pilaUno[index]) {
                retiro = this.pilaUno[index];
                this.pilaUno.splice(index, 1);
            
                break;
            }
            else {
                this.pilaReserva.push(contenedor[index]);
                this.pilaUno.pop();

            }
        }
        console.log("-------------INICIAR BUSQUEDA--------------")
        console.log(`Contenedor: ${this.pilaUno}`);
        console.log(`Retirado: ${retiro}`);
        console.log(`Reserva: ${this.pilaReserva}`);

        
        
    }

    regresar(){
        for (let index = this.pilaReserva.length - 1; index >= 0; index--) {
            this.pilaUno.push(this.pilaReserva[index]);
            this.pilaReserva.pop();
        }
        console.log("----------Regresar-------------")
        console.log(`Contenedor: ${this.pilaUno}`);
        if (this.pilaReserva[0] == null) {
            console.log(`Reserva: Vacio`);
        }else{
            console.log(`Reserva: ${this.pilaReserva}`);
        }
        
    }

}

var capacidad = 10;
var busqueda = "id5";

let pila4 = new Pila(capacidad);

var contenedor = ["id1", "id2", "id3", "id4", "id5", "id6", "id7", "id8", "id9", "id10"]

pila4.agregar(contenedor);

console.log("Contenedor inicial: " + pila4.pilaUno + " ID a buscar: " + busqueda);
console.log(pila4.buscar(busqueda))
console.log(pila4.regresar())



/* 
NOTA: Profe no pude quitar el undefined para ambos metodos

Contenedor inicial: id1,id2,id3,id4,id5,id6,id7,id8,id9,id10 ID a buscar: id5
script.js:42 -------------INICIAR BUSQUEDA--------------
script.js:43 Contenedor: id1,id2,id3,id4
script.js:44 Retirado: id5
script.js:45 Reserva: id10,id9,id8,id7,id6
script.js:78 undefined
script.js:56 ----------Regresar-------------
script.js:57 Contenedor: id1,id2,id3,id4,id6,id7,id8,id9,id10
script.js:61 Reserva: 
script.js:79 undefined
 */