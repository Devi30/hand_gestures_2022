Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach(camera)
function take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+ data_uri+'">'
    });
}
console.log('ml5version:',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Z3pCFdGiO/model.json',modelloaded)
function modelloaded(){
    console.log("model is loaded")
}
function speak(){
    var synth=window.speechSynthesis
    speakdata1="first prediction is" + prediction1
    speakdata2="and the second prediction is"+ prediction2
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis)
}
