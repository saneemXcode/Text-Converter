let text=document.getElementById('text');
let btn=document.getElementById('btn');


btn.addEventListener('click',()=>{
    let speed=document.getElementById('speed');
    let pitch=document.getElementById('pitch');

    let speech=new SpeechSynthesisUtterance();

    speech.lang='en-US';
    speech.rate=speed.value;
    speech.pitch=pitch.value;
    speech.volume=1;
    speech.text=text.value;

    speechSynthesis.speak(speech);
})