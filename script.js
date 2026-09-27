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
    const type = e.target.dataset.type;

    if(type === 'lock'){
        const node =
            e.target.tagName.toLocaleLowerCase() === 'i' ? e.target : e.target.challenge[0];
        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock');
    } else if(type === 'copy'){
        copyToClickBoard(e.target.textContent)
    }
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

function copyToClickBoard(text){
    return navigator.clipboard.writeText(text);
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
}

setRandomColors()
