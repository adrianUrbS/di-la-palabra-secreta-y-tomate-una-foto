var reconocerVoz = window.webkitSpeechRecognition;
var reconocimiento = new reconocerVoz();
reconocimiento.lang = "es-MX";

function iniciar(){
    reconocimiento.start();
}

reconocimiento.onresult = function(resultado){
    console.log(resultado);
    textoDetectado = resultado.results[0][0].transcript;
    document.getElementById("textbox").value = textoDetectado;
    hablar(textoDetectado)
    if(textoDetectado.toUpperCase() == "MESSI"){
        Webcam.attach("#camara");
        hablar("ponte trucha por que en 5 segundos te tomaré una foto")
      setTimeout(tomarFoto, 5000);  
    }
}

function hablar(mensaje){
    leerEnVozAlta = window.speechSynthesis;
    lectura = new SpeechSynthesisUtterance(mensaje);
    lectura.lang = "es-MX";
    leerEnVozAlta.speak(lectura);
}

Webcam.set({
    width:360,
    height: 250,
    image_format: "png",
    png_quality:95
});

function tomarFoto(){
    Webcam.snap(function(foto){
        document.getElementById("resultado").innerHTML = '<img src="' + foto +'" id="foto">'; guardar();
    })

}
function guardar(){
descarga = document.getElementById("link");
descarga.href = document.getElementById("foto").src;
descarga.click();
}