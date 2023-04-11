let seconds=00;
let tens=00;
let getSecond=document.querySelector('.seconds');
let getTens=document.querySelector('.tens');
let btnStart=document.querySelector('.btn-start');
let btnStop=document.querySelector('.btn-stop');
let btnReset=document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener('click',()=>{
  interval= setInterval(startTimer,10);
})

btnStop.addEventListener('click',()=>{
    clearInterval(interval);
})
btnReset.addEventListener('click',()=>{
    clearInterval(interval);
    tens='00';
    seconds='00';
    getSecond.innerHTML=seconds;
    getTens.innerHTML=tens;
})
function startTimer(){
  
    tens++;
    if(tens<=9)
    {
        getTens.innerHTML='0'+ tens;
    }
    if(tens>9)
    {
        getTens.innerHTML= tens;
    }
    if(tens>99)
    {
        seconds++;
        getSecond.innerHTML='0'+ seconds;
        tens=0;
        getTens.innerHTML='0'+ 0;
    }
    if(seconds>9)
    {
        getSecond.innerHTML= seconds;
    }
}