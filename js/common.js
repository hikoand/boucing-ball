let elem = document.getElementsByClassName('box')[0];
let xMove = 0;
let yMove = 0;
let xDirection = 1;
let yDirection = 1;
let xSpeed = 1;
let ySpeed = 1;
let moveInterval = setInterval(move, 5);

function move() {
  xMove = xMove + xSpeed*xDirection;
  yMove = yMove + ySpeed*xDirection;
  elem.style.left = xMove + 'px';
  elem.style.top = yMove + 'px';
  if (xMove > window.innerWidth-100 || xMove < 1) {
    xDirection = xDirection*(-1);
    xSpeed = Math.trunc(Math.random()*10+1)
  }
  if (yMove > window.innerHeight-100 || yMove < 1) {
    yDirection = yDirection*(-1);
    ySpeed = Math.trunc(Math.random()*10+1)
  }
}
