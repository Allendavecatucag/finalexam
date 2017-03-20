$('#app').html(`
    <div><h1>Loading...</h1></div>
      <div class="cssload-tetrominos">
    <div class="cssload-tetromino cssload-box1"></div>
    <div class="cssload-tetromino cssload-box2"></div>
    <div class="cssload-tetromino cssload-box3"></div>
    <div class="cssload-tetromino cssload-box4"></div>
</div>
`);

setTimeout(function(){
	x();
},3000);

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?i=tt1703048"
}).done(function(res){
	console.log(res);
	let html = `
	<center>
		<h1>${res.Title}</h1>
		<img src="${res.Poster}"/>
		<h3>${res.Year}</h1>
		<h5><p>${res.Plot}</p></h5>
		<h5>Genre: ${res.Genre}</h5>
		<h5>Writer: ${res.Writer}</h5>
		<h5>Actors: ${res.Actors}</h5>
	</center>
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




