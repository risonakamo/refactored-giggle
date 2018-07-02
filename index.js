window.onload=main;

function main()
{
    var soundtrigger=document.querySelector(".soundtrigger");
    var videlement=document.querySelector(".sound");

    soundtrigger.addEventListener("click",(e)=>{
        videlement.play();
    });

    if (!videlement.paused)
    {
        soundtrigger.parentElement.removeChild(soundtrigger);
    }

    else
    {
        videlement.addEventListener("play",(e)=>{
            soundtrigger.parentElement.removeChild(soundtrigger);
        });
    }
}