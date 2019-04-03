import Tone from "tone";

export const audioContext = Tone.context;
export const destination = audioContext.createMediaStreamDestination();
export const recorder = new MediaRecorder(destination.stream);

