var token = '4668467669.066021c.a59d3e6a7d914c848818d1988e9017e7',
    username = 'jiquilpan_magico', 
    num_photos = 4;
 
$.ajax({ 
	url: 'https://api.instagram.com/v1/users/search',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, q: username}, 
	success: function(data){
		console.log(data);
		$.ajax({
			url: 'https://api.instagram.com/v1/users/' + data.data[0].id + '/media/recent', 
			dataType: 'jsonp',
			type: 'GET',
			data: {access_token: token, count: num_photos},
			success: function(data2){
				console.log(data2);
				for(x in data2.data){
					$('ul').append('<li><img src="'+data2.data[x].images.standard_resolution.url+'"></li>');  
                    // data2.data[x].images.thumbnail.url -  150x150
			        // data2.data[x].images.standard_resolution.url -  612х612
			        // data2.data[x].link - Instagram post URL 
                    // data2.data[x].images.low_resolution.url - 306х306
				}
    			},
			error: function(data2){
				console.log(data2);
			}
		});
	},
	error: function(data){
		console.log(data);
	}
});