$(document).ready(()=>{



        reloadLinks();

        $('#add_button')
            .removeAttr('disabled')
            .click(function(){
           $('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');
           
           $("#add_link").val('');//vacia el input cada vez que añado algo
           
           reloadLinks();

           //metodos: html, append, prepend, before, after
        });

    console.log($('a').length);//veo que hay 4 elementos
    
});

function reloadLinks(){
    
    $('a').each(function(){
        var that = $(this);
        var enlace = $(this).attr("href");//consigo el texto adentro del atributo
        
        that.attr('target', '_blank'); //abre una nueva pestaña de un link
      
        that.text(enlace);  //se incrusta dentro del texto el href que hay en el enlace
    });
    
}