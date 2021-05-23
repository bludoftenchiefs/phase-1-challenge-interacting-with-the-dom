'use strict';
document.addEventListener('DOMContentLoaded', () => {    
    
    const counter = document.getElementById('counter'); 

    setInterval(function(){
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

    heart.addEventListener('click', function(like){
    
    })


})

//              heart.addEventListener("click",function(){
//                     var a=document.getElementById("counter"),
//                     b=parseInt(a.innerText),c=document.querySelector(".likes"),
//                     d=void 0;if([].concat(_toConsumableArray(c.children)).map(function(a){
//                         return parseInt(a.dataset.num)}).includes(b))
//                         {d=document.querySelector('[data-num="'+b+'"]');
//                         var e=parseInt(d.children[0].innerText);
//                         d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"}
//                         else(d=document.createElement("li")).setAttribute("data-num",b),
//                         d.innerHTML=b+" has been liked <span>1</span> time",
//                         c.appendChild(d)}),
//             pause.addEventListener("click",function(){
//                          playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),
//                           this.innerText="pause"),
//                           [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a)
//                             {"pause"!==a.id&&(a.disabled=!playing)})}),
//             commentForm.addEventListener("submit",function(a)
//                             {a.preventDefault();
//                                 var b=this.children[0],c=b.value;b.value="";
//                                 var d=document.querySelector(".comments"),e=document.createElement("p");e.innerText=c,d.appendChild(e)});