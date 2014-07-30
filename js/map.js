//This line finds the div with the id "map" and designates it as a Leaflet map container. It then sets view to the coordinates of Maryland and sets the zoom level zoomed out enough to see the entire state.
var map = L.map('map').setView([38.8, -77.9], 8);

//Here we tell Leaflet what tile server to use as the base layer. In this case, we're using OpenStreetMap. We then add the base layer to the map with .addTo(map).
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
}).addTo(map);

/* iMap data can be found at http://data.imap.maryland.gov/. In this case we're going to display the "Rivers and Streams - General" dataset (which is located in Hydrology). 
 * First we need to get our data. To get the link to the GeoJSON dataset, go to the URL of the dataset. For Federal Watersheds, that URL is 
 * http://data.imap.maryland.gov/datasets/2bd0f7761bc64e1b86cdefd77ce69ad4_0. On the right there's a button to "Download Dataset".
 * Click it. Choose "API" and then copy the GeoJSON URL. It should be http://data.imap.maryland.gov/datasets/2bd0f7761bc64e1b86cdefd77ce69ad4_0.geojson.
 * Now we need to get our data via jQuery. We use the jQuery function getJSON(url, callback function) to tell jQuery where to get our JSON from and then what to
 * do with the data once we get it.
*/
$.getJSON("http://data.imap.maryland.gov/datasets/2bd0f7761bc64e1b86cdefd77ce69ad4_0.geojson", function(data) {
	//data (the parameter of the callback function) is the GeoJSON data returned by the jQuery getJSON function call. You can see what is in data by uncommenting the line below and checking your JS console.
	console.log(data);


	/* We call Leaflet's geoJson function and pass it our GeoJSON data. This creates a GeoJSON Leaflet object, which we then add to the map. We're also going to bind a popup of the river or stream name and
	 * set all of the river and stream lines to dark blue with an opacity of 1. To learn more look at the GeoJSON part of the Leaflet API at http://leafletjs.com/reference.html#geojson
	*/
	L.geoJson(data, {
		style: {
		    "color": "#000080",
		    "opacity": 1
		},
		onEachFeature: function(feature, layer) {
			//This takes HTML as an argument, so we'll give the popup the stream or river name as the header and below it we'll give the Hydrologic Unit Code (HUC).
        	layer.bindPopup('<h1>' + feature.properties.PNAME + '</h1><h3>HUC: ' + feature.properties.HUC + '</h3>');
        }
    }).addTo(map);


});