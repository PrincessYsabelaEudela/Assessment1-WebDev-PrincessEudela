// array for the audio
const sounds = ['Ah-Ha', 'Back of the net', 'Bang out of order', 'Dan',
    'Email of the evening', 'Hello partridge', 'I ate a scotch egg', "I'm confused"
];

// to loop through the array for creating button
sounds.forEach((sound, order) => {
    const btn = document.createElement('button'); // to create button
    btn.classList.add('btn'); // to create a class for styling

    // Set innerHTML to include order number and sound name on separate lines
    btn.innerHTML = `${order + 1}.<br>${sound}`;

    btn.addEventListener('click', () => {
        stopSongs(); // calling function to stop other sounds
        document.getElementById(sound.replace(/ /g, '-')).play(); // play the selected sound
    });

    document.getElementById('buttons').appendChild(btn);
});

// this function stops the audio from playing so that it does not overlap with another audio when pressed
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound.replace(/ /g, '-')); // get the audio element

        song.pause(); // pause the audio
        song.currentTime = 0; // reset audio time to start
    });
}
