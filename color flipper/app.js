const color = ["green", "red", "rgba(133,122,200)","#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.background = color[randomNumber];
    color.textContent = color[randomNumber]
    
});

function getRandomNumber() {
    return Math.floor(Math.random() * color.length); 
}