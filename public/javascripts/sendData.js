 function processData() {
    var nombre=$("#nombre").val();
    var NSS=$("#NSS").val();
    var primerapellido=$("#primerapellido").val();
    var segundoapellido=$("#segundoapellido").val();
    var edad=$("#edad").val();
    var sexo=$("#sexo").val();
    var ocupacion=$("#ocupacion").val();
    var preg1=$("#preg1").val();


    

    
    alert(nombre + " " + primerapellido + " " + segundoapellido + " " + NSS + " " + edad + " " + sexo + " " + ocupacion + " " + preg1);
    $.ajax({
        method: "POST",
        url: "/sendData",
        data: {
           
        },
        cache: false,
        success: function (data) {
            console.log("Datos enviados")

        },
        error: function (a, b, c) {
            debugger;
        },
    });


}