const keys = document.querySelectorAll('.keys button');
const recorder = document.getElementById('record');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const channels = document.querySelectorAll('.channel');

let audioContext = new AudioContext();
let channelsData = [];

// Load sound files
const sounds = [
    { key: 65, sound: 'kick.wav' },
    { key: 83, sound: 'clap.wav' },
    { key: 68, sound: 'hihat.wav' },
    { key: 70, sound: 'boom.wav' },
    // add more sounds as needed
];

// Create audio buffers for each sound
sounds.forEach(sound => {
    fetch(`sounds/${sound.sound}`)
       .then(response => response.arrayBuffer())
       .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
       .then(audioBuffer => {
            sound.buffer = audioBuffer;
        });
});

// Add event listeners to keys
keys.forEach(key => {
    key.addEventListener('click', () => {
        playSound(key.dataset.key);
    });
});


recorder.addEventListener('click', startRecording);
playButton.addEventListener('click', playRecording);
stopButton.addEventListener('click', stopRecording);


function playSound(key) {
    const sound = sounds.find(sound => sound.key === parseInt(key));
    if (sound) {
        const source = audioContext.createBufferSource();
        source.buffer = sound.buffer;
        source.connect(audioContext.destination);
        source.start();
    }
}


function startRecording() {
    channelsData = [];
    for (let i = 0; i < 4; i++) {
        channelsData.push([]);
    }
}


function playRecording() {
    channelsData.forEach((channel, index) => {
        const source = audioContext.createBufferSource();
        source.buffer = mergeBuffers(channel);
        source.connect(audioContext.destination);
        source.start();
    });
}


function stopRecording() {
 
}


function merge(){

}