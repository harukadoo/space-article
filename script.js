let menuBtn =  document.querySelector('.menu__button');
let menu = document.querySelector('.burger__menu');

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
})



function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('active');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.animation-block');

for (let elm of elements) {
  observer.observe(elm);
}

let option = {
  threshold: [0.5] };
let observers = new IntersectionObserver(onEntry, option);
let element = document.querySelectorAll('.animation-block1');

for (let elm of element) {
  observers.observe(elm);
}