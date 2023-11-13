function toggleHeartIcon() {
  const heartIcon = document.getElementById("heartIcon");

  heartIcon.classList.toggle("green");
}

let isPlaying = false;

function togglePlayPause() {
  const playIcon = document.getElementById("playIcon");
  if (isPlaying) {
    playIcon.classList.remove("fa-pause");
    playIcon.classList.add("fa-play-circle");
  } else {
    playIcon.classList.remove("fa-play-circle");
    playIcon.classList.add("fa-pause");
  }
  isPlaying = !isPlaying;
}

let isTheVolumeUp = true;

function toggleOnOff() {
  const volumeIcon = document.getElementById("volumeIcon");
  if (isTheVolumeUp) {
    volumeIcon.classList.remove("fa-volume-mute");
    volumeIcon.classList.add("fa-volume-up");
  } else {
    volumeIcon.classList.remove("fa-volume-up");
    volumeIcon.classList.add("fa-volume-mute");
  }
  isTheVolumeUp = !isTheVolumeUp;
}
