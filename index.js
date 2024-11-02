const cards3 = document.getElementById("cards3");
const cards4 = document.getElementById("cards4");
const btn = document.getElementById("btn");
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
document.body.scroll({
    behavior : "smooth"
});