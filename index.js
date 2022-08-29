const canvas = document.querySelector('Canvas');
const c = canvas.getContext('2d')

//
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gravity = 4.5;

class Player {
    constructor(){
        this.positon = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30;
        this.height = 30;
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.positon.x, this.positon.y, this.width, this.height)
    }

    update() {
        this.draw();
        this.positon.y += this.velocity.y;
        this.positon.x += this.velocity.x;

        if(this.positon.y + this.height + this.velocity.y <= canvas.height)
            this.positon.y += gravity;
        else 
            this.velocity.y = 0;
    }
}

const player = new Player();
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height)
    player.update();
    if(keys.right.pressed)
        player.velocity.x = 5;
    else if(keys.left.pressed)
        player.velocity.x = -5;
    else player.velocity.x = 0;
}

animate();

window.addEventListener('keydown', ({key}) => {
    switch(key) {
        case 'a':
            keys.left.pressed = true;
            console.log('left');
            break;

        case 's':
            player.velocity.y += 20;
            console.log('down');
            break;

        case 'd':
            keys.right.pressed = true;
            console.log('right');
            break;

        case 'w':
            console.log('up');
            player.velocity.y -= 20;
            break;
    }
    console.log(keys.right.pressed)
})

window.addEventListener('keyup', ({key}) => {
    switch(key) {
        case 'a':
            keys.left.pressed = false;
            console.log('left');
            break;
        case 's':
            console.log('down');
            break;
        case 'd':
            keys.right.pressed = false;
            console.log('right');
            break;
        case 'w':
            console.log('up');
            player.velocity.y = 0; 
            break;
    }
    console.log(keys.right.pressed)
})