document.getElementById('changeCaptionBtn').addEventListener('click', function() {
    const captions = [
        "Isn't this cat the cutest? 🐾",
        "Just another lazy day... 😴",
        "Looking for treats! 🍣",
        "Purrfection in one photo 😻",
        "This cat runs the house 🏡"
    ];

    const captionElement = document.getElementById('caption');
    const randomIndex = Math.floor(Math.random() * captions.length);
    captionElement.textContent = captions[randomIndex];
});