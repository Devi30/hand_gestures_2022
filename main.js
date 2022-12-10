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
function check(){
    img=document.getElementById("captured_image")
    classifier.classify(img,gotresult)
}
var prediction1=""
var prediction2=""
function gotresult(error,results){
   if(error){
    console.error(error)
   } 
   else{
    console.log(results)
    prediction1=results[0].label
    prediction2=results[1].label
    document.getElementById("result_gesture_name1").innerHTML=prediction1
    document.getElementById("result_gesture_name2").innerHTML=prediction2
    speak()
    if(prediction1=="Heart"){
        document.getElementById("update_emoji1").innerHTML="&#9829"
    } 
    if(prediction1=="Victory"){
        document.getElementById("update_emoji1").innerHTML="&#9996"
    }  
    if(prediction1=="Thumbs Up"){
        document.getElementById("update_emoji1").innerHTML="&#128077"
    }   
    if(prediction2=="Heart"){
        document.getElementById("update_emoji2").innerHTML="&#9829"
    } 
    if(prediction2=="Victory"){
        document.getElementById("update_emoji2").innerHTML="&#9996"
    }  
    if(prediction2=="Thumbs Up"){
        document.getElementById("update_emoji2").innerHTML="&#128077"
    }   
   }
}
