$(document).ready(function(){ //evento ready
 
    //Eventos MouseOver y MouseOut

    var caja = $("#caja");

    
    caja.mouseover(function(){
        $(this).css("background", "red");
    });

    caja.mouseout(function(){
        $(this).css("background", "green");
    });
    

    function cambiaRojo(){
        $(this).css("background", "red");
    };

    function cambiaVerde(){
        $(this).css("background", "green");
    };


    //evento Hover
    caja.hover(cambiaRojo, cambiaVerde);

    //Click, Doble click
    caja.click(function(){
        $(this).css("background", "blue")
                .css("color", "white");
    });
    caja.dblclick(function(){
        $(this).css("background", "orange")
                .css("color", "blue");
                console.log("Me has dado doble click");
    });

    // //Focus y Blur 
    var nombre = $("#nombre");
    // var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border", "4px solid red");
    });
    nombre.blur(function(){
        $(this).css("border", "1px solid blue");
        
    // });
    //     //$(this).val();  //metodo val saca la informacion del imput
    $("#datos").text($(this).val()).show();//manipulando el texto cogemos un 
                                       //valor de un atributo y lo incrustamos 
                                       //con el metodo text en otra etiqueta
    });

    //Mosedown y mouseup

    // datos.mousedown(function(){
    //     $(this).css("border-color", "red");

    // });
    // datos.mouseup(function(){
    //     $(this).css("border-color", "blue");

    // });

    //Mousemove
    $(document).mousemove(function(){
    //    var sigueme = $("#sigueme");   //forma larga
    // sigueme.css("left", event.clientX);
    // sigueme.css("top", event.clientY);

    $('body').css("cursor", "none");  //elimina el cursor y queda la bola

    $("#sigueme").css("left", event.clientX)//forma corta
                .css("top", event.clientY);
    });

    
});