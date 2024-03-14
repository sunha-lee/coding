
let t = 5; // 시간 변수

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  fill(100, 200, 100);
  color(10,20,30)
}

function draw() {
  background(10, 10); // 불투명한 배경화면(파티클의 꼬리 만들기)

  // 타원형으로 구성된 x와 y 그리드 만들기
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // 각 타원의 시작 점은 마우스 위치에 따라 달라집니다.
      const xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
      // 또, 파티클의 위치에 따라 달라집니다.
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // 각 파티클은 동그라미를 그리며 움직입니다.
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);

      ellipse(myX, myY, 10); // 파티클로 그리기
    }
  }

  t = t + 0.005; // 시간 업데이트
  
// 위치 변수들
let x = 0;
let y = 0;

// 속도 변수들
let vx = 0;
let vy = 0;

// 가속 변수들
let ax = 0;
let ay = 0;

let vMultiplier = 0.007;
let bMultiplier = 0.6;

function setup() {
  createCanvas(displayWidth, displayHeight);
  fill(0);
}

function draw() {
  background(255);
  ballMove();
  ellipse(x, y, 30, 30);
}

function ballMove() {
  ax = accelerationX;
  ay = accelerationY;

  vx = vx + ay;
  vy = vy + ax;
  y = y + vy * vMultiplier;
  x = x + vx * vMultiplier;

  // 캔버스의 경계에 닿았을 때 튕기기
  if (x < 0) {
    x = 0;
    vx = -vx * bMultiplier;
  }
  if (y < 0) {
    y = 0;
    vy = -vy * bMultiplier;
  }
  if (x > width - 20) {
    x = width - 20; 
    vx = -vx * bMultiplier;
  }
  if (y > height - 20) {
    y = height - 20;
    vy = -vy * bMultiplier;
  }
}
}
