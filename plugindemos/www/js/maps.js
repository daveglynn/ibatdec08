
//document.addEventListener("deviceready",onDeviceReady,false);

onDeviceReady();
function onDeviceReady() {

	navigator.geolocation.getCurrentPosition(
	function(position) {
		var longitude=position.coords.longitude;
		var latitude = position.coords.latitude;
		var latlong = new google.maps.LatLng(latitude,longitude);
		var mapOptions = {
		centre : latlong,
		zoom: 16,
		mapTypeId:google.maps.MapTypeId.ROADMAP
		}
		
		var map=new google.maps.Map(document.getElementById("geolocation"),mapOptions);
		
		},
		function() {
		alert('Error getting location');
		});
}
		

