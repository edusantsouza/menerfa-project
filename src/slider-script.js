(() => {
  const sliderFunc = () => {
    const arrowLeft = document.querySelector(".arrow-left");
    const arrowRight = document.querySelector(".arrow-right");
    const image = document.querySelector(".banner-image");

    let number = 1;
    let seconds = 4000;
    const coreFunc = () => {
      if (number < 3) {
        number++;
      } else {
        number = 1;
      }
      image.setAttribute(
        "style",
        `background: url('/img/banners/banner-${number}.jpg') no-repeat center center; background-size: auto;`,
      );
    };
    const clearAllIntervals = () => {
      for (i = 0; i < 20; i++) {
        window.clearInterval(i);
      }
    };

    setInterval(coreFunc, seconds);

    arrowLeft.addEventListener("click", () => {
      if (number === 1) {
        number += 2;
        image.setAttribute(
          "style",
          `background: url('/img/banners/banner-${number}.jpg') no-repeat center center; background-size: auto;`,
        );
      } else if (number >= 2 || number <= 3) {
        number -= 1;
        image.setAttribute(
          "style",
          `background: url('/img/banners/banner-${number}.jpg') no-repeat center center; background-size: auto;`,
        );
      }
      clearAllIntervals();
      setTimeout(() => {
        setInterval(coreFunc, seconds);
      }, 5000);
    });

    arrowRight.addEventListener("click", () => {
      if (number === 1 || number === 2) {
        number += 1;
        image.setAttribute(
          "style",
          `background: url('/img/banners/banner-${number}.jpg') no-repeat center center; background-size: auto;`,
        );
      } else if (number === 3) {
        number -= 2;
        image.setAttribute(
          "style",
          `background: url('/img/banners/banner-${number}.jpg') no-repeat center center; background-size: auto;`,
        );
      }
      clearAllIntervals();
      setTimeout(() => {
        setInterval(coreFunc, seconds);
      }, 5000);
    });
  };

  const fixedHeader = () => {
    const header = document.querySelector(".header-wrapper");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        header.style = "position: fixed; width: 100%; z-index: 150; top: 0;";
      } else if (window.scrollY < 100) {
        header.style = "position: inherit";
      }
    });
  };

  sliderFunc();
  fixedHeader();
})();
