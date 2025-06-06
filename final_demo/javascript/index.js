let x = 0;
function openSidebar() {
    const sidebar = document.getElementById("sidebar");
    const opener = document.getElementById("opener") || document.querySelector(".colsier");

    if (x === 0) {
        sidebar.style.width = "250px";
        opener.style.color = "white";
        x = 1;
    } else {
        sidebar.style.width = "0";
        opener.style.color = "black";
        x = 0;
    }
}

let y=0
function movies() {
    if (y==0) {
        document.getElementById("mo").innerText = "My favorite movie is Mission Impossible, as it is very action-packed. Overall, I find action movies to be very engaging as they are fast paced and you don't get bored in them... except for in cut scenes. Another movie that I liked was Oceans 11, which is a movie about a man who recruits a team to rob a casino vault.";
        y=1
    }
    else {
        document.getElementById("mo").innerText = "";
        y=0
    }
}

let w=0
function food() {
    if (w==0) {
        document.getElementById("fo").innerText = "My favorite food in sarma, it is a turkish food that has two different was of making it, and both versions are eaten in different ways at different times. The first, my favorite, is stuffed with meat and rice, while the other way of making it consists of rice and is usually eaten cold and as a snack, unlike the other version, which is eaten warm and as a meal. Both versions are wrapped with the leaves of a maple tree, and both are very delicious. I definitely recommend you try them.";
        w=1
    }
    else {
        document.getElementById("fo").innerText = "";
        w=0
    }
}

let z=0
function sports() {
    if (z==0) {
        document.getElementById("sp").innerText = "My favorite sport to play is squash, and I have been playing it for a while now. It is engaging and fast-paced. While keeping the primary qualities of racket sports that I like, it adds an engaging touch because of the pacing and the way the court is designed. The shirts that you get from tournaments aren't half bad either.";
        z=1
    }
    else {
        document.getElementById("sp").innerText = "";
        z=0
    }
}

let g=0
function hobbies() {
    if (g==0) {
        document.getElementById("ho").innerText = "My favorite hobby is art. Even though I am not the best at it, for the past few months I have been trying to learn how to draw anime characters and also learning anatomy along with that to further improve my skills, and I have been making steady progress so far.";
        g=1
    }
    else {
        document.getElementById("ho").innerText = "";
        g=0
    }
}