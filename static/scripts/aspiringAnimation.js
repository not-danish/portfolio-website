var aspiringText = document.getElementById('aspiring_text');

var texts = [
    'Aspiring Data Scientist',
    'Building with Gen AI',
    'Making Data Make Sense',
    'From Raw Data to Real Impact',
    'Curious. Analytical. Creative.'
];

var currentIndex = 0;

function updateText() {
    aspiringText.classList.add('opacity-0');

    setTimeout(function() {
        aspiringText.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length;
        aspiringText.classList.remove('opacity-0');
    }, 1000);
}

updateText();
setInterval(updateText, 4000);
