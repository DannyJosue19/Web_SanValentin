document.getElementById('rose-button-1').addEventListener('click', () => {
    createRoses();
});
function createRoses() {
    const rosesContainer = document.getElementById('roses-container');
    for (let i = 0; i < 25; i++) {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        rose.style.left = Math.random() * 100 + 'vw';
        rose.style.animationDuration = Math.random() * 3 + 2 + 's';
        rosesContainer.appendChild(rose);

        setTimeout(() => {
            rose.remove();
        }, 40000); // Remove the rose after 4 seconds
    }
}