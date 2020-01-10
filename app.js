const allDrumBoxesEls = document.querySelectorAll(".drum-box");

function playSound(audio) {
    audio.currentTime = 0; // rewind the audio from the start
    audio.play();
}

function addClass(el, className) {
    el.classList.add(className);
}

window.addEventListener("keypress", function (evt) {
    const $target = evt.target;
    const curAudioEl = document.querySelector(`audio[data-key=${evt.key}]`);
    const curDrumBox = document.querySelector(`.drum-box[data-key=${evt.key}]`);

    if (!curAudioEl) return;

    playSound(curAudioEl);
    addClass(curDrumBox, "transform-box");

});

function removeClass(el, className) {
    el.classList.remove(className);
}

// On transition end, remove the class from the element
allDrumBoxesEls.forEach(box => {
    box.addEventListener("transitionend", function (evt) {

        if (evt.propertyName === "transform") {
            removeClass(evt.target, "transform-box");
        }
    })
});
