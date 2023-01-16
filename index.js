const btnEnviar = document.getElementById("btnEnviar")

function recibiendoPublicacion(){
    btnEnviar.addEventListener("click", verificar)
}

function verificar(){
    const titulo = document.getElementById("titulos").value
    const textoPublicacion = document.getElementById("text").value

    if( titulo === "" || textoPublicacion === "" ){
        alert("por favor, llene los campos correspondientes")
    }else{
        //NewPublicaciones.crearPublicacion(titulo,texto)
    }
}

function cargarPublicacion(){
    const publicaciones = [
        {
            titulo: "Quizá no hemos contactado con extraterrestres porque están esperando el momento oportuno",
            texto: "Investigadores han buscado signos tecnológicos de extraterrestres en los momentos en que los exoplanetas pasan directamente frente a los soles, desde el punto de vista de la Tierra"
        },
        {
            titulo: "La nueva temporada de rick and morty 2",
            texto: "Los fans de los singulares viajes intergalácticos de Rick y Morty están de enhorabuena. La sexta temporada de la ganadora de dos premios Emmy a mejor serie de animación, y recientemente nominada a un tercero, verá la luz el próximo 5 de septiembre en HBO Max."
        }
    ]

    localStorage.setItem("publicaciones", JSON.stringify(publicaciones))
}

function mostrarPublicacion(){

    const publicacion = JSON.parse(localStorage.getItem("publicaciones"))

    publicacion.forEach(function(publicacion){
    
    const cards = document.createElement("div")
    cards.innerHTML = `<div class="container mt-3">
                            <div class="card text-white bg-danger">
                                <div class="card-header">${publicacion.titulo}</div>
                                <div class="card-body">
                                    <p class="card-text">${publicacion.texto}</p>
                                </div>
                            </div>
                        </div>`
    
    const publi = document.getElementById("body")
    publi.append(cards)
    })
}


cargarPublicacion();
mostrarPublicacion();

