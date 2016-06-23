function initialize() {
	document.getElementById("container").innerHTML = "<h1>Alaptérkép, csak annyit tud, hogy ide betölt.</h1>";
      var mapOptions = {
        center: new google.maps.LatLng(62.851138, 18.344319),
        zoom: 4,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}
      };
      var map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);
	  
		
}