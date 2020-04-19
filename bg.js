const body = document.querySelector("body");

const IMG_NUMBER = 3 ;

function handleLoad(event){

}

function printImage(imgNumber){
    const image = new Image();
    image.src = `./images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    image.addEventListener("loadend", handleLoad);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    printImage(randomNumber);
}

init();