var botones = ["edit-img-banner", "edit-img-foto", "edit-datos", "edit-esp", "edit-quienSoy", "edit-idioma"];
var usuarios = [{correo: "user", pass: "1234"},{correo: "admin", pass: "admin"}];

function mostrarLogin(){
    document.getElementById("caja-login").style.display = "block";
};

function verificarLogin() {    
    let elemento_mail = document.getElementById("input-login-correo").value;
    let elemento_pass = document.getElementById("input-login-pass").value;
    let n = 0;
    let cantUsers = usuarios.length;
    
    while(n < cantUsers){
        if(elemento_mail == usuarios[n].correo && elemento_pass==usuarios[n].pass){
            edit();
            document.getElementById("caja-login").style.display = "none";
            return true;
        };
        n++;
    };
    
    document.getElementById("caja-login").style.display = "none";
    alert("Por favor utilize un correo y contraseña validos.");
};

function edit() {
    let boton = document.getElementById("edit");
    let n = 0;
    let cant = botones.length;

    if(estado){
        boton.style.backgroundColor = "red";
        boton.innerHTML = "LogOut";
        while (n < cant) {
            visibilidad(botones[n]);
            n++;
        };
    }else{
        boton.style.backgroundColor = "green";
        boton.innerHTML = "Login";
        while (n < cant) {
            visibilidad(botones[n]);
            n++;
        };        
    };
};

//Funcion que oculta o no los iconos de Edicion, segun el estado del Login
function visibilidad(texto) {
    var e = document.getElementById(texto);
    if (e.style.visibility == "visible") {
        e.style.visibility = "hidden";
    }else {
        e.style.visibility = "visible";
    };
};

function editImg(elem) {
    document.getElementById(elem).style.display = "block";
};

//Funcion para editar texto de los parrafos "elTexto" correspondiente a los input "elInput"
function obtenerTexto(elInput, elTexto) {
    document.getElementById(elInput).style.display = "block";
    var texto = document.getElementById(elTexto).innerText;
    console.log(texto); /*Muestra por consola lo que contiene el parrafo al
                         momento de hacer click en boton de editar*/
    // Funcion del ENTER
    var textoArea = document.getElementById(elInput);
    textoArea.addEventListener('keyup', function (e) {
        logMessage("Key \"".concat(e.key, "\" released [event: keyup]"));
        if (e.key == "Enter") {
            document.getElementById(elInput).style.display = "none";
        };
    });
};

//Cambia el contenido del elemento seleccionado
function cambiarTexto(valor, elTexto) {
    document.getElementById(elTexto).innerText = valor;
};

//Para mostrar por consola la entrada de cada letra tipeada
function logMessage(message) {
    console.log(message + "<br>");
};

/*
    Carga el contenido de un archivo de texto
    y lo muestra en el parrafo

function showFile(input){
    let file = input.files[0];
    alert(`File name: ${file.name}`);
    alert(`Last modified: ${file.lastModified}`);

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(){
        console.log(reader.result);
        document.getElementById("parrafo-quienSoy").innerText = reader.result;
    };
    reader.onerror = function(){
        console.log(reader.error);
    };
};
*/
