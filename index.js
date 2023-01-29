const menu = document.getElementById("game-pool");

Array.from(document.getElementsByClassName("game-pool-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });