// Get DOM elements
const counterDisplay = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const increaseBtn = document.getElementById('increase');

// Initialize counter value
let count = 0;

// Function to update counter display and color
function updateCounter() {
    counterDisplay.textContent = count;
    
    // Add animation effect
    counterDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counterDisplay.style.transform = 'scale(1)';
    }, 200);
    
    // Update color based on value
    counterDisplay.classList.remove('positive', 'negative', 'zero');
    
    if (count > 0) {
        counterDisplay.classList.add('positive');
    } else if (count < 0) {
        counterDisplay.classList.add('negative');
    } else {
        counterDisplay.classList.add('zero');
    }
}

// Event listeners
decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        count++;
        updateCounter();
    } else if (e.key === 'ArrowDown') {
        count--;
        updateCounter();
    } else if (e.key === 'r' || e.key === 'R') {
        count = 0;
        updateCounter();
    }
});

// Initialize display
updateCounter();
