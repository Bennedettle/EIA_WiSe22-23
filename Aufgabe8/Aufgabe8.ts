var sounds: string[] = [("./assets/A.mp3"), ("./assets/C.mp3"), ("./assets/F.mp3"), ("./assets/G.mp3"),
("./assets/hihat.mp3"), ("./assets/kick.mp3"), ("./assets/laugh-1.mp3"), ("./assets/laugh-2.mp3"),
("./assets/snare.mp3")];

window.addEventListener("load", addClickListenersDrumPad);

function playSample(DrumPadSound: string): void {
    var sound: HTMLAudioElement = new Audio(DrumPadSound);
    sound.play();
}

function addClickListenersDrumPad(): void {

    document.querySelector("#btn1").addEventListener("click", function (): void { playSample(sounds[0]); });
    document.querySelector("#btn2").addEventListener("click", function (): void { playSample(sounds[1]); });
    document.querySelector("#btn3").addEventListener("click", function (): void { playSample(sounds[2]); });
    document.querySelector("#btn4").addEventListener("click", function (): void { playSample(sounds[3]); });
    document.querySelector("#btn5").addEventListener("click", function (): void { playSample(sounds[4]); });
    document.querySelector("#btn6").addEventListener("click", function (): void { playSample(sounds[5]); });
    document.querySelector("#btn7").addEventListener("click", function (): void { playSample(sounds[6]); });
    document.querySelector("#btn8").addEventListener("click", function (): void { playSample(sounds[7]); });
    document.querySelector("#btn9").addEventListener("click", function (): void { playSample(sounds[8]); });
    document.querySelector("#playbtn").addEventListener("click", function (): void { PlayBeat(); });
    document.querySelector("#remixbtn").addEventListener("click", function (): void { Remix(); });
}
//lol

var Beat: string[] = [sounds[4], sounds[5], sounds[8]];

var rhythm: number = 1;

function PlayBeat(): void {
    setInterval(function (): void {
        playSample(Beat[rhythm]);
        rhythm++;
        if (rhythm == 4) {
            rhythm = 0;
        }
    }, 300);






    if (document.getElementById("playbtn").classList.contains("fa-play")) {
        document.getElementById("playbtn").classList.remove("fa-play");
        document.getElementById("playbtn").classList.add("fa-stop");

    }
    else {
        document.getElementById("playbtn").classList.remove("fa-stop");
        document.getElementById("playbtn").classList.add("fa-play");

    }

}

var beatremix: number;

function Remix(): void {


    document.querySelector("#remixbtn").addEventListener("click", function (): void {

        beatremix = setInterval(function (): void {
            playSample(Beat[rhythm]);
            rhythm = Math.floor(Math.random() * 6);
        },
            300);
    });

}