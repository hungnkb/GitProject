class Dino {
    constructor(x, y, a, b) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }
    draw_dino() {
        let img = new Image();
        img.src = "images/dino.png"
        ctx.drawImage(img, dino.x, dino.y, dino.a, dino.b);
    }
}

class Rock {
    constructor(x, y, a, b) {
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
    }
    draw_rock() {
        let img = new Image();
        img.src = "images/stone.png"
        ctx.drawImage(img, rock.x, rock.y, rock.a, rock.b);
    }
}