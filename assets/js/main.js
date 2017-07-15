$(document).ready(function() {

    //metodos que permiten mover elementos del dom
    $("#slider .slider__section:last").insertBefore("#slider .slider__section:first");
    //agregamos estilos para mostrar la primera img con margen -100%
    $("#slider").css("margin-left", "-" + 100 + "%");

    function irDer() {
        $("#slider").animate({
            marginLeft: "-" + 200 + "%"
        }, 700, function() {
            //la imagen se moverá al final del slider
            $("slider .slider__section:first").insertAfter("#slider slider__section:last");
            $(".slider").addClass(".slider");
        });
    }

    $("#btn-next").on("click", function() {
        irDer();
    });

    function irIzq() {
        $("#slider").animate({
            marginLeft: 0
        }, 700, function() {
            //la imagen se moverá al inicio del slider
            $("slider .slider__section:last").insertBefore("#slider .slider__section:first");
            $(".slider__section").addClass(".slider");
        });
    }

    $("#btn-prev").on("click", function() {
        irIzq();
    });

});