var bar=document.getElementById('bar');
var nav =document.getElementById('navbar');

bar.addEventListener('click', function () {
    nav.style.display = 'initial'
})


var close=document.getElementById('close');
close.addEventListener('click', function () {
    nav.style.display = 'none'
})


///////singie pro////// 
var min=document.getElementById('minIMG');
var smallimg=document.getElementsByClassName('sallIMG');

smallimg[0].onclick=function(){
min.src=smallimg[0].src;
};
smallimg[1].onclick=function(){
 min.src=smallimg[1].src;
 console.log("2222")
};
smallimg[2].onclick=function(){
min.src=smallimg[2].src;
};
smallimg[3].onclick=function(){
 min.src=smallimg[3].src;
};        