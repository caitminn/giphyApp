var giphyApp = {};

giphyApp.init = function(){
	// The code in here is used to initialize our application

	giphyApp.colorChange();

	$('form').on('submit', function(){
		event.preventDefault();
		
		//First, clear out the container to make room for new gifs
		$('input').empty();
		$('#randomGif').empty();
		
		// Listen for form submission and store the input in a variable
			var userInput = $('input').val();
			console.log(userInput);

		giphyApp.getData(userInput);
	});
};

giphyApp.getData = function(userInput){
	$.ajax({
		url: 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+ userInput,
		method: 'GET',
		dataType: 'json',
		tag: 'userInput'
	})
	.then(function(info){
		giphyApp.displayGif(info);
	});
};

giphyApp.displayGif = function(info){
	// Display gif on the page
	var gifUrl = $('main').css('background-image', 'url('+ info.data.image_original_url +')');
	
	$('main').append(gifUrl);	
};

giphyApp.colorChange = function(){
	// Create endless color variations to cycle through
	var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

	$('.title').animate( { backgroundColor: hue }, 1000);
};

$(function(){
	giphyApp.init();
});