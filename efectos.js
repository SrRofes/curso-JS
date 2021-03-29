// CARGA CONTENIDO EN VARIABLE
  var tiempo = prompt ("Introduce el tiempo de carga aqui");
// hace que algo aparezca lento

  jQuery(function(){
    jQuery("body").hide().fadeIn(tiempo);
  });
