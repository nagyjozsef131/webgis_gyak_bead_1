 function initDania() {
	 document.getElementById("container").innerHTML = "<h1>Dánia népessége: diva-gis és statoid adatok, qgissel készre rendezve és fusion tablebe töltve.</h1>";
		var map = new google.maps.Map(document.getElementById('map-canvas'), {
		center: {lat: 55.717946, lng: 10.037856},
		zoom: 6
		
	});
 
    layer = new google.maps.FusionTablesLayer({
      map: map,
      heatmap: { enabled: false },
	  legend: {enabled: true},
      query: {
        select: "col7",
        from: "1Tg1ZTm8rOWspDYHgX-N-vBq6PMzAuRoYP2rzkRST",
        where: ""
      },
      options: {
        styleId: 2,
        templateId: 2
      }
    });
  layer.setMap(map);

}
