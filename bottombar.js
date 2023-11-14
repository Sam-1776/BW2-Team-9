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

let link = document.getElementById("myLink");
let icon = document.getElementById("myIcon");
let isIconGreen = false;

link.addEventListener("click", function (event) {
  event.preventDefault();

  icon.classList.toggle("green", !isIconGreen);
  isIconGreen = !isIconGreen;
});

let loopLink = document.getElementById("loopLink");
let loopIcon = document.getElementById("loopIcon");
let isLoopIconGreen = false;

loopLink.addEventListener("click", function (event) {
  event.preventDefault();

  loopIcon.classList.toggle("green", !isLoopIconGreen);
  isLoopIconGreen = !isLoopIconGreen;
});

let dotLink = document.getElementById("myLink");
let dotIcon = document.getElementById("myIcon");
let dot = document.getElementById("dot");
let isTheDotThere = false;

dotLink.addEventListener("click", function (event) {
  event.preventDefault();

  dotIcon.classList.toggle("green", !isTheDotThere);

  if (!dot) {
    dot = document.createElement("div");
    dot.className = "dot";
    document.body.appendChild(dot);
  }

  dot.style.display = isTheDotThere ? "none" : "block";

  isTheDotThere = !isTheDotThere;
});

let dotLoopLink = document.getElementById("loopLink");
let dotLoopIcon = document.getElementById("loopIcon");
let dotLoop = document.getElementById("secondDot");
let counter = document.getElementById("counter");
let clickCount = 0;

dotLoopLink.addEventListener("click", function (event) {
  event.preventDefault();

  if (clickCount % 4 === 0) {
    dotLoopIcon.classList.remove("green");
  } else {
    dotLoopIcon.classList.add("green");
  }
  dotLoop.style.display = clickCount % 4 === 1 ? "block" : "none";
  counter.style.display = clickCount % 4 === 2 ? "block" : "none";

  if (clickCount % 4 === 2) {
    counter.textContent = "1";
  } else {
    counter.textContent = "";
  }

  clickCount = (clickCount + 1) % 4;
});
