const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let balls = [];
let animationFrameId;

canvas.width = window.innerWidth * 0.9;
canvas.height = window.innerHeight * 0.8;

function start() {
    const numBalls = document.getElementById('numBalls').value;
    const maxDistancePercent = document.getElementById('distance').value;
    const maxDistance = canvas.width * (maxDistancePercent / 100);

    balls = createBalls(numBalls);
    animate(maxDistance);
}

function reset() {
    cancelAnimationFrame(animationFrameId);
    balls = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function createBalls(num) {
    let balls = [];
    for (let i = 0; i < num; i++) {
        const ball = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            radius: 5
        };
        balls.push(ball);
    }
    return balls;
}

function animate(maxDistance) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBalls();
    drawLines(maxDistance);
    updateBalls();
    animationFrameId = requestAnimationFrame(() => animate(maxDistance));
}

function drawBalls() {
    for (let ball of balls) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.closePath();
    }
}

function drawLines(maxDistance) {
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            const dx = balls[i].x - balls[j].x;
            const dy = balls[i].y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < maxDistance) {
                ctx.beginPath();
                ctx.moveTo(balls[i].x, balls[i].y);
                ctx.lineTo(balls[j].x, balls[j].y);
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
                ctx.stroke();
                ctx.closePath();
            }
        }
    }
}

function updateBalls() {
    for (let ball of balls) {
        ball.x += ball.vx;
        ball.y += ball.vy;

        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
            ball.vx *= -1;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
            ball.vy *= -1;
        }
    }
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.8;
});
