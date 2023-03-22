window.onload = () => {
  const $h1 = document.querySelector('h1');
  const cursorItemBox = document.querySelector('.cursor_item');
  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;
  let speed = 0.1;

  const mouseMoveHandler = (e) => {
    x = e.pageX;
    y = e.pageY;
    $h1.textContent = `event.pageX: ${x}, event.pageY: ${y}`;
  };
  window.addEventListener('mousemove', mouseMoveHandler);

  const loop = () => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;
    cursorItemBox.style.top = targetY.toFixed(2) + 'px';
    cursorItemBox.style.left = targetX.toFixed(2) + 'px';

    window.requestAnimationFrame(loop);
  };
  loop();
};
