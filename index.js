document.getElementById('revealBtn').addEventListener('click', function() {
    // This reveal the birthday message
    document.getElementById('message').classList.remove('hidden');
    
    // This line Starts the confetti animation
    startConfetti();
    // Play the birthday music
    document.getElementById('birthdaySong').play();
});

// Confetti effect (I copied and pasted 😂😂)
function startConfetti() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    const particles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 4 + 1,
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 2 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            particle.x += particle.dx;
            particle.y += particle.dy;

            if (particle.y > canvas.height) particle.y = 0;
            if (particle.x > canvas.width) particle.x = 0;
        });

        requestAnimationFrame(draw);
    }

    draw();
}
