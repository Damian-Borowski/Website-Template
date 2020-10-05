/* Hamburger Menu */

let pushBtn = () => {
        let Btn = document.querySelector(".hamburger");
        let MenuList = document.querySelector(".hamburger-menu");
        MenuList.classList.toggle("hidden");
}

/* Slider */

let imageBg = document.querySelector(".slider");
let titleSlide = document.querySelector(".title");
let contentSlide = document.querySelector(".content");

slides = [
        "url('image/slide-1.jpg')",
        "url('image/slide-2.jpg')",
        "url('image/slide-3.jpg')"
];

title = [
        "Zainspiruj się odkrywacjąc swoje korzenie!",
        "Tekst 2",
        "Tekst 3"
]

textContent = [
        "Chcesz poznać swoją historię? Ciekawość to dobry kierunek aby poznać własnych przodków! Stwórz z nami swoje drzewo genealogiczne!",
        "Opis 2",
        "opis 3"
]

let timer = 5000;
let active = 0;

changeBg = () => {
        active++;
        if ( active === slides.length ){
                active = 0;
        }
        imageBg.style.backgroundImage = slides[active];
        titleSlide.textContent = title[active];
        contentSlide.textContent = textContent[active];
}


setInterval(changeBg, timer);

/* Move background slider */
