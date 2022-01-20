$(document).ready(function(){ //$ es un objeto + el selector + metodo ready + funcion anonima de callback
    
    //Selector de ID
    $("#azul").css("background", "blue")
                        .css("color", "white");

    $("#naranja").css("background", "orange")
                            .css("color", "white");

    $("#verde").css("background", "green")
                            .css("color", "white");



    // Selectores de clases
    var mi_clase = $('.zebra').css("padding", "5px");
    //mi_clase.css("border", "2px dashed black" ); se creo style de la clase en html

    $('.sin_borde').click(function(){
        console.log("click dado");
        $(this).addClass('zebra');
    });


    
    console.log(mi_clase);//aparecen los 2 arrays
    console.log(mi_clase[0]);//selecciona el 1er Array
    console.log(mi_clase.eq(1));//metodo .eq para seleccionar un elemento de un array



    //Selector de Etiqueta
    var parrafos = $('p').css("cursor", "pointer");

    parrafos.click(function(){
        var esto = $(this);//accedemos al DOM solamente 1 vez
        if(!esto.hasClass('grande')){//condicion q comprueba si existe una clase
                                    //si no tiene la clase grande
            esto.addClass('grande');//pone la clase grande
        }else{
            esto.removeClass('grande')//quita la clase grande
        }
            
    });



    //Selectores de atributo
    $('[title="Google"]').css('background', 'red');
    $('[title="Facebook"]').css('background', 'blue');


    //otros

    //$('p, a').addClass('margen-superior');  //asi no sobresaturamos el acceso al DOM

    //var busqueda = $("#caja").find('.resaltado');//el metodo find sirve para buscar en un arbol de html muy grande
    //var busqueda = $("#caja .resaltado");

    var busqueda = $("#elemento2").parent().parent().find('.resaltado')//metodo {.parent} para seleccionar elementos
    console.log(busqueda);









});