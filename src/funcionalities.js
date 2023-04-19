(() => {
  //Scroll Fixed Header
  const fixedHeader = () => {
    const headerWrapper = document.querySelector(".header-wrapper");
    const headerContent = document.querySelector(".header-content");
    const logoMobile = document.querySelector(".logo-mnf");
    const cartScreen = document.querySelector(".cart-screen");
    const verifyScreenPosition = () => {
      return window.scrollY;
    };
    let position;
    setInterval(() => {
      position = verifyScreenPosition();
    }, 500);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        headerWrapper.style = `position: fixed; width: 100%; z-index: 150; top: 0; box-shadow: -1px 5px 10px rgba(0, 0, 0, 0.3); opacity: ${0}; visibility: hidden`;

        if (window.outerWidth < 740) {
          logoMobile.style = "display: none ;";
          headerContent.style = "padding: 16px 10px";
        } else {
          logoMobile.style = "display: block ;";
        }
      } else {
        logoMobile.style = "display: block ;";
        headerWrapper.style = "box-shadow: none;";
      }

      if (verifyScreenPosition() < position) {
        headerWrapper.style = `position: fixed; width: 100%; z-index: 150; top: 0; box-shadow: -1px 5px 10px rgba(0, 0, 0, 0.3); opacity: ${1}; visibility: visible`;
      }

      if (window.scrollY < 5) {
        logoMobile.style = "display: block ;";
        headerWrapper.style = "box-shadow: none; position: static";
      }

      if (window.scrollY > 50 && verifyScreenPosition() > position) {
        cartScreen.style = "top: 0";
      } else if (verifyScreenPosition() < position) {
        if (window.scrollY > 50) {
          if (window.outerWidth >= 1020) {
            cartScreen.style = "top: 9.3rem; background-color: red";
          } else if (window.outerWidth >= 721 && window.outerWidth < 1020) {
            cartScreen.style = "top: 10.8rem";
          } else {
            cartScreen.style = "top: 8rem";
          }
        } else {
          if (window.outerWidth >= 1020) {
            cartScreen.style = "top: 12rem;";
          } else if (window.outerWidth >= 721 && window.outerWidth < 1020) {
            cartScreen.style = "top: 13.5rem";
          } else {
            cartScreen.style = "top: 16.5rem";
          }
        }
      }
    });

    window.addEventListener("resize", () => {
      if (window.scrollY > 50) {
        if (window.outerWidth >= 1020) {
          cartScreen.style = "top: 9.3rem;";
        } else if (window.outerWidth >= 721 && window.outerWidth < 1020) {
          cartScreen.style = "top: 10.8rem";
        } else {
          cartScreen.style = "top: 8rem";
        }
      } else {
        if (window.outerWidth >= 1020) {
          cartScreen.style = "top: 12rem;";
        } else if (window.outerWidth >= 721 && window.outerWidth < 1020) {
          cartScreen.style = "top: 13.5rem";
        } else {
          cartScreen.style = "top: 16.5rem";
        }
      }

      cartScreen.classList.remove("active-cart");
      cartScreen.classList.remove("active-cart-mobile");
    });
  };

  //Open Menu Mobile
  const mobileMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(
      ".section-wrapper-mobile .close-menu",
    );
    const sectionsOptions = document.querySelector(
      ".section-wrapper-mobile .sections-options",
    );
    const openMenu = () => {
      sectionsOptions.style = "left: 0";
      window.screenTop = 0;
    };

    const closeMenu = () => {
      sectionsOptions.style = "left: -180%";
    };

    mobileMenu.addEventListener("click", openMenu);
    document.querySelector("main").addEventListener("click", closeMenu);
    closeBtn.addEventListener("click", closeMenu);
  };

  //Search Bar on Mobile mode
  const activeSearchMobile = () => {
    const searchBtn = document.querySelector(".search-icon svg");
    const searchInput = document.querySelector(
      ".header-content .flex-header .search .search-bar input",
    );
    const goSearch = document.querySelector(".opened-search");
    const goClose = document.querySelector(".close-search");

    window.addEventListener("resize", () => {
      if (window.outerWidth > 736) {
        goSearch.style = "display: none";
        goClose.style = "display: none";
        searchInput.style = "width: 0%; padding: 1rem;";
      } else if (window.outerWidth <= 736) {
        searchInput.style = "width: 0%; padding: 0rem;";
        searchBtn.style = " width: 3rem; height: 3rem;";
        goSearch.style = "display: none";
        goClose.style = "display: none";
      }
    });

    goClose.addEventListener("click", () => {
      goSearch.style = "display: none";
      goClose.style = "display: none";
      searchBtn.style = " width: 3rem; height: 3rem;";
      searchInput.style = "width: 0%; padding: 0rem;";
    });

    searchBtn.addEventListener("click", () => {
      searchBtn.style = "width: 0;";
      searchInput.style = "width: 100%; padding: 1rem;";
      goSearch.style = "display: block";
      goClose.style = "display: block";
    });
  };
  //Open Cart Screen
  const cartMenuOpen = () => {
    const cartBtn = document.querySelector(".cart-btn");
    const cartScreen = document.querySelector(".cart-screen");
    const select = document.querySelector("select");

    cartBtn.addEventListener("click", (e) => {
      e.preventDefault();

      cartScreen.classList.toggle("active-cart");
    });

    select.addEventListener("click", (e) => {
      e.preventDefault();
    });
  };

  //Call Functions
  mobileMenu();
  cartMenuOpen();
  activeSearchMobile();
  fixedHeader();
})();
