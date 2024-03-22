// array for the audio
const sounds = ['Ah-Ha','Back of the net','Bang out of order','Dan',
    'Email of the evening','Hello partridge','I ate a scotch egg',"I'm confused"
];

// to loop through the array for creating button
sounds.forEach((sound, order) =>{
    const btn = document.createElement('button'); //to create button
    btn.classList.add('btn'); //to create a class for styling

    btn.innerText = `${order + 1}. ${sound}`; //to show the text in button listed in the array

    btn.addEventListener('click', () => { //when clicked it plays the sound
        stopSongs(); //calling function
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})  

//this function stops the audio from playing so that it does not overlap with another audio when pressed
function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound) //sound that is currently playing

        song.pause() //pauses the current audio as there is no stop
        song.currentTime = 0; //resets the paused audio to 0
    })

}