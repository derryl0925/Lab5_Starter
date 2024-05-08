// explore.js

import JSConfetti from './assets/scripts/js-confetti.browser.js';

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();  // Instantiate the confetti library

  speakButton.addEventListener('click', function() {
    const text = textArea.value;
    speakText(text, voiceSelect.value);
    jsConfetti.addConfetti();  // Trigger confetti when the button is clicked
  });

  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = voice.name + ' (' + voice.lang + ')';
      option.setAttribute('value', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  // Load voices when available
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  function speakText(text, voiceName) {
    if (!speechSynthesis) {
      console.error('Speech Synthesis API is not supported in this browser.');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.name === voiceName);
    speechSynthesis.speak(utterance);
  }
}