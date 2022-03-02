let clickCount = 0;
const btnClick = document.getElementById('btn-count');
const disp = document.getElementById('display');

const sumClick = () => {
        clickCount = clickCount += 1;
        console.log((clickCount));
        disp.innerHTML = clickCount;
}
btnClick.addEventListener('click', sumClick);
