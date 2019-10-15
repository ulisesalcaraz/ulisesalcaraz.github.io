$("#boton-fecha").on("click", function(){

	$("#modal-date").modal();


});

$("#boton-tarjeta").on("click", function(){

	$("#modal-tarjeta").modal();


});


$('.fecha-picker').datepicker({
    format: "yyyy-mm-dd",
    language: "es"
});

$('.venc-picker').datepicker({
    format: "mm/yy",
    language: "es"
});

