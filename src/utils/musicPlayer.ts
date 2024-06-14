import alertError from "../assets/sounds/alert_error.mp3";
import arcadeKidMusic from "../assets/sounds/arcade_kid.mp3";
import correctPingTone from "../assets/sounds/correct_ping_tone.mp3";
import fasterMusic from "../assets/sounds/faster.mp3";
import retroFunkMusic from "../assets/sounds/retro_funk.mp3";

const availableMusics = [arcadeKidMusic, retroFunkMusic, fasterMusic];
let lastPlayedAudio: HTMLAudioElement | null = null;
let musicIndices: number[] = [];
let currentMusicIndex: number = 0;

const shuffleArray = (musicIndicesArray: number[]) => {
  for (
    let currentIndex = musicIndicesArray.length - 1;
    currentIndex > 0;
    currentIndex--
  ) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [musicIndicesArray[currentIndex], musicIndicesArray[randomIndex]] = [
      musicIndicesArray[randomIndex],
      musicIndicesArray[currentIndex],
    ];
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
  audio.addEventListener("ended", playNextMusic);
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
