var sounds = [("/Aufgabe8/assets/A.mp3"), ("./assets/C.mp3"), ("./assets/F.mp3"), ("./assets/G.mp3"),
    ("./assets/hihat.mp3"), ("./assets/kick.mp3"), ("./assets/laugh-1.mp3"), ("./assets/laugh-2.mp3"),
    ("./assets/snare.mp3")];
window.addEventListener("load", addClickListenersDrumPad);
function playSample(DrumPadSound) {
    var sound = new Audio(DrumPadSound);
    sound.play();
}
function addClickListenersDrumPad() {
    document.querySelector("#btn1").addEventListener("click", function () { playSample(sounds[0]); });
    document.querySelector("#btn2").addEventListener("click", function () { playSample(sounds[1]); });
    document.querySelector("#btn3").addEventListener("click", function () { playSample(sounds[2]); });
    document.querySelector("#btn4").addEventListener("click", function () { playSample(sounds[3]); });
    document.querySelector("#btn5").addEventListener("click", function () { playSample(sounds[4]); });
    document.querySelector("#btn6").addEventListener("click", function () { playSample(sounds[5]); });
    document.querySelector("#btn7").addEventListener("click", function () { playSample(sounds[6]); });
    document.querySelector("#btn8").addEventListener("click", function () { playSample(sounds[7]); });
    document.querySelector("#btn9").addEventListener("click", function () { playSample(sounds[8]); });
    document.querySelector(".playbtn").addEventListener("click", function () { playBeat(); });
}
//lol
var Beat = [sounds[4], sounds[5], sounds[8]];
var rhythm = 1;
function playBeat() {
    setInterval(function () {
        playSample(Beat[rhythm]);
        rhythm++;
        if (rhythm == 4) {
            rhythm = 0;
        }
    }, 300);
}
//# sourceMappingURL=Aufgabe8.js.map