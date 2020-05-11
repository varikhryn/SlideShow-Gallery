let arrImg = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
let divMin = document.querySelector('.div-12-min');



divMin.addEventListener('touchstart', setElement);

function setElement() {
    for (let item of divMin.children) {
        item.classList.remove('active-img');
    };

    event.target.classList.add('active-img');
    console.log(event.target.attributes.src.nodeValue);
    let bigImg = document.querySelector('.img-12-max');
    bigImg.removeAttribute('src');
    bigImg.setAttribute('src', `${event.target.attributes.src.nodeValue}`)
}
