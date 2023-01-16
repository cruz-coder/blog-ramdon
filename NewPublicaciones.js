class NewPublicaciones{
    crearPublicacion(titulo,texto){
        const infoPublicacion = {
            titulo : titulo,
            texto : texto,
        }
        this.guardarLocalStorage(infoPublicacion)
    }
    guardarLocalStorage(infoPublicacion){

        const publica = this.obtenerPublicacionLocalStorage();

        public.push(infoPublicacion)
        localStorage.setItem("publicaciones", JSON.stringify(publica))
    }
    obtenerPublicacionLocalStorage(){

        if(localStorage.getItem("publicaciones")=== null){
            const publicLS = []
        }else{
            const publicLS = JSON.parse(localStorage.getItem("publicaciones"))
        }
        return publicLS
    }

}