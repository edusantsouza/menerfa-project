(() => {
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");
  const inputs = document.querySelectorAll(".banner-section input");

  const sliderTimer = () => {
    let number = 0;
    let seconds = 4000;
    const coreFunc = () => {
      if (number < 2) {
        number++;
      } else {
        number = 0;
      }
      inputs[number].checked = true;
    };

    let interval = setInterval(coreFunc, seconds);

    arrowLeft.addEventListener("click", () => {
      if (number >= 1) {
        number -= 1;
        inputs[number].checked = true;
      } else if (number === 0) {
        number += 2;
        inputs[number].checked = true;
      }
      clearInterval(interval);
    });

    arrowRight.addEventListener("click", () => {
      if (number <= 1) {
        number += 1;
        inputs[number].checked = true;
      } else if (number === 2) {
        number -= 2;
        inputs[number].checked = true;
      }
      clearInterval(interval);
    });
  };

  sliderTimer();
})();
