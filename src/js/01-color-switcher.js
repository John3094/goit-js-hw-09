
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
};

refs.start.addEventListener('click', createColor);
refs.stop.addEventListener('click', stopCreateColor);

let interval = false;
let timerId = null;

function createColor()  {
    if (interval) {
        return;
    } else {
        timerId = setInterval(() => {
            refs.body.style.backgroundColor  = getRandomHexColor();
        }, 1000);
        interval = true;
    };
};

function stopCreateColor() {
    interval = false;
    clearInterval(timerId);
};
