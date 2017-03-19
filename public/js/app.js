$('#app').html(`
	<div class="progress">
      <div class="indeterminate"></div>
  </div>
`);


setTimeout(function(){
	x();
},3000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?i=tt4422836"
}).done(function(res){
	console.log(res);
	let html = `
		<h1>${res.Title}</h1>
		<img src="${res.Poster}"/>
		<h3>${res.Year}</h1>
		<h5><p>${res.Plot}</p></h5>
		<h5>Genre: ${res.Genre}</h5>
		<h5>Writer: ${res.Writer}</h5>
		<h5>Actors: ${res.Actors}</h5>

	`;
	$('#app').html(html);


});
}

$('#apps').html(`
	<div class="progress">
      <div class="indeterminate"></div>
  </div>
`);


setTimeout(function(){
	y();
},3000);

function y(){
$.ajax({
	url: "http://www.omdbapi.com/?i=tt1219289&plot=full"
}).done(function(res){
	console.log(res);
	let html = `
		<h1>${res.Title}</h1>
		<img src="${res.Poster}"/>
		<h3>${res.Year}</h1>
		<h5><p>${res.Plot}</p></h5>
		<h5>Genre: ${res.Genre}</h5>
		<h5>Director: ${res.Director}</h5>
		<h5>Writer: ${res.Writer}</h5>
		<h5>Actors: ${res.Actors}</h5>

	`;
	$('#apps').html(html);


});
}




