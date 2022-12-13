let listKey = ["right", "up", "down", "left"];
let listKeyPress = [];
let listKeyRandom = [];



let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.beginPath();
ctx.rect(460, 0, 1000, 50);
ctx.fillStyle = "green";
ctx.fill();


ctx.beginPath();
ctx.rect(1150, 0, 200, 50);
ctx.fillStyle = "#85C1E9";
ctx.fill();


ctx.beginPath();
ctx.rect(460, 0, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
let a = 460;

function move() {
  ctx.clearRect(a, 0, 50, 50);
  if (a <= 1410) {
    a += 1;
  } else {
    a = 460;
  }

  ctx.beginPath();
  ctx.rect(460, 0, 1000, 50);
  ctx.fillStyle = "green";
  ctx.fill();

  ctx.beginPath();
  ctx.rect(1150, 0, 200, 50);
  ctx.fillStyle = "#85C1E9";
  ctx.fill();


  ctx.beginPath();
  ctx.rect(a, 0, 50, 50);
  ctx.fillStyle = "red";
  ctx.fill();
}
setInterval(move, 10);
let score = 0
ctx.fillText(score, 0, 0)



function randomKey() {
  for (i = 1; i < 12; i++) {
    document.getElementById(i).src = "images/" + listKey[Math.floor(Math.random() * 3)] + ".png"
  }
}





// document.addEventListener("keydown",press(e))
// function press(e) {
//     let score = 0;
//     if(e.code == "Space" && a >= 1150 && a<= 1350) {
//         {
//             score += 10;
//         }
//     }
//     document.getElementById("score").innerHTML += score;
// }