$(document).ready(function() {
    // console.log("hiiii");
    // Mover Elemento por la pagina
    $(".elemento").draggable();


    // Redimensionar
    $(".elemento").resizable();



    // /****************** */
    // Seleccionar elementos
    // $(".lista-seleccionable").selectable();

    //Ordenar elementos
    $(".lista-seleccionable").sortable({
        update: function(event, ui){
            console.log("Cambiaste la lista!!")
        }
    });

    // /****************************************+ */

   
    // // Crea objetivos para elementos arrastrables
    // //Drop   Evento

    $("#elemento-movido").draggable();
    $("#area").droppable({

        drop: function (event, ui){
            console.log("Has soltado algo dentro de area");
            $(this)
            .addClass("ui-state-highlight")
            .find("p")
            .html("Dropped!");
        }

    });

        // Efectos 
        $("#mostrar").click(function(){
            //$(".caja-efectos").toggle("fade");
            //$(".caja-efectos").fadeToggle();
            //$(".caja-efectos").toggle("explode");
            //$(".caja-efectos").toggle("blind");
            //$(".caja-efectos").toggle("slide");
            //$(".caja-efectos").toggle("bounce");
            //$(".caja-efectos").toggle("clip");
            //$(".caja-efectos").toggle("drop");
            //$(".caja-efectos").toggle("fold");
            //$(".caja-efectos").toggle("highlight");
            //$(".caja-efectos").toggle("puff");
            //$(".caja-efectos").toggle("pulsate");
            //$(".caja-efectos").toggle("scale");
            // $(".caja-efectos").toggle("size");
            // $(".caja-efectos").toggle("hide");
            $(".caja-efectos").toggle("shake", 2000);//puedo agrgarle parametros opcionales, JSON etc....
           
        });


        // Tooltip
        $(document).tooltip();


        // Metodo   Dialog
        $("#lanzar-popup").click(function(){
            $("#popup").dialog();
            console.log("lanzado")
        });
        

        //Datepiker

        $("#calendario").datepicker();


        //Tabs
        $("#tabs").tabs({
            event: "mouseover"
        });


        // Animacion de color

        $( function() {
            var state = true;
            $( "#button" ).on( "click", function() {
              if ( state ) {
                $( "#effect" ).animate({
                  backgroundColor: "red",
                  color: "#fff",
                  width: 500
                }, 1000 );
              } else {
                $( "#effect" ).animate({
                  backgroundColor: "blue",
                  color: "#000",
                  width: 240
                }, 1000 );
              }
              state = !state;
            });
          } );
      


}) ;