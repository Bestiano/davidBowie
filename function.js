// Datos entregados para el ejercicio
var davidBowie = {
  datosPersonales: {
    nombre: 'David',
    apellido:  'Jones',
    nacimiento:  1947,
    pais:  'Reino Unido',
    imagen: 'https://vignette.wikia.nocookie.net/es.gta/images/4/44/David_Bowie.jpg/revision/latest?cb=20160910045306'
  },
  datosArtisticos: {
    nombreArtistico: 'David Bowie',
    otrosNombres: ['Starman', 'Ziggy Stardust', 'The Thin White Duke'],
    informacionArtistica: {
      voz: 'Barítono',
      genero: 'Rock'
    }
  }
}


// Una vez que se encuentre el documento cargado,
//empezaremos a ubicar cada uno de los datos
//en los lugares que corresponde
$(document).ready(function(){
  // Imagen y título
  $("#artist_image").attr("src", davidBowie.datosPersonales.imagen);
  $("#artist_name").html(davidBowie.datosArtisticos.nombreArtistico);

  // Datos Personales
  $("#artist_firstname").html(davidBowie.datosPersonales.nombre);
  $("#artist_lastname").html(davidBowie.datosPersonales.apellido);
  $("#artist_yearBirthday").html(davidBowie.datosPersonales.nacimiento);
  $("#artist_country").html(davidBowie.datosPersonales.pais);

  //Datos Artísticos
  $("#artist_artistName").html(davidBowie.datosArtisticos.nombreArtistico);

  // En el caso de los seudónimos (es un arreglo),
  // debemos limpiar el html de contiene el ul
  //(quitar esos li que no vamos a utilizar).
  $("#artist_pseudonym ul").empty();
 // Una vez limpiado el lugar donde vamos a insertar la información,
 //debemos iterar el arreglo de seudónimos,
 //para esto ocupamos forEach, aunque podemos ocupar perfectamente for.
  davidBowie.datosArtisticos.otrosNombres.forEach(function(nombre){
    // Durante la iteración,
    //se ingresa la información dentro del elemento de HTML (ul).
    // Resumiendo, se crearán cada li con la información necesaria.
      $("#artist_pseudonym ul").append("<li>" + nombre + "</li>");
  });
});

// De esta forma ingresamos los datos a nuestra página de forma dinámica.