 function initMap() {
	 document.getElementById("container").innerHTML = "<h1>Finnország népessége:</h1> <h2>Finnország népessége körülbelül5.100.000 fő-re tehető. Ennek az ötmillió főnek a eloszlása az ország területén rendkívül egyenlőtlen. A zord ághajlat miatt a lakosság több mint fele az ország déli partvidékén tömörül, majd csak ezután következik az idős településeiről ismert nyugati part. A belső és sarkkörön túli területeken már az egészen extrém 5 fő/ km2-es érték alá is lemehet a népsűrűségi mutató. Alapvetően elmondható, hogy Finnországban a népsűrűség DNy-ÉK irányban csökken.</h2>";
		var map = new google.maps.Map(document.getElementById('map-canvas'), {
		center: {lat: 65.472789, lng: 27.136105},
		zoom: 5
		
	});

	 layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
	  legend: { enabled: true},
      query: {
        select: "col9",
        from: "1nr5gatd3KlsneEY0FaKewukK3KW4VILfl96LEzc-",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  layer.setMap(map);

}

  function initorszag() {
	 document.getElementById("container").innerHTML = "<h1>Orszagok:</h1> <h2>Ezen a térképen a Skandináv országokat ábrázoltam, id alapján különböző színt kaptak, hogy szebb legyen az egész, rájuk kattintva info ablak tájékoztat nevükről és laokkáguk számáról.</h2>";
		var map = new google.maps.Map(document.getElementById('map-canvas'), {
		center: new google.maps.LatLng(62.851138, 18.344319),
		zoom: 4
		
	});

	 layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
	  legend: { enabled: false},
      query: {
        select: "col7",
        from: "1sRGAzQV2Tvg2ed4kuR2l8Q-1XP_IugrJTY-_B1in",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  layer.setMap(map);

}