function agregarComentario(){
  var comentario = document.getElementById('comentario').value;
  var autor = document.getElementById('autor').value;
  //var mostrarComentario = document.getElementById('mostrarComentario');
  //mostrarComentario.innerHTML = comentario + "<br>"+ autor;
  var visualizar = document.getElementById('visualizar');
  var articulo = document.createElement("article");
  var rayita = document.createElement("hr");

  visualizar.appendChild(articulo).innerHTML = comentario + "<br/>" + autor;
  visualizar.appendChild(rayita);
}

function contar(){
  var maxCaracteres = "140";
  var comentario = document.getElementById('comentario').value;
  var longitud = comentario.length;
  if(comentario <=140){
    document.getElementById('contador').innerHTML = maxCaracteres-longitud;

  }else {
     maxCaracteres.substr(0,maxCaracteres);
  }
  console.log(comentario)
}
