
const dots = document.querySelectorAll(".dot-container button");
const images = document.querySelectorAll(".image-container img");

let j = dots.length;
let i = 1;

function prev(){
    document.getElementById(`content${i}`).classList.remove("active");
    i === 1 ? i= j : i--;
    document.getElementById(`content${i}`).classList.add("active");
    indicator(i)
    return i;
    
}
function next(){
    document.getElementById(`content${i}`).classList.remove("active");
    i < j ? i++ : i = 1;
    document.getElementById(`content${i}`).classList.add("active");
    indicator(i)
    return i;
}

function indicator(num) {
    dots.forEach(dot => {
        dot.style.backgroundColor = "transparent"
    })
    document.querySelector(`.dot-container button:nth-child(${num})`).style.backgroundColor = "#076bb8"
}

function dot(index){
    images.forEach(image => {
        image.classList.remove("active");
    });
    document.getElementById(`content${index}`).classList.add("active");
    indicator(index)
}
