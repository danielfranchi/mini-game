import arcadeKidMusic from "../assets/sounds/arcade_kid.mp3";
import retroFunkMusic from "../assets/sounds/retro_funk.mp3";
import correctPingTone from "../assets/sounds/correct_ping_tone.mp3";
import alertError from "../assets/sounds/alert_error.mp3";

const availableMusics = [arcadeKidMusic, retroFunkMusic];
let lastPlayedAudio: HTMLAudioElement | null = null;
let musicIndices: number[] = [];
let currentMusicIndex: number = 0;

const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const playNextMusic = () => {
  if (musicIndices.length === 0 || currentMusicIndex >= musicIndices.length) {
    musicIndices = Array.from({ length: availableMusics.length }, (_, i) => i);
    shuffleArray(musicIndices);
    currentMusicIndex = 0;
  }

  if (lastPlayedAudio) {
    lastPlayedAudio.pause();
    lastPlayedAudio.currentTime = 0;
  }

  const audio = new Audio(availableMusics[musicIndices[currentMusicIndex]]);
  audio.volume = 0.2;
  audio.play();
  lastPlayedAudio = audio;

  currentMusicIndex++;
};

export const stopMusic = () => {
  if (lastPlayedAudio) {
    lastPlayedAudio.pause();
    lastPlayedAudio.currentTime = 0;
  }
};

export const playLastMusic = () => {
  if (lastPlayedAudio) {
    lastPlayedAudio.play();
  }
};

export const playCorrectSound = () => {
  const audio = new Audio(correctPingTone);
  audio.volume = 1.0;
  audio.play();
};

export const playWrongSound = () => {
  const audio = new Audio(alertError);
  audio.volume = 1.0;
  audio.play();
};
