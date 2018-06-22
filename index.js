window.onload=main;

function main()
{
    var soundtrigger=document.querySelector(".soundtrigger");
    var videlement=document.querySelector(".sound");

    videlement.addEventListener("play",(e)=>{
        soundtrigger.parentElement.removeChild(soundtrigger);
    });

    soundtrigger.addEventListener("click",(e)=>{
        videlement.play();
    });
}