const IVA = 1.21
const libros = []

class Plantilla {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
    precioFinal() {
        return parseFloat((this.importe * IVA).toFixed(2))
    }
}
function creoID() { return parseInt(Math.random() * 10000) }


function generadorAutomatico() {
    libros.push(new Plantilla(1234, "los 11 pasos", 29950))
    libros.push(new Plantilla(2345, "padre rico", 249900))
    libros.push(new Plantilla(3456, "y soles lloveran", 199949))
    libros.push(new Plantilla(4567, "el otro camino", 219890))
    libros.push(new Plantilla(5678, "lluvia seca", 409090))
    libros.push(new Plantilla(6789, "la solucion es js", 459000))
    console.table(libros)
}
generadorAutomatico()

function cargarProductos() {
    
    const tabla = document.getElementById("tabla")
         tabla.innerHTML = ""
          libros.forEach(producto => {
            tabla.innerHTML += `<tr>
                                    <td>${producto.id}</td>
                                    <td>${producto.nombre}</td>
                                    <td>${producto.importe}</td>
                                    <td>${producto.precioFinal()}</td>
                                </tr>`
          })
}

function agregarProductos() {
    let id = creoID()
    let descripcion = prompt("Ingresa el nombre del libro:")
    let importe = parseInt(prompt("Ingresa el precio:"))
        libros.push(new Plantilla(id, descripcion, importe))
        console.table(libros)
}