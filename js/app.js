var cargarPagina = function () {
    makePokemons();
    $(document).on("click",".activator", details);
};
var makePokemons = function () {
    var url = "http://pokeapi.co/api/v2/pokemon-species/";
    $.getJSON(url, function (response) {
       var pokemons=response.results;
		showPokemons(pokemons);
    })
};

var pokemonTemplate=
'<div class="col s3 m6 l3">' +
	'<div class="card ">'+
   	 	'<div class="card-image waves-effect waves-block waves-light">'+
     		'<img src="img/--nombre--.png">'+
   		'</div>'+
    	'<div class="card-content">'+
      		'<span class="card-title activator grey-text text-darken-4" data-url="__urlpersonaje__">--nombre--<i class="material-icons right">add</i></span>'+
    	'</div>'+
    	'<div class="card-reveal caracteristicas">'+
      		'<span class="card-title grey-text text-darken-4" name="first_name">--nombre--<i class="material-icons right">close</i></span>'+
					'<h5>Caracteristicas</h5>'+
      		'<p><strong>Habitat: </strong><span class="habitat">--habitat--</span></p>'+
					'<p><strong>Color: </strong><span class="color">--shape--</span></p>'+
					'<p><strong>Shape: </strong><span class="shape">--shape--</span></p>'+
    	'</div>'+
  	'</div>'+
'</div>';

var showPokemons =function(pokemons) {
	var plantillaFinal="";
	pokemons.forEach(function (pokemon) {
		plantillaFinal += pokemonTemplate.replace("--nombre--",pokemon.name)
		.replace("--nombre--",pokemon.name.toUpperCase())
		.replace("--nombre--",pokemon.name.toUpperCase())
		.replace("__urlpersonaje__",pokemon.url)
	});

	$("#pokedex").html(plantillaFinal);
}

var details=function(){
	  var url = $(this).data("url");
		console.log(url);
	  var $habitat = $(this).parents(".card").find(".habitat");
		var $color = $(this).parents(".card").find(".color");
		var $shape = $(this).parents(".card").find(".shape");
		var $genera = $(this).parents(".card").find(".genera");
	  $.getJSON(url,function(response){
	  	console.log(response.habitat.name);
	  	$habitat.text(response.habitat.name);
			$color.text(response.color.name);
			$shape.text(response.shape.name);
       });

	}
	$(document).ready(cargarPagina);
