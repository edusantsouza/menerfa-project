(() => {
  //Slider Function
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

    //Slider Interval
    setInterval(coreFunc, seconds);

    //Event Listeners
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

  //Scroll Fixed Header
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

  //Open Menu Mobile
  const openMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const sectionsOptions = document.querySelector(".sections-options");
    mobileMenu.addEventListener("click", () => {
      sectionsOptions.style = "left: 0";
      window.screenTop = 0;
      document.querySelector("body").style = "overflow: hidden;";
      document.querySelector("body").style = "";
    });

    document.querySelector("main").addEventListener("click", (e) => {
      sectionsOptions.style = "left: -180%";
    });
  };

  //Call Functions
  openMenu();
  sliderFunc();
  fixedHeader();
})();
