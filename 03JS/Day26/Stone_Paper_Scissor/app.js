(function(){
  const moves = ['rock','paper','scissor'];
  const beat = { rock:'scissor', paper:'rock', scissor:'paper' };

  const buttons = [...document.querySelectorAll('.option-btn')];
  const playerScoreEl = document.getElementById('playerScore');
  const computerScoreEl = document.getElementById('computerScore');
  const roundNumEl = document.getElementById('roundNum');
  const resultEl = document.getElementById('result');
  const historyEl = document.getElementById('history');
  const resetBtn = document.getElementById('resetBtn');
  const bestOfSelect = document.getElementById('bestOf');
  const bestOfLabel = document.getElementById('bestOfLabel');
  const autoPlayBtn = document.getElementById('autoPlay');

  let playerScore = 0, computerScore = 0, rounds = 0;
  let bestOf = +bestOfSelect.value;
  let autoPlayInterval = null;

  function rand(){return moves[Math.floor(Math.random()*3)]}
  function updateUI(){
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    roundNumEl.textContent = rounds;
  }
  function logRound(t,c){
    const div=document.createElement("div");
    div.textContent=t;
    historyEl.prepend(div);
    if(historyEl.childElementCount>12)historyEl.lastChild.remove()
  }
  function endMatch(){
    const txt = playerScore>computerScore ?
      `🎉 You won ${playerScore}-${computerScore}` :
      playerScore<computerScore ?
      `😢 Computer won ${computerScore}-${playerScore}` :
      `🤝 It's a tie`;
    resultEl.textContent = txt;
    logRound(txt);
    if(autoPlayInterval){clearInterval(autoPlayInterval);autoPlayInterval=null;autoPlayBtn.textContent="Auto Play ✨"}
  }

  function play(move){
    const c = rand(); rounds++;
    const res = move===c?"tie":beat[move]===c?"win":"lose";
    if(res==="win")playerScore++; else if(res==="lose")computerScore++;
    updateUI();
    resultEl.textContent = res==="win" ? `You Win! ${move} beats ${c}` :
                          res==="lose"? `You Lose! ${c} beats ${move}` :
                          `It's a Tie!`;

    logRound(`Round ${rounds}: You ${move} vs ${c} → ${res.toUpperCase()}`);

    const target = Math.ceil(bestOf/2);
    if(playerScore>=target || computerScore>=target || rounds>=bestOf) endMatch();
  }

  buttons.forEach((btn,i)=>{
    btn.onclick=()=>play(btn.dataset.move);
  });

  window.onkeydown=e=>{
    if(e.key==="1")buttons[0].click();
    if(e.key==="2")buttons[1].click();
    if(e.key==="3")buttons[2].click();
  };

  resetBtn.onclick=()=>{
    playerScore=computerScore=rounds=0;
    resultEl.textContent="Make your move!";
    historyEl.innerHTML="";
    updateUI();
  };

  bestOfSelect.onchange=()=>{
    bestOf=+bestOfSelect.value;
    bestOfLabel.textContent=bestOf;
    resetBtn.click();
  };

  autoPlayBtn.onclick=()=>{
    if(autoPlayInterval){
      clearInterval(autoPlayInterval);
      autoPlayInterval=null;
      autoPlayBtn.textContent="Auto Play ✨";
      return;
    }
    autoPlayBtn.textContent="Stop Auto";
    autoPlayInterval=setInterval(()=>buttons[Math.floor(Math.random()*3)].click(),900);
  };

  updateUI();
})();