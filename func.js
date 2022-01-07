function editar(){
    var boton = document.getElementById("edit");
    
    if(boton.value=="false"){
        boton.style.backgroundColor="red";
        boton.innerHTML="LogOut";
        boton.value="true";
        visibilidad("edit-img-banner");
        visibilidad("edit-img-foto");
        visibilidad("edit-datos");
        visibilidad("edit-esp");

    }else{
        boton.style.backgroundColor="green";
        boton.innerHTML="Login";
        boton.value="false";
        visibilidad("edit-img-banner");
        visibilidad("edit-img-foto");
        visibilidad("edit-datos");
        visibilidad("edit-esp");
    }
};

function visibilidad(text){
    let e = document.getElementById(text);
    
    if (e.style.visibility=="visible"){
        e.style.visibility = "hidden";
    }else{
        e.style.visibility = "visible";
    }
}

function editImg(elem, textElem){
    let f = document.querySelector(textElem);
    var n = document.getElementById(elem);

    f.style.visibility = "visible";
    f.addEventListener('change', (e)=>{
        n.src=e.target.value;
    }); 
    f.style.visibility = "hidden";
}

function editText(texto,dest){
    let viejo = document.getElementsByClassName(dest);
    let nuevo = document.getElementById(texto); 

    nuevo.style.visibility = "visible";
    nuevo.addEventListener('change',(e)=>{
        nuevo.value = e.target.value;
    });
    viejo.innerHTML=nuevo.value;
    nuevo.style.visibility = "hidden";
}


