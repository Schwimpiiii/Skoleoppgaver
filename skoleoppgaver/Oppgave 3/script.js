document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.querySelector('.game-container');
    const leftPaddle = document.getElementById('leftPaddle');
    const rightPaddle = document.getElementById('rightPaddle');
    const ball = document.getElementById('ball');
    const player1Score = document.getElementById('player1Score');
    const player2Score = document.getElementById('player2Score');
  
    let ballX = 295; // Initial position of the ball
    let ballY = 195; // Initial position of the ball
    let dx = 3; // Ball's horizontal speed
    let dy = 3; // Ball's vertical speed
    let leftPaddleY = 160; // Initial position of the left paddle
    let rightPaddleY = 160; // Initial position of the right paddle
    let player1 = 0; // Player 1 score
    let player2 = 0; // Player 2 score
  
    function updatePaddles() {
      leftPaddle.style.top = leftPaddleY + 'px';
      rightPaddle.style.top = rightPaddleY + 'px';
    }
  
    function updateBall() {
      ball.style.left = ballX + 'px';
      ball.style.top = ballY + 'px';
    }
  
    function moveBall() {
      // Update ball's position
      ballX += dx;
      ballY += dy;
  
      // Check for collision with top and bottom walls
      if (ballY <= 0 || ballY >= 390) {
        dy = -dy;
      }
  
      // Check for collision with paddles
      if (ballX <= 20) {
        if (ballY > leftPaddleY && ballY < leftPaddleY + 80) {
          dx = -dx;
        } else {
          player2++;
          player2Score.textContent = player2;
          resetBall();
        }
      }
  
      if (ballX >= 570) {
        if (ballY > rightPaddleY && ballY < rightPaddleY + 80) {
          dx = -dx;
        } else {
          player1++;
          player1Score.textContent = player1;
          resetBall();
        }
      }
    }
  
    function resetBall() {
      ballX = 295;
      ballY = 195;
      dx = -dx;
    }
  
    function updateGame() {
      updatePaddles();
      updateBall();
    }
  
    function main() {
      updateGame();
      setInterval(() => {
        moveBall();
        updateGame();
      }, 1000 / 60);
    }
  
    main();
  
    // Keyboard controls for the paddles
    document.addEventListener('keydown', (event) => {
      if (event.key === 'w') {
        if (leftPaddleY > 0) {
          leftPaddleY -= 10;
        }
      } else if (event.key === 's') {
        if (leftPaddleY < 320) {
          leftPaddleY += 10;
        }
      } else if (event.key === 'ArrowUp') {
        if (rightPaddleY > 0) {
          rightPaddleY -= 10;
        }
      } else if (event.key === 'ArrowDown') {
        if (rightPaddleY < 320) {
          rightPaddleY += 10;
        }
      }
    });
  });
  