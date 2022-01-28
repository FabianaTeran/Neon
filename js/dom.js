    class TodosLosProductos {
        constructor(nombre, precio, marca, categoria, imagen) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.marca = marca.toUpperCase();
        this.categoria = categoria;
        this.imagen = imagen;
        }
    }
    
    const producto = [];

producto.push(new TodosLosProductos("Pegasus Trail 3", "23.999", "Nike", "women","../imagenes/1.jpeg"));
producto.push(new TodosLosProductos("Air Max Excee S50", "18.499", "nike", "Men","../imagenes/2.jpeg"));
producto.push( new TodosLosProductos("Revolution 6 Nextz", "12.499", "nike", "women","../imagenes/3.jpeg"));
producto.push(new TodosLosProductos("Downshifter 11", "13.499", "nike", "men","../imagenes/4.jpeg"));
producto.push(new TodosLosProductos(" Quest 4", "15.499", "nike", "men","../imagenes/6.jpeg"));


    const contenedor = document.getElementById("cardProductos");
    producto.forEach((productos) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div>
        <img  class="card__img" src="${productos.imagen}">
        <div class="card__content">
            <h5 class="card__title">${productos.nombre}</h5>
            <p class="card__text">${productos.precio}</p>
            <a href="#cart" class="btn" id= "comprar" >  Comprar </a>
        </div>

    `;
    contenedor.appendChild(card);
    });

    const carrito = document.getElementById("comprar");
carrito.addEventListener("click", llenarCarrito);

function llenarCarrito() {
    console.log("Agregaste un producto a tu carrito");
}