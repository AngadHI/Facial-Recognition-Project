Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="result_img"/>';
});
}

console.log('ml5_version:', ml5.version);
classifier = ml5. imageClassifier('https://teachablemachine.withgoogle.com/models/v_s195BzE/model.¡son', modelLoaded);
function modelLoaded() {
    console.log("The model has been loaded.");
}