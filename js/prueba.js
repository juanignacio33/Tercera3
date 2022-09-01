//const  Ventas=  ['los 11 pasos', 'padre rico', 'y soles lloveran', 'el otro camino', 'la solucion es js']



/*
function cargoArrayVenta() {
    Ventas.sort().reverse()
    Ventas.forEach(pais => {
        selectLibro.innerHTML += `<option value="">${pais}</option>`
        
    })
}
    




/*class Producto {
    constructor(id, nombre, importe) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
    }
}*/
/*
const productos = [] 
const carrito = [] 

const codigo = document.querySelector("#codigo")
const descripcion = document.querySelector("#descripcion")
const importe = document.querySelector("#importe")

const btnNuevo = document.querySelector("#btnNuevo")
const btnGuardar = document.querySelector("#btnGuardar")

function guardarProducto() {
    if (codigo.value != "" && descripcion.value != "" && importe.value > 0 ) {
        const prod = { 
         id: codigo.value,
         descripcion: descripcion.value, 
         importe: importe.value 
        }
        debugger
       // producto.push(new Producto(codigo.value, descripcion.value, importe.value))
        productos.push(prod) 
        localStorage.setItem("productos", JSON.stringify(productos))
        cargarProductos()
    }
    }

    function nuevoProducto() {
        codigo.value = creoID()
        descripcion.value = ""
        importe.value = ""
        descripcion.focus()
    }

    function recuperoDeLS() {
        if(localStorage.productos) {
            const prodGuardados = JSON.parse(localStorage.getItem("productos"))
            prodGuardados.forEach(prod => {
                productos.push(prod)
            });
            console.table(prodGuardados)
        } 
    }
    function cargarProductos() {
        const cuerpo = document.querySelector("#cuerpo")
            cuerpo.innerHTML += `<tr>
                                    <td>${id}</td>
                                    <td>${descripcion}</td>
                                    <td>${importe}</td>
                                    <td><img src="images/cart-24.png" alt="Carrito" title="Agregar al carrito"></td>
                                </tr>`
     }*/