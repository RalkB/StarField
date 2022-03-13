const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const frames = 120;
const dotSize = 2;
const starField = [];
const starQtt = 5000;
const speed = 10;

setStarField();
setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveStars();
    paintStarField();
},1000/frames);


function paintStarField() {
    let brightness;
    for (const star of starField) {
        ctx.beginPath();
        ctx.arc(
            canvas.width / 2 + star.x / (star.z * 0.001),
            canvas.height / 2 + star.y / (star.z * 0.001), 
            dotSize, 0, 2 * Math.PI, true);
            brightness =  (1 - Math.sqrt((star.z / 1000)))*355;
        ctx.fillStyle = "rgb(" + brightness + "," + brightness + "," + brightness + ")";
        ctx.fill();
    }
}

function moveStars() {
    for (const starIndex in starField) {
        starField[starIndex].z -= speed;
        if (starField[starIndex].z<= 1) {
            starField[starIndex].z += 1000;
        }
    }
}

function random(min, max) {
    return Math.floor(min + (Math.random() * (max - min)));
}

function setStarField()
{
    for (let index = 0; index < starQtt; index++) {
        starField[index] = {
            x: random(-canvas.width / 2, canvas.width / 2),
            y: random(-canvas.height / 2, canvas.height / 2),
            z: random(0, canvas.width)
        }
    }
}

