
document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector(".formulario");

formulario.onsubmit = function(event) {

  event.preventDefault();
  
  const n = formulario.elements[0]; // input nombre
  const e = formulario.elements[1]; // input edad
  const na = formulario.elements[2]; // select nacionalidad
  

  const nombre = n.value.trim();
  const edad = parseInt(e.value);
  const i = na.selectedIndex;
  let nacionalidad = na.options[i].value;
  
  console.log(nombre, edad);
  console.log(nacionalidad);

//validaciones
  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }
 // Si todo está bien
if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
};

//const botonBorrar = document.createElement("button");
//botonBorrar.textContent = "Eliminar invitado";
//botonBorrar.id = "boton-borrar";
//const corteLinea = document.createElement("br");
//document.body.appendChild(corteLinea);
//document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

const lista = document.getElementById("lista-de-invitados");
// Contenedor para cada invitado
var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista");
lista.appendChild(elementoLista);

//var idNombre = document.createElement("span");
//var inputNombre = document.createElement("input");
//var espacio = document.createElement("br");
//spanNombre.textContent = "Nombre: ";
//inputNombre.value = nombre;
//elementoLista.appendChild(span);
//elementoLista.appendChild(input);
//elementoLista.appendChild(br);

// Función para crear cada campo (Nombre, Edad, Nacionalidad)
function crearElemento(descripcion, valor) {
const idNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");

idNombre.textContent = descripcion + ": "
inputNombre.value = valor ;

elementoLista.appendChild(idNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}
// Ejemplo de uso (estas variables deben venir de tu formulario)
crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

// Botón eliminar
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.onclick = () => elementoLista.remove();

var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);
  
  }
});
// botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
//botonBorrar.parentNode.remove();
//elementoLista.remove();
  //}
 