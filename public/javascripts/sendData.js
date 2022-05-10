function processData() {
    alert("Holi")

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