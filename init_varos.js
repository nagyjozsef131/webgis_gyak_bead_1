function init_varos() {
	document.getElementById("container").innerHTML = "<h1>Néhány északi város json adatsorból, qgis export geojson segítségével.</h1>";
      var mapOptions = {
        center: new google.maps.LatLng(62.851138, 18.344319),
        zoom: 4,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
      };
      var map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
		
		// Adatok:
		var json = [
		    {"title": "Stockholm","lat": 59.3,"lng": 18.1},
			{"title":"Třnsberg","lat":59.264001,"lng":10.421001},
			{"title":"Mariestad","lat":58.705002,"lng":13.827997},
			{"title":"Vannersborg","lat":58.363002,"lng":12.330001},
			{"title":"Hameenlinna","lat":60.996996,"lng":24.472},
			{"title":"Kouvola","lat":60.876,"lng":26.709004},
			{"title":"Mikkeli","lat":61.689996,"lng":27.285003},
			{"title":"Vejle","lat":55.709001,"lng":9.534996},
			{"title":"Hillerod","lat":55.933299,"lng":12.316699},
			{"title":"Soro","lat":55.432998,"lng":11.566702},
			{"title":"Borlänge","lat":60.483322,"lng":15.416671},
			{"title":"Västerĺs","lat":59.630015,"lng":16.540013},
			{"title":"Finnsnes","lat":69.240617,"lng":18.008606},
			{"title":"Gjřvik","lat":60.800021,"lng":10.700008},
			{"title":"Rřrvik","lat":64.868016,"lng":11.2053},
			{"title":"Savonlinna","lat":61.866623,"lng":28.883343},
			{"title":"Pori","lat":61.478895,"lng":21.774939},
			{"title":"Viborg","lat":56.433337,"lng":9.399984},
			{"title":"Roskilde","lat":55.649974,"lng":12.083335},
			{"title":"Bollnäs","lat":61.352003,"lng":16.366587},
		    {"title": "Oslo","lat": 59.9,"lng": 10.8},
			{"title":"Göteborg","lat":57.750001,"lng":12.000032},
		    {"title": "Copenhagen","lat": 55.7,"lng": 12.6}
		]

		var infoWindow = new google.maps.InfoWindow();

		// Markergyár:
		for (var i = 0, length = json.length; i < length; i++) {
			var data = json[i],
				latLng = new google.maps.LatLng(data.lat, data.lng);

			var marker = new google.maps.Marker({
				position: latLng,
				map: map,
				title: data.title
			});

			// closure, hogy meg is maradjon minden
			(function(marker, data) {

				// info kattra:
				google.maps.event.addListener(marker, "click", function(e) {
					infoWindow.setContent(data.title);
					infoWindow.open(map, marker);
				});


			})(marker, data);

		}

    }