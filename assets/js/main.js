

const toggle = document.querySelector('.toggle');
const moon = document.querySelector('.toggle>div');
const idsky = document.querySelector('#sky');
const stars = document.querySelectorAll('#sky>div');
const holes = document.querySelectorAll('.toggle>div>div')
const goodm = document.querySelector('#sky>span:nth-of-type(2)')
const goodn = document.querySelector('#sky>span:nth-of-type(1)')

console.log(toggle);
console.log(moon);
console.log(idsky);
console.log(stars)


toggle.addEventListener('click',() => {

    moon.classList.toggle('day');
    idsky.classList.toggle('sky');

    stars.forEach((star) => {

        star.classList.toggle('starnone')

    })

    holes.forEach((hole) => {

        hole.classList.toggle('holenone');


    })

    goodm.classList.toggle('goodmorning');
    goodn.classList.toggle('goodnight');





    
})