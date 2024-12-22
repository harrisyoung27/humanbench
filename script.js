let reaction = document.querySelector("#reaction");
let [miliseconds, seconds] = [0, 0];
timer = null;
milisecondTimer = null;
let random;

function miliSeconds() {
    miliseconds++;
}

function greenBackground(){
    reaction.style.background = "green";
    reaction.innerHTML = "Click now!!";
    if (milisecondTimer !== null) {
        clearInterval(milisecondTimer);
        miliseconds = 0;
    }
    milisecondTimer = setInterval(miliSeconds, 1);
}

function randomizer() {
    if (timer !== null) {
        clearInterval(timer);
    }
    random = Math.floor(Math.random() * 3000 + 5000);
    timer = setInterval(greenBackground, random);
}

reaction.addEventListener("click", event => {
    if (reaction.style.background == "green") {
        reaction.innerHTML = "Reaction Speed: " + miliseconds + "ms";
        reaction.style.background = "white";
        reaction.style.color = "green";
        clearInterval(timer);
        clearInterval(milisecondTimer);
    } else {
        reaction.innerHTML = "Too Fast!! Try Again and Re-Hover your cursor here.";
        reaction.style.background = "white";
        reaction.style.color = "black";
        clearInterval(timer);
        clearInterval(milisecondTimer);
    }
})

reaction.addEventListener("mouseover", event => {
    randomizer();
    reaction.style.background = "red";
    reaction.innerHTML = "Click when turned Green..";
})

reaction.addEventListener("mouseout", event => {
    clearInterval(timer);
    clearInterval(milisecondTimer);
    reaction.style.background = "white";
    reaction.innerHTML = "Try Again? Hover Here!!";
    reaction.style.color = "black";
})
