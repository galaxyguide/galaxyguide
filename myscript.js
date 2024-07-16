// myscript.js

document.addEventListener('DOMContentLoaded', function() {
  // Get the textarea element for the notepad
  const notepad = document.getElementById('notepad-content');
  
  // Load the saved content from localStorage if available
  notepad.value = localStorage.getItem('autosave');
  
  // Listen for changes in the textarea content
  notepad.addEventListener('input', function() {
    // Save the content to localStorage
    localStorage.setItem('autosave', notepad.value);
  });
  
  // Get elements for tap counter
  const countDisplay = document.getElementById('count');
  const incrementButton = document.getElementById('increment');
  const resetButton = document.getElementById('reset');
  
  // Load count from localStorage or default to 0
  let count = parseInt(localStorage.getItem('tapCount')) || 0;
  countDisplay.textContent = count;
  
  // Increment count on button click
  incrementButton.addEventListener('click', function() {
    count++;
    countDisplay.textContent = count;
    localStorage.setItem('tapCount', count);
  });
  
  // Reset count on button click
  resetButton.addEventListener('click', function() {
    count = 0;
    countDisplay.textContent = count;
    localStorage.setItem('tapCount', count);
  });
});
