const form = document.querySelector('form');

form.addEventListener('input', (event) =>{
    console.log(event.target.value);
});

form.addEventListener('change', (event) =>{
    console.log(event.target.value);
});

form.addEventListener('focusin', (event) =>{
    console.log(event.target.value);
});

form.addEventListener('focusout', (event) =>{
    console.log(event.target.value);
});

form.addEventListener('click', () =>{
    console.log("single click");
});

form.addEventListener('dbclick', () =>{
    console.log("double click");
});

form.addEventListener('submit', (event) =>{
    console.log(event.target.value);
});

form.addEventListener('reset', (event) =>{
    console.log(event.target.value);
    console.log("form reseted");
});

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    const first = document.getElementById("first");
    console.log(first.value);

    const second = document.getElementById("second");
    console.log(second.value);

    const third = document.getElementById("third");
    console.log(third.value);

    const data = new FormData(form);
    console.log(data);

    event.preventDefault();

    const result = document.getElementById("result");
    result.innerText = `First: ${first.value}, Second: ${second.value}, Third: ${third.value}`;

    ddocument.body.appendChild(result);
});





    