 var SpeechRecognition=window.webkitSpeechRecognition;
 var Recognition=new SpeechRecognition();
 var Textbox=document.getElementById("textbox");


 function start(){
     Textbox.innerHTML="";
    recognition.start();
 }


 recognition.onresult=function(event){
     console.log(event);
 }