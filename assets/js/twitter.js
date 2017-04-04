function agregarComentario(){
  var comentario = document.getElementById('comentario').value;
  var autor = document.getElementById('autor').value;
  //var mostrarComentario = document.getElementById('mostrarComentario');
  //mostrarComentario.innerHTML = comentario + "<br>"+ autor;
  var visualizar = document.getElementById('visualizar');
  var articulo = document.createElement("article")

  visualizar.appendChild(articulo).innerHTML = comentario + "<br/>" + autor;
}

/*function contar(){
  var maxCaracteres = "140";
  var comentario = document.getElementById('comentario');
  var longitud = comentario.length;
  if(comentario <=140){
    document.getElementById('contador')
  }

  }
*/
