// Get the element containing the text
var aspiringText = document.getElementById('aspiring_text');
    
// Array of texts to cycle through
var texts = ['Driven by Insights', 'Crafting Stories with Data', 'Aspiring Data Scientist']; // Add more texts as needed

// Index to keep track of the current text
var currentIndex = 0;

// Function to update the text
function updateText() {
    // Fade out the text
    aspiringText.classList.add('opacity-0');
    
    // Set a timeout to change the text after the fade out animation completes
    setTimeout(function() {
        // Change the text content
        aspiringText.textContent = texts[currentIndex];
        
        // Increment the index or reset to 0 if at the end of the array
        currentIndex = (currentIndex + 1) % texts.length;
        
        // Fade in the new text
        aspiringText.classList.remove('opacity-0');
    }, 1000); // Change 1000 to match the duration of the fade out animation
}

// Initial call to start the loop
updateText();

// Set an interval to continuously update the text
setInterval(updateText, 4000); // Change 3000 to the desired interval in milliseconds