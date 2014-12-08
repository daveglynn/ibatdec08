function captureLocation() {

	navigator.geolocation.getCurrentPosition(

		function(position) {
			alert(position.coords.latitude + ',' + position.coords.longitude);
			
		},
		function() {
			alert('Error getting location');
		});

}
