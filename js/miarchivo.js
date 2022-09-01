const IVA = 1.21
const libros = []
const recomendaciones = []
const Ventas = ['los 11 pasos', 'padre rico', 'y soles lloveran', 'el otro camino', 'la solucion es js']

class Recomendacion {
constructor(nombreLibro, añoLibro) {
    this.nombreLibro = nombreLibro
    this.añoLibro = añoLibro
    }
}

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
    libros.push(new Plantilla(1234, "los 11 pasos de la magia", 3000))
    libros.push(new Plantilla(2345, "padre rico", 2000))
    libros.push(new Plantilla(3456, "y soles lloveran", 3000))
    libros.push(new Plantilla(4567, "el otro camino", 6000))
    libros.push(new Plantilla(5678, "lluvia seca", 4000))
    libros.push(new Plantilla(6789, "la solucion es js", 5000))
    
    console.table(libros)
}
generadorAutomatico()

function almacenamiento () {
    localStorage.setItem("libros", JSON.stringify(libros))
}
almacenamiento()


function ordenarLibros() {
    console.clear()
    console.table(libros)
libros.sort((a, b) => {
if (a.importe > b.importe) {
    return 1
    }
if (a.importe < b.importe) {
    return -1
    }
    return 0
    })
console.table(libros)
}
ordenarLibros()

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

function existeLibro() {
    let codigo = prompt("Ingresa el código de producto:")
    const resultado = libros.some(Plantilla => Plantilla.id === parseInt(codigo))
    console.log("Existe?", resultado)
if (resultado == true) {
    alert("si lo tenemos en stock!!!")
    }
else {
    //alert("no tenemos ese libroo")
    toastSwal("Completa todos los valores solicitados.", 'warning', "#DB4914")
    }
}
const toastSwal = (mensaje, icono, bgcolor)=> {
    Swal.fire ({
        //title: 'Error!', //success,
        //title: "titulo",
        toast: true,
        position: "top-end", // bottom-end  top start bottom-start  x defecto: center
        text: mensaje ,
        icon: icono,
        showCancelButton: false,
        timer: 3000,
        background: bgcolor,
        color:"white"
      })
}

function cargoArrayVenta() {
    Ventas.sort().reverse()
Ventas.forEach(pais => {
    selectLibro.innerHTML += `<option value="">${pais}</option>`
    })
}

function agregarRecomendacion() {
    let nombreLibro = prompt("Ingresa el nombre del libro:")
    let añoLibro = parseInt(prompt("Ingresa el año del libro:"))
    recomendaciones.push(new Recomendacion(nombreLibro, añoLibro))
    recomendaciones.push(new Recomendacion("BIBLIA", 01))
    recomendaciones.push(new Recomendacion("TORA", -504))
    recomendaciones.push(new Recomendacion("Mahabharata ", -300))
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