var keys = require('./keys.js');

 
if (process.argv[2] == 'my-tweets'){
	var Twitter = require('twitter');
	var client = new Twitter({
	  consumer_key: keys.twitterKeys.consumer_key,
	  consumer_secret: keys.twitterKeys.consumer_secret,
	  access_token_key: keys.twitterKeys.access_token_key,
	  access_token_secret: keys.twitterKeys.access_token_secret
	}); 

	var params = {screen_name: 'wquttaineh86'};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
		  if (!error) {
		  	for (var i = 0; i <= 20; i++) {
		  		console.log('tweet: 'tweets[i].text);
		    // console.log(tweets);
			}
	 	 }
	});
}

if (process.argv[2] == 'spotify-this-song'){
	var spotify = require('spotify');

	var song = "";
	for (var i = 3; i < process.argv.length; i++) {
		song = song + process.argv[i] + ' ';
	};
	song.trim();
	console.log(song);

if (song === ''){
	song = "The Sign by Ace of Base"
}

	spotify.search({ type: 'track', query: song }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;

	    }
	 	// console.log(JSON.stringify(data, null, 2));
	 	console.log('album name: ' + data.tracks.items[0].album.name);
	 	console.log(data.tracks.items[0].name);
	 	console.log(data.tracks.items[0].preview_url);
	 	console.log(data.tracks.items[0].artists[0].name);
	
	});
}

if (process.argv[2] == 'movie-this'){
	var request = require('request');

	var movie = "";
	for (var i = 3; i < process.argv.length; i++) {
		movie = movie + process.argv[i] + ' ';
	};

	movie.trim();
	console.log(movie);

if (movie === ''){
	movie = 'Mr. Nobody'
}

// var queryURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&r=json";
	request('http://www.omdbapi.com/?&y=&plot=short&r=json', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    // console.log(JSON.stringify(response)) // Show the HTML for the Google homepage. 
	    return;
	  }

	})
	    // console.log(JSON.stringify(response)) // Show the HTML for the Google homepage. 

	// console.log(JSON.stringify(response, null, 2));
}