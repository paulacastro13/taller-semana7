const contenedor = document.getElementById('contenedor');
const boton = document.getElementById('boton')

contenedor.addEventListener('click', function() {
  alert('¡Hola! Soy el div.');
});

boton.addEventListener('click', function(event){
    event.stopPropagation(); 
}); 