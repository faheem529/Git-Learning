const quotes = [
  "First, solve the problem. Then, write the code.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "Experience is the name everyone gives to their mistakes.",
  "Clean code always looks like it was written by someone who cares.",
  "Programming isn’t about what you know; it’s about what you can figure out.",
  "Every great developer you know started as a beginner.",
  "Code never lies, comments sometimes do.",
  "The best error message is the one that never shows up.",
  "Talk is cheap. Show me the code.",
  "Programming is not about typing, it’s about thinking.",
  "Your body can stand almost anything. It’s your mind you have to convince.",
  "Discipline is choosing between what you want now and what you want most.",
  "Sweat is just fat crying.",
  "A one-hour workout is just 4% of your day. No excuses.",
  "Push yourself, because no one else is going to do it for you.",
  "Success is the sum of small efforts repeated day in and day out.",
  "Don’t count the days, make the days count.",
  "Dream big, start small, act now.",
  "Opportunities don’t happen, you create them.",
  "Consistency beats intensity every single time."
];

function generateQuote(){
    const text = document.getElementById("quote");
    const index = Math.floor(Math.random()*quotes.length);
    text.textContent = quotes[index];
}
setInterval(generateQuote,2000);

const button = document.querySelector("button");
button.addEventListener('click',()=>{
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];
}) 

document.addEventListener('keydown',()=>{
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];

})
 
document.addEventListener('keydown',(event)=>{
  console.log(event.key);
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];

})

document.addEventListener('keydown',(event)=>{
  if(event.key === 'Enter'){
    const text = document.getElementById("quote");
    const index = Math.floor(Math.random()*quotes.length);
    text.textContent = quotes[index];
  }
})

// const button = document.querySelector("button");
button.addEventListener('click',(event)=>{
  console.log(event.target);
  console.log(event.type);
  console.log(event.clientX);
  console.log(event.clientY);
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];
})