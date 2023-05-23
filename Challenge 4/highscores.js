const highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

const orderedlistEl = document.querySelector('.high-scores-list')

for( let i = 0; i < highScores.length; i++) {
 
    let listItem = document.createElement("li");
 
 listItem.textContent = `${highScores[i].name} - ${highScores[i].score}`;

 orderedlistEl.appendChild(listItem);
 
 
 

};