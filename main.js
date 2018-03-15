// User code here
//http://swapi.co/api/films/

/*$.getJSON("dropdown-menu")
	.then(function (data, http://swapi.co/api/films/){
					$.each(data.results, function(index,value){
														someArray.push(value)}} */
	var data = [{
		"episode_id": "1",
			"title": "The Phantom Menace",
			"release_date": "1999-05-19"
	}, {
		"episode_id": "2",
			"title": "Attack of the Clones",
			"release_date": "2002-05-16"
	}]
	for (i = 0; i < data.length; i++) {
		var li = $('<li class = "starwars"></li>');
		li.attr({
			id: data[i]['episode_id'],
			date: data[i]['release_date']
		}).text(data[i]['title']);
		$('#list').append(li)
	}
	$('.starwars').click(function() {
		alert('onlick is working');
	});