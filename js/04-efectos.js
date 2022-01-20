$(document).ready(()=>{

    var caja = $("#caja");

    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();//oculta el boton mostrar
        $("#ocultar").show();
        //$("#caja").fadeTo('slow', 1);
        caja.slideDown('slow'); //muestra la caja
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        //$("#caja").fadeTo('slow', 1);
        //caja.slideUp('slow');       ---oculta la caja
        caja.slideUp('slow', function(){ //se añade funcion anonima de callback
            console.log("Cartel ocultado");//muestra en consola despues de que se oculta en la pantalla
        });

        //metodos: show y hide
        //otros metodos: (fadeIn y fadeOut)
        //            (fadeTo)  Permite que valla de un estado a otro
        //            (slideDown y slideUp)

    });

    /************************************************ */

    $("#todoenuno").click(function(){
        caja.slideToggle('fast'); //toggle= con un mismo boton cierra y abre
    });

    //otros: toggle, fadeToggle, slideToggle

    /**********Animaciones Personalizadas************* */

    $("#animar").click(function(){
        caja.animate({ //este es un paso de la animacion
                marginLeft: '300px',
                fontSize: '40px',
                height: '100px'           
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '300px'
            }, 'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            }, 'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            }, 'slow')
            .animate({ //este es un paso de la animacion
                marginLeft: '300px',
                fontSize: '40px',
                height: '50px'           
            }, 'slow')
        ;
    });

}); 