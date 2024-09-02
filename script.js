document.getElementById('confetti-button').addEventListener('click', () => {
    // Trigger the confetti effect
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // Display the message
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
});
