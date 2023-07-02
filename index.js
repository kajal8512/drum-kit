const arrayOfEvent = document.getElementById('set');

arrayOfEvent.addEventListener('click', (e) => {
    let target = e.target.innerHTML;
    createSound(target);
    buttonAnimation(target);
    
});
  
arrayOfEvent.addEventListener("keydown", (e) => {
    // let target = e.target.innerHTML;
    let target = e.key;
    console.log(target)
    createSound(target);
    buttonAnimation(target);
    let array = ['m','u','s','i','c','d','r']
    if(!array.includes(target)){
        alert("wrong key press");
        return;
    }
});


let currentSound = null;
const createSound = (key) =>{
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
      }

    let sound = new Audio(`sounds/${key}.mp3`);
    currentSound = sound
    sound.play();
}

const buttonAnimation = (key)=>{
    let active = document.querySelector(`#${key}`)
    if (active) {
        active.classList.add('pressed');
        setTimeout(() => {
          active.classList.remove('pressed');
        }, 1000);
      }
}