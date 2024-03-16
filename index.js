console.log("Hello World!");


var greenbutton = document.getElementById("green");
console.log(greenbutton);

greenbutton.addEventListener('click', callAlert);
greenbutton.addEventListener('mouseout', green);

function callAlert() {
    alert("Hello people!");
    greenbutton.innerHTML = "I got clicked";
}

function greent() {
    greenbutton.innerHTML = "green button";
}