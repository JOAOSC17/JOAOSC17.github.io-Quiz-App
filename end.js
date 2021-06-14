const username = document.querySelector('#usename');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = document.querySelector('#mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScore')) || []
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;
username.addEventListener('keyup', ()=>{
    saveScoreBtn.disabled = !username.nodeValue;
})
saveHighScore = e =>{
    e.preventDefault();
    const score ={
        score:mostRecentScore,
        name:username.value,
    }
    highScores.push(score)
    highScores.sort((a,b)=> {
        return b.score - a.score;
    })
    highScores.splice(5);
    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
}