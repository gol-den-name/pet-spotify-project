function playAll(songNumber) {
    var audioElement = document.getElementById('song');
    var playBtn = document.getElementById('play-pause');
    var songFileName = "music/" + songNumber + ".mp3";
    var currentRow = document.getElementById("song" + songNumber);

    // remove highlight from all songs first
    document.querySelectorAll("tr.highlight").forEach(row => {
        row.classList.remove("highlight");
    });

    // if same song and currently playing → pause
    if (audioElement.getAttribute("src") === songFileName && !audioElement.paused) {
        audioElement.pause();
        playBtn.innerHTML = '<img src="images/play-button.svg">';
        return;
    }

    // otherwise play selected song
    audioElement.setAttribute("src", songFileName);
    audioElement.play();
    playBtn.innerHTML = '<img src="images/pause-button.svg">';
    currentRow.classList.add("highlight");
}

function playAudio() {
    var audio = document.getElementById("song");
    var playBtn = document.getElementById("play-pause");

    // if no song loaded, pick a random one from 1–10
    if (!audio.getAttribute("src")) {
        var randomNumber = Math.floor(Math.random() * 10) + 1;
        playAll(randomNumber);
        return;
    }

    // toggle play/pause
    if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<img src="images/pause-button.svg">';
    } else {
        audio.pause();
        playBtn.innerHTML = '<img src="images/play-button.svg">';
    }
}
