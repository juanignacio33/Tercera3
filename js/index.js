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

const ooobtenerProductos = () => {
    console.log("Obteniendo productos...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(libros)
        }, 4500);
    })
}

let troductos = []
ooobtenerProductos()
    .then((resultado) => {
        return troductos = resultado
    })
    .then((troductos) => {
        cargarProductos(troductos)
        console.log("Productos cargados exitosamente.")
    })
    .catch((error) => {
        console.error("Se ha producido un error inesperado...", error)
    })

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
        text: 'si tenemos El Libro!',
        icon: 'success',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Acpetar",
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

function cargoArrayVenta() {
    Ventas.sort().reverse()
    Ventas.forEach(pais => {
        selectLibro.innerHTML += `<option value="">${pais}</option>`
    })
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
                                
                            </tr>`
    })
}

const seccion = document.querySelector("section#contenido")
const loader = document.querySelector("section.loader")
const URL = "https://demo9739051.mockable.io/users"
let historia = []

const peticionFetch = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    return data

}

const retornoCardContenido = (content) => {
    const { id, poster, precio, titulo } = content
    return `<div class="card" style="width: 18rem;">
                 <img class="posters" id="${id}" src="${poster}" alt="${precio}" title="${titulo}" loading="lazy" onclick="guardarContenidoEnLS('${id}')">
               <div class="card-body">
                 <h5 class="card-title">${titulo}</h5>
                 <p class="card-text">${precio}</p>
                 <button type="button"  class="btn btn-success" class= "btnCarrit"  onclick="agregarfuncionalida()">Tomar!<img src="images/cart-24.png" alt="Carrito" title="Agregar al carrito"></button>
                 <button type="button"  class="btn btn-success" class= "btnCarrito" id="btn-agregar${id}">+1</button>
               </div>
            </div>  
         
      
  `
}

const retornoCardError = () => {
    return `<div class="error-contenido">
                <div class="emoji-cine">🎬</div>
                <p>Parece que hubo un error :(</p>
                <p>Intenta nuevamente en unos segundos...</p>
            </div>`
}

const cargarContenido = () => {
    let contenidoHTML = ""
    fetch(URL)
        .then(response => response.json())
        .then(data => historia = data)
        .then(data => data.forEach(content => contenidoHTML += retornoCardContenido(content)))
        .then(() => seccion.innerHTML = contenidoHTML)
        .catch(error => seccion.innerHTML = retornoCardError())
        .finally(() => loader.innerHTML = "")
    if (contenidoHTML = true) {
        good()
    }
    else {
        no()
    }
}

const containerDiv = document.querySelector(".container")
const carritoDiv = document.querySelector(".carrito")

let carrito = JSON.parse(localStorage.getItem("carrito")) || []

function agregarfuncionalida() {
    historia.forEach(prod => {
        document
            .querySelector(`#btn-agregar${prod.id}`)
            .addEventListener("click", () => {

                agregarAlCarrito(prod);
            });
    });
}

function agregarAlCarrito(prod) {
    let existe = carrito.some((historiaSome) => historiaSome.id === prod.id);
    if (existe === false) {
        prod.cantidad = 1;
        carrito.push(prod);
    } else {
        let prodFind = carrito.find((historiaFind) => historiaFind.id === prod.id);
        prodFind.cantidad++;
    }
    console.log(carrito)
    renderizarCarrito()

}

function renderizarCarrito() {
    carritoDiv.innerHTML = "";
    carrito.forEach((prod) => {
        carritoDiv.innerHTML += `<div>
                                 <h4>${prod.titulo}</h4>
                                 <p>CANTIDAD: ${prod.cantidad}</p>
                                 <button class= "btnCarrito" id="btn-borrar${prod.id}">borrar</button>
                                 </div>
                              `;

    })
    localStorage.setItem("carrito", JSON.stringify(carrito))
    borrarProducto()
}

function borrarProducto() {
    carrito.forEach((prod) => {
        document
            .querySelector(`#btn-borrar${prod.id}`)
            .addEventListener("click", () => {
                carrito = carrito.filter(
                    (historiaFilter) => historiaFilter.id !== prod.id
                );
                renderizarCarrito();
            });
    });
}

crearCards();
renderizarCarrito()