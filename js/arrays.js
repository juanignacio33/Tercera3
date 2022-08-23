const IVA = 1.21
const libros = []
const recomendaciones = []

class Recomendacion {
    constructor( nombreLibro, añoLibro) {
        this.nombreLibro = nombreLibro
        this.añoLibro = añoLibro
    }}

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
/*
function gen() {
    recomendaciones.push(new Recomendacion("libro", 000))
    }
    gen ()*/

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

function agregarRecomendacion() {
    let nombreLibro = prompt("Ingresa el nombre del libro:")
    let añoLibro = parseInt(prompt("Ingresa el año del libro:"))
        recomendaciones.push(new Recomendacion(nombreLibro, añoLibro))
        console.table(recomendaciones)
}

function recoLibro() {
    const reco = document.getElementById("reco")
         reco.innerHTML = ""
          recomendaciones.forEach(producto => {
            reco.innerHTML += `<tr>
                                    
                                    <td>${producto.nombreLibro}</td>
                                    <td>${producto.añoLibro}</td>
                                   
                                </tr>`
          })
}
 