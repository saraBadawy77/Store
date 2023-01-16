var bar=document.getElementById('bar');
var nav =document.getElementById('navbar');

bar.addEventListener('click', function () {
    nav.style.display = 'initial'
})


var close=document.getElementById('close');
close.addEventListener('click', function () {
    nav.style.display = 'none'
})