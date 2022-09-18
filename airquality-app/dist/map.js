//heatmap test begin

mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
//	var baseLayer=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
//	{attribution:'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
//	maxZoom:18});

baseLayer = L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
  {
	attribution: '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
	tileSize: 512,
	maxZoom: 18,
	zoomOffset: -1,
	id: 'mapbox/streets-v11',
	accessToken: 'pk.eyJ1IjoicmJlbG92b2xvdiIsImEiOiJjbDg2eHFhNTQxMDV3M3dvZTMwMzRsdjFuIn0.IcSCPfoNmvys4Y5fpPbCAg'
  }
);

//heatmap end

//var mymap=new L.Map('map',{center:new L.LatLng(/*25.6586,-80.3568*/-36.88, 174.76),zoom:4,layers:[baseLayer,heatmapLayer]});

var mymap = L.map('map').setView([-36.88, 174.76], 11);
var markers = new L.FeatureGroup();
var heatmapLayer;
baseLayer.addTo(mymap);

//showInfoBox(mymap);
showLegend(mymap);
//showSitesList(mymap, sites_list);
/*
mymap.on('click', onMapClick);
function onMapClick(e) {
	var popup = L.popup();
	popup.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(mymap);
}
		*/
