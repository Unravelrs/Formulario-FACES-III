function processData() {
    var nombre=$("#nombre").val();
    alert(nombre);
    $.ajax({
        method: "POST",
        url: "/sendData",
        data: {
           
        },
        cache: false,
        success: function (data) {
            console.log("datos enviados")

        },
        error: function (a, b, c) {
            debugger;
        },
    });
}