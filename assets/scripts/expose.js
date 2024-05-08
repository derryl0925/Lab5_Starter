// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  const hornSelect = document.getElementById("horn-select");
  const image = document.querySelector("img");
  const audio = document.querySelector("audio");
  const playButton = document.querySelector("button");
  const volumeIcon = document.querySelector("#volume-controls img");
  const volumeSlider = document.getElementById("volume");

  // Function to update the image and sound based on the horn selection
  function updateHorn() {
    const hornImages = {
      "party-horn": "party-horn.svg",
      "car-horn": "car-horn.svg",
      "air-horn": "air-horn.svg"
    };
    const hornSounds = {
      "party-horn": "party-horn.mp3",
      "car-horn": "car-horn.mp3",
      "air-horn": "air-horn.mp3"
    };

    const hornType = hornSelect.value;
    image.src = hornImages[hornType] ? `assets/images/${hornImages[hornType]}` : "assets/images/no-image.png";
    audio.src = hornSounds[hornType] ? `assets/audio/${hornSounds[hornType]}` : "";
  }

  // Function to adjust the volume icon based on slider position
  function adjustVolumeIcon(volume) {
    if (volume === 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 0.33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 0.67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  }

  // Playing sound and trigger confetti on play button click
  playButton.addEventListener("click", () => {
    audio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  // Update horn sound and image when selection changes
  hornSelect.addEventListener("change", updateHorn);

  // Adjust the volume icon and audio volume when volume slider changes
  volumeSlider.addEventListener("change", () => {
    const volumeLevel = volumeSlider.value / 100;
    audio.volume = volumeLevel;
    adjustVolumeIcon(volumeLevel);
  });
}
