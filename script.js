let arrImg = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
let divMin = document.querySelector('.div-12-min');

addMinImg(divMin, arrImg);

let bigImg = document.querySelector('.img-12-max');
let count = 0;
reset();

for (let item of divMin.children) {
    item.addEventListener('touchstart', setElement);
}
document.querySelector('.next').addEventListener('touchstart', nextImg);
document.querySelector('.reset').addEventListener('touchstart', reset);
document.querySelector('.prev').addEventListener('touchstart', prevImg);

function setElement() {
    removeActiveImg();
    if (event.target.nodeName == 'IMG') {
        count = event.target.attributes['data-index-arr'].value;
        event.target.classList.add('active-img');
        setBigImg(`${event.target.attributes.src.nodeValue}`);
    }
}

function nextImg() {
    count++;
    if (count == 6) count = 0;
    setActiveImgMinMaxPrevNex();
}

function prevImg() {
    count--;
    if (count == -1) count = 5;

    setActiveImgMinMaxPrevNex();
}

function reset() {
    count = 0;
    setActiveImgMinMaxPrevNex();
}

function removeActiveImg() {
    for (let item of divMin.children) {
        item.classList.remove('active-img');
    };
}

function setBigImg(path) {
    bigImg.removeAttribute('src');
    bigImg.setAttribute('src', `${path}`);
}

function setActiveImgMinMaxPrevNex() {
    removeActiveImg();
    divMin.children[count].classList.add('active-img');
    setBigImg(`${divMin.children[count].attributes.src.value}`);
}

function addMinImg(mainBlock, arr) {
    let k = 0;
    for (let item of arr) {
        let imgMin = document.createElement('img');
        imgMin.setAttribute('src', `img/${item}`);
        imgMin.setAttribute('data-index-arr', `${k}`);
        imgMin.setAttribute('alt', `${item.split('.')[0]}`);
        imgMin.setAttribute('data-img-name', `${item}`)
        mainBlock.append(imgMin);
        k++;
    }
}
