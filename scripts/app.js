const $ = document;

// Default Functions
const imgsSelector = $.querySelectorAll(`img`);
imgsSelector.forEach(function (img) {
  img.setAttribute(`draggable`, `false`);
  img.setAttribute(`loading`, `lazy`);
});
const linksSelector = $.querySelectorAll(`a`);
linksSelector.forEach(function (link) {
  link.setAttribute(`draggable`, `false`);
});

// Header Grouping Menu
const navGroupingSelector = $.getElementById(`nav-grouping`);
navGroupingSelector.addEventListener(`click`, function () {
  $.querySelector(
    `.header__bottom-section-grouping-menu-wrapper`
  ).classList.toggle(`d-fl`);
});

// Header Hamburger Menu
const mobileMenuOpenerIconSelector = $.querySelector(
  `.header__mobile-section-top-menu-icon`
);
const mobileMenuCloserIconSelector = $.querySelector(
  `.header__mobile-hamburger-menu-close-icon`
);
mobileMenuOpenerIconSelector.addEventListener(`click`, function (e) {
  e.stopPropagation();
  $.querySelector(`.header__mobile-hamburger-menu`).addEventListener(
    `click`,
    function (e) {
      e.stopPropagation();
    }
  );
  window.addEventListener(`keydown`, function () {
    $.querySelector(`.header__mobile-hamburger-menu`).classList.remove(
      `set-r-0`
    );
    $.querySelector(`.dark-bg`).classList.remove(`d-bl`);
  });
  $.querySelector(`.header__mobile-hamburger-menu`).classList.add(`set-r-0`);
  $.querySelector(`.dark-bg`).classList.add(`d-bl`);
  $.body.addEventListener(`click`, function () {
    $.querySelector(`.header__mobile-hamburger-menu`).classList.remove(
      `set-r-0`
    );
    $.querySelector(`.dark-bg`).classList.remove(`d-bl`);
  });
});
mobileMenuCloserIconSelector.addEventListener(`click`, function () {
  $.querySelector(`.header__mobile-hamburger-menu`).classList.remove(`set-r-0`);
  $.querySelector(`.dark-bg`).classList.remove(`d-bl`);
});

// Main Site Map Section
const siteMapItemsWrapperSelector = $.querySelector(
  `.main__site-map-road-wrapper`
);
const btnsScrollRightSelector = $.querySelectorAll(
  `.main__site-map-road-nav-icon-r`
);
const btnsScrollLeftSelector = $.querySelectorAll(
  `.main__site-map-road-nav-icon-l`
);

const siteMapImgsWrapperSelector = $.querySelector(
  `.main__site-map-imgs-wrapper`
);
const btnsImgsScrollRightBtnsSelector = $.querySelectorAll(
  `.main__site-map-road-img-icon-r`
);
const btnsImgsScrollLeftBtnsSelector = $.querySelectorAll(
  `.main__site-map-road-img-icon-l`
);

btnsScrollRightSelector.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    siteMapItemsWrapperSelector.scrollBy(130, 0);
  });
});
btnsScrollLeftSelector.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    siteMapItemsWrapperSelector.scrollBy(-130, 0);
  });
});

btnsImgsScrollRightBtnsSelector.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    siteMapImgsWrapperSelector.scrollBy(200, 0);
  });
});
btnsImgsScrollLeftBtnsSelector.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    siteMapImgsWrapperSelector.scrollBy(-200, 0);
  });
});

// Books Products Section
const rightArrowsSelector = $.querySelectorAll(`.main__products-books-arrow-r`);
const leftArrowsSelector = $.querySelectorAll(`.main__products-books-arrow-l`);

rightArrowsSelector.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    btn.nextElementSibling.nextElementSibling.scrollBy(130, 0);
  });
});

leftArrowsSelector.forEach(function (btn) {
  btn.addEventListener(`click`, function () {
    btn.nextElementSibling.scrollBy(-130, 0);
  });
});

const siteIntroductionShowBtnSelector = $.querySelector(
  `.main__site-introduction-height-setter`
);
const siteIntroductionWrapperSelector = $.querySelector(
  `.main__site-introduction-wrapper`
);
const siteIntroductionWrapperModalSelector = $.querySelector(
  `.main__site-introduction-modal`
);
siteIntroductionShowBtnSelector.addEventListener(`click`, function () {
  siteIntroductionShowBtnSelector.classList.toggle(`rot-90deg`);
  siteIntroductionWrapperSelector.classList.toggle(`height-mc`);
  siteIntroductionWrapperModalSelector.classList.toggle(`d-nn`);
});
