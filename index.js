console.log("json")


const gato = {
    color: "blanco",
    manchas: "negras",
    patas: 4,
    pelo: "largo",
    habitat: "sillón",
}

console.log(gato)


// pasos para guardar un objeto en el local storage con JSON 
   // JSON siempre va en mayus


   //objeto persona
   const persona = {
    nombre: "andy",
    apellido: "dolorof",
    gustos: "carola",
    }
    
    
    //conversión de objeto persona a JSON
    
    const personaJSON = JSON.stringify(persona) // .stringify convierte a JSON , lo guardamos en una variable
    console.log(personaJSON)
    
    localStorage.setItem('persona', personaJSON) // .setItem guarda el JSON en el localStorage
    
    // para obtener un JSON del local storage 
    
    const infoPersona = localStorage.getItem('persona')  // tomamos el JSON del local storage con .getItem
    console.log(infoPersona)
    
    const infoPersonaJs = JSON.parse(infoPersona) // convertimos el JSON en JavaScript con .parse
    console.log(infoPersonaJs)
     


//  EJERCICIO 1

//Objetos 
// Crea tres objetos usuario1, usuario2, usuario3 que tengan las propiedades nombreUsuario y contrasenia como strings.

const usuario1 = {
    nombreUsuario: "Naty Sacías",
    contrasenia: "naty123"
}

const usuario2 = {
    nombreUsuario: "Eliana Kern",
    contrasenia: "eli1234"
}

const usuario3 = {
    nombreUsuario: "Mika Ayala",
    contrasenia: "uwu987"
}

// Definí una función saludar que reciba como parámetro un objeto y que modifique el HTML de tu página para que aparezca un h1 que diga "Hola, {nombreUsuario}".

const h1Html = document.querySelector("h1") 
console.log(h1Html)

const saludar = objeto => h1Html.innerHTML += `<p>Hola, ${objeto.nombreUsuario}</p>`

// Probá tu función con los tres objetos definidos antes.

console.log(saludar(usuario1))
console.log(saludar(usuario2))
console.log(saludar(usuario3))

// Definí una función modificarNombreDeUsuario que reciba dos parametros: un objeto usuario y un string nuevoNombre. La función debe retornar el objeto con la propiedad nombreUsuario modificada para tener el valor de nuevoNombre.

const modificarNombreDeUsuario = (usuario, nuevoNombre) => usuario.nombreUsuario = nuevoNombre  


// Probá tu función con los tres objetos definidos antes.

console.log(modificarNombreDeUsuario(usuario1, "Carolina Elizabeth"))
console.log(modificarNombreDeUsuario(usuario2, "Florencia Larreategui"))
console.log(modificarNombreDeUsuario(usuario3, "Ro Ibañez"))

// Definí una función modificarContrasenia que reciba dos parametros: un objeto usuario y un string nuevaContrasenia. La función debe retornar el objeto con la propiedad contrasenia modificada para tener el valor de nuevaContrasenia.

const modificarContrasenia =  (usuario, nuevaContrasenia) => usuario.contrasenia = nuevaContrasenia 

// Probá tu función con los tres objetos definidos antes.

console.log(modificarContrasenia(usuario1, "contraseña123"))
console.log(modificarContrasenia(usuario2, "contraseña987"))
console.log(modificarContrasenia(usuario3, "abc123"))

// Crea la función convertirAJSON. La función debe recibir un objeto usuario como parámetro y retornar el objeto convertido a JSON.

const convertirAJSON = (usuario) =>{

    const personaConvertidoAJSON = JSON.stringify(usuario)
    return personaConvertidoAJSON

}

console.log(convertirAJSON(usuario1))
console.log(convertirAJSON(usuario2))
console.log(convertirAJSON(usuario3))

// Crea la función convertirDesdeJSON. La función debe recibir una cadena JSON objetoJSON y retornar la cadena convertida a un objeto de Javascript.

const convertirDesdeJSON = (objetoJSON) => {   
    
    const objertoConvertido = JSON.parse(objetoJSON)
    return objertoConvertido

}

// Probá tus funciones con los tres objetos definidos antes.

