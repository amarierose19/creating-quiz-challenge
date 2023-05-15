const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highscore")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    saveScoreBtn.disable = !username.value;
});

saveHighScore = e => {
    console.log("click the saved button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    
    highScores.sort( (a,b) => b.score - a.score);
   
    highScores.splice(5);

    localStorage.setItem('highscore', JSON.stringify(highScores));
    window.location.assign('/');
    
};