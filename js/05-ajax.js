$(document).ready(function(){

    //Metodo (load)
    // $("#datos").load("https://reqres.in/");//carga todo el html dentro del Div


    //metodo Get y Post

    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        // console.log(response); 
        response.data.forEach((element, index) => {
        $("#datos").append("<p>"+element.first_name+ " " + element.last_name+ "</p>");
       //se muestran los datos sacados por ajax
        
        });

    });

    

    $("#formulario").submit(function(e){
        e.preventDefault();

        var usuario = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val()
        };
    
    //     $.post($(this).attr("action"), usuario, function(response){
    //         console.log(response);
    //     }).done(function(){
    //         alert("Usuario exitoso");
    //     });

        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enviando usuario...");
            },
            success: function(response){
                console.log(response);
            },
            error: function(){
                console.log("Aocurrido un error")
            },
            timeuot: 100
        });
        return false;

    });

});