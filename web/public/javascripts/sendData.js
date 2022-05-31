function processData() {
    var nombre = $("#nombre").val();
    var nss = $("#NSS").val();
    var primerapellido = $("#primerapellido").val();
    var segundoapellido = $("#segundoapellido").val();
    var edad = $("#edad").val();
    var sexo = $("#sexo").val();
    var ocupacion = $("#ocupacion").val();
    var preg1 = $('input[name="preg1"]:checked').val();
    var preg2 = $('input[name="preg2"]:checked').val();
    var preg3 = $('input[name="preg3"]:checked').val();
    var preg4 = $('input[name="preg4"]:checked').val();
    var preg5 = $('input[name="preg5"]:checked').val();
    var preg6 = $('input[name="preg6"]:checked').val();
    var preg7 = $('input[name="preg7"]:checked').val();
    var preg8 = $('input[name="preg8"]:checked').val();
    var preg9 = $('input[name="preg9"]:checked').val();
    var preg10 = $('input[name="preg10"]:checked').val();
    var preg11 = $('input[name="preg11"]:checked').val();
    var preg12 = $('input[name="preg12"]:checked').val();
    var preg13 = $('input[name="preg13"]:checked').val();
    var preg14 = $('input[name="preg14"]:checked').val();
    var preg15 = $('input[name="preg15"]:checked').val();
    var preg16 = $('input[name="preg16"]:checked').val();
    var preg17 = $('input[name="preg17"]:checked').val();
    var preg18 = $('input[name="preg18"]:checked').val();
    var preg19 = $('input[name="preg19"]:checked').val();
    var preg20 = $('input[name="preg20"]:checked').val();

    var respares =
        parseInt(preg2) +
        parseInt(preg4) +
        parseInt(preg6) +
        parseInt(preg8) +
        parseInt(preg10) +
        parseInt(preg12) +
        parseInt(preg14) +
        parseInt(preg16) +
        parseInt(preg18) +
        parseInt(preg20);

    var resnones =
        parseInt(preg1) +
        parseInt(preg3) +
        parseInt(preg5) +
        parseInt(preg7) +
        parseInt(preg9) +
        parseInt(preg11) +
        parseInt(preg13) +
        parseInt(preg15) +
        parseInt(preg17) +
        parseInt(preg19);

    var resparesclasif="";
    var resnonesclasif="";
    var funcionfam="";

    
    if (respares <= 19)
    resparesclasif = "Familia rígida"

    else if (respares <= 24)
     resparesclasif = "Familia estructurada"

     else if (respares <= 28)
     resparesclasif = "Familia flexible"

     else if (respares <= 50)
     resparesclasif = "Familia caótica"


 if (resnones <= 34)
    resnonesclasif = "Familia no relacionada"

    else if (resnones <= 40)
     resnonesclasif = "Familia semirelacionada"

     else if (resnones <= 45)
     resnonesclasif = "Familia relacionada"

     else if (resnones <= 50)
     resnonesclasif = "Familia aglutinada"


 if (resnones <=34 && respares <=19)
    funcionfam = "Familia disfuncional"

    else if (resnones >= 46 && respares >= 29)
    funcionfam = "Familia disfuncional"

    else if (resnones <=34 && respares >= 29)
    funcionfam = "Familia disfuncional"

    else if (resnones >= 46 && respares <=19)
    funcionfam = "Familia disfuncional"

    else if (resnones >= 35 && resnones <= 45 && respares >= 20 && respares <= 28)
    funcionfam = "Familia funcional"

    else funcionfam = "Familia medianamente funcional"



    
    

 

    $.ajax({
        method: "POST",
        url: "/sendData",
        data: {
            nombre: nombre,
            nss: nss,
            apellido1: primerapellido,
            apellido2: segundoapellido,
            edad: edad,
            sexo: sexo,
            ocupacion: ocupacion,
            respares: respares,
            resnones: resnones,
            resnonesclasif: resnonesclasif,
            resparesclasif: resparesclasif,
            funcionfam: funcionfam
        },
        cache: false,
        success: function (data) {
            alert(data);
        },
        error: function (a, b, c) {
            debugger;
        },
    });
}
