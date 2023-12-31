function playSound(e){
    //console.log(e);
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // if there is no such audio stop the function from running all together
    audio.currentTime = 0; // rewind to the start
    audio.play();
    //console.log(key);
    key.classList.add('playing');
}

function removeTransition(e){
    // console.log(e);
    if(e.propertyName !== 'transform') return; // skip if it is not a transform
    // console.log(e.propertyName);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
