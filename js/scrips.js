
// const menorCosto = producto.filter((producto) => producto.precio <= 1500);
// console.log(menorCosto);

// const mayorCosto = producto.filter((producto) => producto.precio > 1500);
// console.log(mayorCosto);

// const marcaKwiss = producto.find(producto => producto.marca == "K-SWISS");
// console.log(marcaKwiss);

// const marcaAdidas = producto.find(producto => producto.marca == "ADIDAS");
// console.log(marcaAdidas);




// //  despues tendrá la opcion de hacer pagos por cuotas. 
// // tambien tendrá la opcion  de escribir el nombre de los productos y seleccionarlo.


// let precio = parseInt(prompt("Precio total: "))
// let cantidadCuotas = parseInt(prompt("Cuantas cuotas: "));
// function cuotas(precio, cantidadCuotas){
//     if(cantidadCuotas == 2){
//         alert("El monto total de su compra es: " + precio / cantidadCuotas);
//     }
//     else if(cantidadCuotas == 6){
//         alert("El monto total de su compra es: " + (precio / cantidadCuotas) + ((precio * 2 ) / 100 ));
//     }
//     else if(cantidadCuotas == 10){
//         alert("El monto total de su compra es: " + (precio / cantidadCuotas) + ((precio * 5 ) / 100 ));
//     }
//     else{
//         alert("El monto total de su compra es: " + (precio / cantidadCuotas) + ((precio * 7 ) / 100 ));
//     }
//     }
//     cuotas(precio , cantidadCuotas);


//  //una vez que el cliente eligio la forma de pago, se piden los datos(que en este paso ya los tengo tipeados para usar el constructor de Cliente) para poder enviarle las indicaciones y estado  de su pedido por mail o llamada   
//     class Cliente {
//         constructor(entrada) {
//         this.nombre = entrada.nombre;
//         this.apellido = entrada.apellido;
//         this.email = entrada.email;
//         this.telefono = entrada.telefono;
//         this.productosComprados = entrada.productosComprados;
//         }
//         hablar() {
//         console.log(
//             "Gracias por elegirnos, Corroborá las instrucciones en el correo: " +
//             this.email
//         );
//         }
//     }
    
//     const cliente1 = new Cliente({
//         nombre: "Fabiana",
//         apellido: "Vayne",
//         email: "fabyvayne@gmail.com",
//         telefono: "1170344202",
//         productosComprados: 3
//     });
    
//     const { nombre, apellido, email, telefono, productosComprados } = cliente1;
    
//     console.log(nombre, apellido, email, telefono, productosComprados);
//     cliente1.hablar();
    



