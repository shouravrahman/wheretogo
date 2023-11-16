// useSpeechRecognition.js

import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const startListening = () => {
   SpeechRecognition.startListening({ continuous: false });
};

const stopListening = () => {
   SpeechRecognition.stopListening();
};

export { startListening, stopListening, useSpeechRecognition };
