var counter = 0;

function croutonCount(number){
    counter = counter + number;
    document.getElementById("counter").innerHTML = counter;
};

/*
var randY = Math.floor(Math.random() * (100+ 10));
var randX = Math.floor(Math.random() * (150+ 10));

 function croutonMove() {
    console.log("randX = ", randX);
    console.log("randY = ", randY);
    var canvas = document.getElementById("gamespace");
    var context = canvas.getContext("2d");
    var img = document.getElementById("crouton");

    context.drawImage(img, randX, randY);

}
 */
function nextClick() {
 //     croutonMove();
        croutonCount(1);
}
