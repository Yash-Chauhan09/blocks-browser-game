let block = document.getElementById('block');
let blocked = document.getElementById('blocked');
let counter = 0;
    block.addEventListener('animationiteration',()=>{
    let random = Math.floor(Math.random()*4);
    left = random * 90;
    block.style.left = left + 'px';
    counter++;
    });
    blocked.addEventListener('animationiteration',()=>{
    let random = Math.floor(Math.random()*4);
    left = random * 90;
    blocked.style.left = left + 'px';
    // counter++;
    });
function moveleft(){
let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
left -= 90;
if(left>=0){
character.style.left = left + 'px'}
}
function moveright(){
let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
left += 90;
if(left<350){
character.style.left = left + 'px'}
}
document.addEventListener('keydown',(e)=>{
    if(e.key==="ArrowLeft"){
        moveleft();
    }
    if(e.key==="ArrowRight"){
        moveright();
    }
});
          
setInterval(() => {
    let characterleft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    let blockleft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blocktop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
   if(characterleft===blockleft && blocktop<600 && blocktop>400){
       alert('Game Over ' + 'Score :' +counter);
       counter = 0;
    //    block.style.animation = none;
   }
}, 10);
setInterval(() => {
    let characterleft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    let blockedleft = parseInt(window.getComputedStyle(blocked).getPropertyValue('left'));
    let blockedtop = parseInt(window.getComputedStyle(blocked).getPropertyValue('top'));
   if(characterleft===blockedleft && blockedtop<600 && blockedtop>300){
       alert('Game Over ' + 'Score :' +counter);
       counter = 0;
//        blocked.style.animation = none;
   }
}, 10);
document.getElementById("left").addEventListener('touchstart', moveleft);
document.getElementById("right").addEventListener('touchstart', moveright);