const clock = document.getElementById('clock');

const am =document.getElementById('am');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showTime, 1000);
})

const showTime = () =>{
    let date = new Date ();

    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();


    hr = hr<10 ? `0${hr}`: hr;
    mins = mins<10 ? `0${mins}`: mins;
    secs = secs<10 ? `0${secs}`: secs;

    clock.innerHTML = `${hr} :${mins} :${secs}`;
    am.innerHTML = hr>12? "PM" : "AM"



}