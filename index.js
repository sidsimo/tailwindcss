const cards1 = document.getElementById("cards1");
const cards2 = document.getElementById("cards2");
const cards3 = document.getElementById("cards3");
const cards4 = document.getElementById("cards4");
const btn = document.getElementById("btn");
const btnx = document.getElementById("btnx");
const points = document.getElementById("points");
const x = document.getElementById("x");
const hidshow = document.getElementById("hidshow");
btn.addEventListener("click" , function () {
});
points.onclick = function() {
    hidshow.style.display = "block";
}
x.onclick = function() {
    hidshow.style.display = "none";
}
window.scroll({
    behavior : "smooth"
});

btn.onclick = function () {
    cards3.style.display = "flex";
    cards4.style.display = "flex";
    btn.style.display = "none";
    btnx.style.display = "block";
}
btnx.onclick = function () {
    cards3.style.display = "none";
    cards4.style.display = "none";
    btnx.style.display = "none";
    btn.style.display = "block";
}