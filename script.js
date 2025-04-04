document.addEventListener("DOMContentLoaded", () => {
    const cat = document.getElementById("cat");
    const scoreDisplay = document.getElementById("score");
    let score = 0;

    function moveCat() {
        let maxX = window.innerWidth - cat.clientWidth;
        let maxY = window.innerHeight - cat.clientHeight;

        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        cat.style.left = `${newX}px`;
        cat.style.top = `${newY}px`;
    }

    // Move the cat when clicked and update score
    cat.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        moveCat();
    });

    // Set an initial random position
    moveCat();
});