console.log(convertirDesdeJSON(convertirAJSON(usuario1)))
console.log(convertirDesdeJSON(convertirAJSON(usuario2)))
console.log(convertirDesdeJSON(convertirAJSON(usuario3)))

// Definí la función guardarEnLocalStorage que reciba como parámetro un objeto de Javascript y un string, y guarde en localStorage la cadena con el string como nombre de la clave (Recordá que antes de guardar un objeto en localStorage hay que convertirlo a JSON: usá la función convertirAJSON que declaraste antes)

const guardarEnLocalStorage = (objeto, clave) =>{
  
  const convertirNuevamenteAJSON = convertirAJSON(objeto) 
    
  localStorage.setItem(clave, convertirNuevamenteAJSON)

}

guardarEnLocalStorage(usuario1, "usuario1")
guardarEnLocalStorage(usuario2, "usuario2")
guardarEnLocalStorage(usuario3, "usuario3")

// Definí la función leerDesdeLocalStorage que reciba como parámetro un string clave y retorne un objeto de Javascript con los datos guardados bajo esa clave en localStorage. (Utilizá la función convertirDesdeJSON!)

const leerDesdeLocalStorage = (clave) => {

    const JSONAObjeto = localStorage.getItem(clave)
    const nuevoObjeto = JSON.parse(JSONAObjeto)

    return nuevoObjeto

}

console.log(leerDesdeLocalStorage("usuario1"))
console.log(leerDesdeLocalStorage("usuario2"))
console.log(leerDesdeLocalStorage("usuario3"))


// EJERCICIO 2

// Ejercitación integradora
// Tratá de usar las funciones declaradas en los ejercicios anteriores.

// Crea una pagina que tenga un titulo que diga "Hola!" y un botón que diga "Iniciar sesión"

const boton =  document.getElementById("boton")
const inicioSesion = document.getElementById("inicio-de-sesion")
console.log(boton)

// Al hacer click en el botón Iniciar Sesión, debe hacerse visible un formulario con un campo usuario y otro contraseña, y un botón para enviar el form.

boton.onclick = () =>{

    inicioSesion.classList.remove("is-hidden")

}
// Definí un objeto usuario en javascript en donde estén definidas dos propiedades: nombreUsuario y contrasenia (o usá los objetos definidos antes).

const usuario = {
    nombreUsuario: "mikisiwi@gmail.com ",
    contrasenia: "gatitos3",
}

console.log(usuario);

// Si los datos ingresados por el usuario en el form coinciden con los guardados en el objeto, la web debe:

const validacion = (nombreUsuario, contrasenia) =>{
    if(nombreUsuario == usuario.nombreUsuario && contrasenia == usuario.contrasenia ){
        console.log("Son iguales!");
    }
    else{ console.log("No son Iguales");}
}

console.log()
// Mostrar como saludo "Hola {nombreUsuario}"
// Ocultar el botón "iniciar sesión"
// Mostrar dos botones nuevos: Cambiar mis datos, Cerrar sesión.
// Pista: Definí una variable global para guardar si el usuario inició sesión o no, y determinar a partir de ella qué elementos se deben mostrar en la página.
// Si el usuario hace click en "cerrar sesión", el titulo debe volver a decir "Hola!" y el botón "Iniciar sesión" debe volver a ser visible.
// Si el usuario hace click en "Cambiar mis datos", se abre un formulario con un campo usuario y otro contraseña, y un botón para enviar el form. Al enviarse, se deben modificar las propiedades nombreUsuario y contrasenia del objeto usuario.
// Una vez completados todos los puntos anteriores, queremos que la sesión del usuario persista aunque cierre la página.

// Al iniciar sesión, se deben guardar en localStorage el nombre del usuario y la propiedad: sesionIniciada: true.
// Al saludar al usuario, el título debe consumir la propiedad guardada en localStorage.
// Al cerrar sesión, la propiedad sesionIniciada debe pasar a ser false.
// Para determinar si la sesión está iniciada o no, usar la propiedad sesionIniciada desde localStorage.
// Si el usuario cambia su nombre o contraseña desde el formulario, los datos en localStorage deben actualizarse también.

