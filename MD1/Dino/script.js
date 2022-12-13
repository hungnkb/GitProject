let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let score = 0;
let runInterval = '';
let level = 10;

let img = new Image();
img.src = "images/background.jpg"
function draw_background() {
    ctx.drawImage(img, 0, 0);
};
// 612*306

let dino = new Dino(100, 250, 50, 50);
let rock = new Rock(550, 250, 50, 50);

function jump() {
    dino.y -= 50;
    setTimeout(function () {
        dino.y = 250;
    }, 520);
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 38)
        jump()
})

function move() {
    if (rock.x == 0) {
        rock.x = 550;
    }
    rock.x--;
    draw_background();
    scoreRecord();
    dino.draw_dino();
    rock.draw_rock();
    gameOver();
}

function start() {
    clearInterval(runInterval);
    rock.x = 550;
    score = 0;
    runInterval = setInterval(move, 5);
}

function gameOver() {
    if (dino.x + 20 == rock.x - 10 && dino.y >= rock.y || dino.x < rock.x + 20 && dino.x > rock.x && dino.y >= rock.y) {
        clearInterval(runInterval);
        alert("Game over!!! Your score: " + score / 60)
    }
}

function scoreRecord() {
    if (rock.x + 20 < dino.x - 20) {
        score++;
    }
    document.getElementById("score").innerHTML = Math.floor(score / 60);
}


