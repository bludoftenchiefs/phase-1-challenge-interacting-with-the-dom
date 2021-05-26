'use strict';
document.addEventListener('DOMContentLoaded', () => {    
    
    const counter = document.getElementById('counter'); 

    let interval = setInterval(function(){
         counter.innerText++}, 1000);
    
    const minus = document.getElementById('minus');
    
    minus.addEventListener('click', function(){
        counter.innerText--;
    })

    const plus = document.getElementById('plus');

    plus.addEventListener('click', function(){
        counter.innerText++;
    })

    const heart = document.getElementById('heart');
    let likeTotal = 0;
    let myCounter = counter.innerHTML;

    function likeCounter(counterValue){
        if (counterValue === myCounter){
            likeTotal += 1;
            myCounter = counterValue;
            return likeTotal;
        } 
        else {
            likeTotal = 0;
            likeTotal += 1;
            myCounter = counterValue;
            return likeTotal;
        }
    }
    heart.addEventListener('click', function(){
        let btn = document.createElement("li");
        btn.innerHTML = "<span>" +(counter.innerHTML)+`</span> has been liked ${likeCounter(counter.innerHTML)} times`;
        document.body.appendChild(btn);
    })

    const pause = document.getElementById('pause');
    let paused = false;

    pause.addEventListener('click', function() {
        if (paused) {
            interval = setInterval(function(){
                counter.innerText++}, 1000);
            pause.innerText = 'pause';
            paused = !paused;
        } else {
            clearInterval(interval);
            pause.innerText = 'resume';
            paused = !paused;
            }
        });
    const submit = document.getElementById('submit');
    const commentInput = document.getElementById('comment-input');
    
    submit.addEventListener('click', function() {
       let btn = document.createElement('li');
       btn.innerHTML = commentInput.value;
       document.body.appendChild(btn);
       commentInput.value = '';
        })
    })
