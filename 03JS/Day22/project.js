document.body.addEventListener('click', (event) =>{
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.textContent = "Hi";
    const x = event.clientX;
    const y = event.clientY;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    circle.style.backgroundColor = randomColor;
    document.body.appendChild(circle);
});