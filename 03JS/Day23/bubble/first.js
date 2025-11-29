const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandParent.addEventListener('click', (event) => {
    console.log('Grandparent clicked - Capturing Phase');
    console.log(event.target);
    console.log(event.currentTarget);
}, true);

parent.addEventListener('click', () => {
    console.log('Parent clicked - Capturing Phase');
    console.log(event.target);
    console.log(event.currentTarget);
}, true);

child.addEventListener('click', () => {
    console.log('Child clicked - Capturing Phase');
    console.log(event.target);
    console.log(event.currentTarget);
}, true);

