var pictureSource;
var destinationType

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {

	pictureSource=navigator.camera.PictureSourceType;
	destinationType=navigator.camera.DestinationType;
}

function capturePhotoWithData() {
navigator.camera.getPicture(displayPicture,function(err) {alert(err);}, {quality : 40,
destinationType : Camera.DestinationType.FILE_URI,
sourceType : Camera.PictureSourceType.CAMERA});
}

function displayPicture(file_uri) {
var img_tag = '<img style="width:60px;height:60px;" id="smallImage" src="'+file_uri+'" />';
$('#errorMessage').append(img_tag);
$('#errorMessage').append(file_uri);
}


