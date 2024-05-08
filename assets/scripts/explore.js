// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechSynth = window.speechSynthesis;
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const smileyImage = document.querySelector('#explore img');

  // Function to populate the list of voices
  function loadVoices() {
    const availableVoices = speechSynth.getVoices();
    voiceSelect.innerHTML = availableVoices.map(voice => {
      let label = `${voice.name} (${voice.lang})`;
      if (voice.default) label += ' — DEFAULT';
      return `<option value="${voice.name}" data-lang="${voice.lang}">${label}</option>`;
    }).join('');
  }

  // Load voices immediately if available or after they are loaded
  if (speechSynth.onvoiceschanged !== undefined) {
    speechSynth.onvoiceschanged = loadVoices;
  }
  loadVoices();  // Initial call to populate voices

  // Function to speak text
  function speakText() {
    if (textInput.value.trim() !== '') {
      const utterance = new SpeechSynthesisUtterance(textInput.value);
      const selectedVoiceName = voiceSelect.value;
      utterance.voice = speechSynth.getVoices().find(voice => voice.name === selectedVoiceName);
      utterance.onend = () => {
        console.log('Finished speaking.');
        smileyImage.src = "assets/images/smiling.png"; // Reset image after speaking
      };

      speechSynth.speak(utterance);
      smileyImage.src = "assets/images/smiling-open.png"; // Change image when speaking
    }
  }

  // Setup event listener for the button
  speakButton.addEventListener('click', speakText);
}