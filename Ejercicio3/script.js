/* 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. 
Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. 
Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen */

class Pila {
    constructor() {
        this.viaje = [];
        this.ida = [];
        this.vuelta = [];
    }

    agregarIda(recorrido) {
        this.ida = [...recorrido];
        return this.ida;
    }

    agregarVuelta(regreso) {
        this.vuelta = [...regreso];
        return this.vuelta;
    }

    verViaje() {
        this.viaje = [...this.ida, ...this.vuelta];
        return this.viaje;
    }
}

var recorrido = ["origen", "puebloUno", "puebloDos", "destino"];
var regreso = ["destino", "puebloDos", "puebloUno", "origen"];

let pila3 = new Pila();

pila3.agregarIda(recorrido);
pila3.agregarVuelta(regreso);

console.log(`Ida: ${pila3.agregarIda(recorrido)}`);
console.log(`Vuelta: ${pila3.agregarVuelta(regreso)}`);