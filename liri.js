var keys = require('./keys.js');
var fs = require('fs');
var request = require('request');
var Twitter = require('twitter');
var spotify = require('spotify');

var word = process.argv;

var client = new Twitter(keys.twitterKeys);

if (word[2] == 'my-tweets'){

	var params = {screen_name: 'wquttaineh86'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		 if (!error) {
	    		for (var i = 0; tweets.length > i; i++) {
		  		console.log("Tweet #" +i+ ': '+ tweets[i].text);
			}

	 	 }
		});
}

if (word[2] == 'spotify-this-song'){

	var song = "";
	for (var i = 3; i < word.length; i++) {
		song = song + word[i] + ' ';
	};
	song.trim();
	console.log(song);

if (song === ''){
	song = "The Sign by Ace of Base"
}

	spotify.search({ type: 'track', query: song }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	    }
	 	// console.log(JSON.stringify(data, null, 2));
	 	console.log('Album Name: ' + data.tracks.items[0].album.name);
	 	console.log('Song Name: ' + data.tracks.items[0].name);
	 	console.log('Preview URL: ' + data.tracks.items[0].preview_url);
	 	console.log('Artist Name: ' + data.tracks.items[0].artists[0].name);
	
	});
}

if (word[2] == 'movie-this'){
	var movie = "";
		for (var i = 3; i < word.length; i++) {
			movie = movie + word[i] + ' ';
		};
		movie.trim();
		// console.log(movie + 'YOOOOO');

		var movie = word[3];

		if (movie === ''){
			movie = 'Mr. Nobody';
			console.log(movie)
			console.log("If you haven't watched Mr. Nobody,then you should");
			console.log("It's on Netflix!");
		}

	var movie = word[3];

	request('http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json&tomatoes=true', function (error, response, body) {
	 
	  if (!error && response.statusCode == 200) {

	    console.log('Title of the Movie: ' + JSON.parse(body)['Title']);
	    console.log('Year of the movie: ' + JSON.parse(body)['Year']); 
	    console.log('IMDB Rating of the movie: ' + JSON.parse(body)['imdbRating']); 
	    console.log('Country where the movie was produced: ' + JSON.parse(body)['Country']);  
	    console.log('Language of the movie: ' + JSON.parse(body)['Language']); 
	    console.log('Plot of the movie: ' + JSON.parse(body)['Plot']); 
	    console.log('Actors in the movie: ' + JSON.parse(body)['Actors']); 
	    console.log('Rotten Tomatoes Rating: ' + JSON.parse(body)['tomatoUserRating']);
	    console.log('Rotten Tomatoes URL: ' + JSON.parse(body)['tomatoURL']); 
	   	// console.log(JSON.parse(body));
	  }
	});
	    // console.log(JSON.stringify(response)) // Show the HTML for the Google homepage. 
	// console.log(JSON.stringify(response, null, 2));
}