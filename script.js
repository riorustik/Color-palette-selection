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
   if( event.code.toLocaleLowerCase() === 'space'){
       setRandomColors()
   }
})

function setRandomColors() {
    cols.forEach((col) => {
        const text = col.querySelector('h2');
        const btn = col.querySelector('button');

        const color = chroma.random() //generateRandomColor();

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
