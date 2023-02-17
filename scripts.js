const button = document.querySelector(".button");

button.addEventListener('click', function() {
    const infoElement = document.querySelector('.info');
    infoElement.style.backgroundColor = colourGen();

});

let colourGen = function () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
