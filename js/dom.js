    class TodosLosProductos {
        constructor( id,nombre, precio, marca,imagen) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.marca = marca.toUpperCase();
        this.imagen = imagen;
        }
    }
    
    const producto = [];

producto.push(new TodosLosProductos("1","Pegasus Trail 3", "23.999", "Nike","../imagenes/1.jpeg"));
producto.push(new TodosLosProductos("2","Air Max Excee S50", "18.499", "nike","../imagenes/2.jpeg"));
producto.push( new TodosLosProductos("3","Revolution 6 Nextz", "12.499", "nike","../imagenes/3.jpeg"));
producto.push(new TodosLosProductos("4","Downshifter 11", "13.499", "nike","../imagenes/4.jpeg"));
producto.push(new TodosLosProductos("5"," Quest 4", "15.499", "nike","../imagenes/6.jpeg"));


    const contenedor = document.getElementById("cardProductos");
    contenedor.innerHTML="";
    producto.forEach((productos,indice) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let html = `<div>
        <img  class="card__img" src="${productos.imagen}">
        <div class="card__content">
            <h5 class="card__title">${productos.nombre}</h5>
            <p class="card__text">${productos.precio}</p>
            <a href="#carrito" class="btn" onClick="agregarAlCarrito(${indice})">Comprar</a>
    `;
    card.innerHTML = html;
    contenedor.appendChild(card);
    });

    let modalCarrito = document.getElementById("carrito");

    const dibujarCarrito = () => {
        let total = 0;
        modalCarrito.className = "carrito";
        modalCarrito.innerHTML = "";
        if (carrito.length > 0) {
            carrito.forEach((productos, indice) => {
            total = total + productos.precio * productos.cantidad;
            const carritoContainer = document.createElement("div");
            carritoContainer.className = "producto-carrito";
            carritoContainer.innerHTML = `
                <img class="car-img" src="${productos.imagen}"/>
                <div>
                ${productos.nombre}
                </div>
                <div> Cantidad: ${productos.cantidad}</div>
                <div> Precio: $ ${productos.precio}</div>
                <div> Subtotal: $ ${
                productos.precio * productos.cantidad
                }</div>
                <button class="btn btn-danger"  id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>
                `;
            modalCarrito.appendChild(carritoContainer);
            });
            const totalContainer = document.createElement("div");
            totalContainer.className = "total-carrito";
            totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>
            <button class= "btn btn-danger finalizar" id="finalizar" onClick="finalizarCompra()"> FINALIZAR COMPRA </button>`;
            modalCarrito.appendChild(totalContainer);
        } else {
            modalCarrito.classList.remove("carrito");
        }
        };
        
    let carrito = [];
    if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    dibujarCarrito();
    }
    
    const agregarAlCarrito = (indiceDelArrayProducto) => {
    const indiceEncontradoCarrito = carrito.findIndex((elemento) => {
        return elemento.id === producto[indiceDelArrayProducto].id;
    });
    if (indiceEncontradoCarrito === -1) {
        const productoAgregar = producto[indiceDelArrayProducto];
        productoAgregar.cantidad = 1;
        carrito.push(productoAgregar);
        actualizarStorage(carrito);
        dibujarCarrito();
    } else {
        carrito[indiceEncontradoCarrito].cantidad += 1;
        actualizarStorage(carrito);
        dibujarCarrito();
    }
    };
    
    const removeProduct = (indice) => {
    carrito.splice(indice, 1);
    actualizarStorage(carrito);
    dibujarCarrito();
    };
    const finalizarCompra = () => {
    const total = document.getElementsByClassName("total")[0].innerHTML;
    modalCarrito.innerHTML = "";
    const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo">Total: ${total} </p></div>
    <div class="datos-cliente">
    <p class="datos-parrafo"> Complete el formulario con sus datos.</p>
    <button class= "btn btn-danger formulario" id="formulario" onClick="dibujarFormu()"> FORMULARIO </button>
    </div>`;
    modalCarrito.innerHTML = compraFinalizada;
    };
    const dibujarFormu = () => {
    modalCarrito.innerHTML = "";
    const formulario = `
    <h2> DATOS PARA EL ENVÍO </h2>
        <div">
        <div>
        <div>
            <label>Nombre</label>
            <input type="text" id="nombre" placeholder="Nombre"  />
        </div>
        <div>
            <label>E-mail</label>
            <input type="text" id="mail" placeholder="E-mail" />
        </div>
        <div>
            <label>Telefono</label>
            <input type="text" id="telefono" placeholder="Telefono"  />
        </div>
        <div>
            <label>Domicilio</label>
            <input type="text" id="domicilio" placeholder="Domicilio" />
        </div>
        <div class="contact-button">
            <button type="button" class="btn btn-danger envio" onClick="mostrarMensaje()" >Confirmar</button>
        </div>
        </div>
    </div>`;
    modalCarrito.innerHTML = formulario;
    };
    
    const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombre").value;
    const domicilioCliente = document.getElementById("domicilio").value;
    modalCarrito.innerHTML = "";
    let mensaje = `<div class="mensaje-final">Gracias ${nombreCliente} por su compra! en 72 horas recibira su paquete en ${domicilioCliente} </div>`;
    modalCarrito.innerHTML = mensaje;
    };
    
    const actualizarStorage = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    };
    