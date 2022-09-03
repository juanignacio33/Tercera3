const libros = []
const recomendaciones = []
const Ventas = ['los 11 pasos', 'padre rico', 'y soles lloveran', 'el otro camino', 'la solucion es js']
const IVA = 1.21
const rees = []

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

class Ree {
    constructor(id, descrip, impor) {
        this.id = id
        this.descrip = descrip
        this.impor = impor
    }
}

const codige = document.querySelector("#codige")
const descripcion = document.querySelector("#descripcion")
const importa = document.querySelector("#importe")

const btnNuevo = document.querySelector("#btnNuevo")
const btnGuardar = document.querySelector("#btnGuardar")

btnNuevo.addEventListener("click", nuevoProducto)
btnGuardar.addEventListener("click", guardarProducto)

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

function almacenamiento() {
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

const good = () => {
    Swal.fire({
        title: 'Perfecto!',
        text: 'si tenemos Stock',
        icon: 'success',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Acpetar",
        confirmButtonText: "Cancelar",
    })
}
const no = () => {
    Swal.fire({
        title: 'Error!',
        text: 'no tenemos ese libro',
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}

function existeLibro() {
    let codigo = prompt("Ingresa el código de producto:")
    const resultado = libros.some(Plantilla => Plantilla.id === parseInt(codigo))
    console.log("Existe?", resultado)
    if (resultado == true) {
        good()
    }
    else {
        no()
    }
}


function cargoArrayVenta() {
    Ventas.sort().reverse()
    Ventas.forEach(pais => {
        selectLibro.innerHTML += `<option value="">${pais}</option>`
    })
}

function agregarRecomendacion() {
    guardarProducto()
    nuevoProducto()
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
                           <td>${producto.descripcion}</td>
                           <td>${producto.importa}</td>
                       </tr>`
    })
}

function guardarDatos() {
    localStorage.setItem("#descripcion", descripcion.value)
    localStorage.setItem("#importe", importa.value)
}

function guardarProducto() {
    if (codige.value != "" && descripcion.value != "" && importa.value > 0) {
        const prod = {
            id: codige.value,
            descripcion: descripcion.value,
            importa: importa.value
        }
        rees.push(prod)
        localStorage.setItem("ree", JSON.stringify(rees))
        cargarProductas()
    }
}

function nuevoProducto() {
    codige.value = creoID()
    descripcion.value = ""
    importa.value = ""
    descripcion.focus()
}

function recuperoDeLS() {
    if (localStorage.rees) {
        const prodGuardados = JSON.parse(localStorage.getItem("productos"))
        prodGuardados.forEach(prod => {
            rees.push(prod)
        });
        console.table(prodGuardados)
    }
}

function cargarProductas() {
    const cuerpo = document.querySelector("#cuerpo")
    cuerpo.innerHTML = ""
    rees.forEach(Ree => {
        cuerpo.innerHTML += `<tr>
                                <td>${Ree.id}</td>
                                <td>${Ree.descripcion}</td>
                                <td>${Ree.importa}</td>
                                <td><img src="images/cart-24.png" alt="Carrito" title="Agregar al carrito"></td>
                            </tr>`
    })
}