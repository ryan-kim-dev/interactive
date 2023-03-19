window.onload = () => {
  const h1 = document.getElementsByTagName('h1')[0];
  //   const cursor_item = document.querySelector('cursor_item');
  const cursor_item = document.getElementsByClassName('cursor_item')[0];
  const mouseFunc = e => {
    h1.innerHTML = `clientX: ${e.clientX} clientY: ${e.clientY}`;
    cursor_item.style.transform =
      'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
    // translate(635px,286px)
  };
  loop();
  window.addEventListener('mousemove', mouseFunc, false);
  function loop() {
    console.log(1);
    window.requestAnimationFrame(loop);
  }
};
