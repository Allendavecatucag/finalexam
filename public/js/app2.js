
$('#app').html(`
	<div><h1>Loading...</h1></div>
      <div class="cssload-tetrominos">
	<div class="cssload-tetromino cssload-box1"></div>
	<div class="cssload-tetromino cssload-box2"></div>
	<div class="cssload-tetromino cssload-box3"></div>
	<div class="cssload-tetromino cssload-box4"></div>
</div>
	`);
setTimeout(function () {
	x();

},3000);
function x(){


$.ajax({
	//url: "http://www.omdbapi.com/?t=naruto&y=2010"
     //url: "http://www.omdbapi.com/?t=naruto&y=2011"
     url :"http://www.omdbapi.com/?t=naruto&y=2012"
    // url : "http://www.omdbapi.com/?t=naruto&y=2013"
    // url : "http://www.omdbapi.com/?t=naruto&y=2014"
     //url : "http://www.omdbapi.com/?t=naruto&y=2015"
}).done(function(res){
        console.log(res);
        let html =`
        <center>
   
        
        <h1>
Naruto Shippuden the Movie: Blood Prison
</h1>
     
      
        <img src =${res.Poster}"/>
 <h3> Rated: ${res.Rated}</h3>
<h3> Released: ${res.Released}</h3>
<h3> Runtime: ${res.Runtime}</h3>
<h3> Genre: ${res.Genre}</h3>
<h3> Director: ${res.Director}</h3>
<h3> Writer: ${res.Writer}</h3>
<h3> Language: ${res.Language}</h3>
<h3> Country: ${res.Country}</h3>
<h3> Awards: ${res.Awards}</h3>
<h3> Metascore: ${res.Metascore}</h3>
<h3> imdbRating: ${res.imdbRating}</h3>
<h3> imdbVotes: ${res.imdbVotes}</h3>
<p>Actors</p>
<h4>${res.Actors}</h4>

       <p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KDyhWXVG5JY" frameborder="0" allowfullscreen></iframe>
     </p>
     </center>
    `;


$('#app').html(html);
});

}


// $('#app').html(`
// <h1>Clyde</h1>
// <h1>Clyde</h1>
// <h1>Clyde</h1>
// <h1>Clyde</h1>
// <h1>Clyde</h1>




// `);

// let app = document.getElementById("app");

// app.innerHTML += "<h1>Clyde</h1>";
// app.innerHTML += "<h1>Clyde</h1>";
// app.innerHTML += "<h1>Clyde</h1>";
// app.innerHTML += "<h1>Clyde</h1>";
// app.innerHTML += "<h1>Clyde</h1>";