const cols = document.querySelectorAll('.col');

// function generateRandomColor() {
//     const hexCodes = '0123456789ABCDEF';
//     let color = '';
//     for (let i = 0; i < 6; i++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
//     }
//     return `#${color}`
// }

document.addEventListener('keydown', event => {
    event.preventDefault();
   if( event.code.toLocaleLowerCase() === 'space'){
       setRandomColors()
   }
})

document.addEventListener('click', e => {
    const button = e.target.closest('button[data-type="lock"]');
    if (!button) return;

    const icon = button.querySelector('i');
    icon.classList.toggle('fa-lock-open');
    icon.classList.toggle('fa-lock');
})

function setRandomColors() {
    cols.forEach((col) => {
        const isLoced = col.querySelector('i').classList.contains('fa-lock');
        const text = col.querySelector('h2');
        const btn = col.querySelector('button');
        const color = chroma.random() //generateRandomColor();

        if(isLoced) return;

        text.textContent = color;
        col.style.background = color;

        setTextColor(text, color);
        setTextColor(btn, color);
    })
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
}

setRandomColors()
