
function showScore() {
    let highscore = JSON.stringify(highscores);

    window.localStorage.setItem("highscores", highscoresString); 

    const highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    const orderedlistEl = document.querySelector('#high-scores-list')

    for( let i = 0; i < highscores.length; i++) {
 
    let listItem = document.createElement("li");
 
 listItem.textContent = `${highscores[i].name} - ${highscores[i].score}`;

 orderedlistEl.appendChild(listItem);
 
 console.log(highscores)
 

};
};

showScore();

