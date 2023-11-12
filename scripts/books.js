const $ = document;

// Remove Imgs Draggable
const allImagesSelector = $.querySelectorAll(`img`);
allImagesSelector.forEach((img) => {
  img.setAttribute(`draggable`, `false`);
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

// Discount Section
const discountSectionSelector = $.querySelector(`.main__discount`);
const discountSectionCloseIconSelector = $.querySelector(`.close-icon`);
discountSectionCloseIconSelector.addEventListener(`click`, () => {
  addClass(discountSectionSelector, `di-nn`);
});

// About Author
const aboutAuthorSelector = $.querySelector(`.main__introduce-author-about`);
const moreAboutAuthorBtnSelector = $.querySelector(
  `.main__introduce-author-more-about`
);
let isMoreAboutAuthorActive = false;
moreAboutAuthorBtnSelector.addEventListener(`click`, () => {
  if (isMoreAboutAuthorActive) {
    moreAboutAuthorBtnSelector.innerHTML = `بیشتر...`;
    aboutAuthorSelector.innerHTML = lessAboutAuthor;
    isMoreAboutAuthorActive = false;
  } else {
    moreAboutAuthorBtnSelector.innerHTML = `بستن`;
    aboutAuthorSelector.innerHTML += moreAboutAuthor;
    isMoreAboutAuthorActive = true;
  }
});

// Products Navigation
const rightNavigationBtnsSelector = $.querySelectorAll(
  `.main__products-right-arrow`
);
const leftNavigationBtnsSelector = $.querySelectorAll(
  `.main__products-left-arrow`
);
rightNavigationBtnsSelector.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    scrollRight(btn, 130);
  });
});
leftNavigationBtnsSelector.forEach((btn) => {
  btn.addEventListener(`click`, () => {
    scrollLeft(btn, -130);
  });
});

// Functions
function addClass(elementName, className) {
  elementName.classList.add(className);
}

function scrollRight(elem, scrollRight) {
  elem.nextElementSibling.scrollBy(scrollRight, 0);
}

function scrollLeft(elem, scrollLeft) {
  elem.previousElementSibling.scrollBy(scrollLeft, 0);
}

// About Author Text
var lessAboutAuthor = `دارن هاردی در ۱ فوریه‌ی سال ۱۹۷۱ در کشور آمریکا به دنیا آمد.
برخلاف تصوری که از زندگی افراد ثروتمند داریم، او در یک بهشت که همه
چیز برای او حی و حاضر باشد، زندگی نمی‌کرد. وقتی که دارن فقط
هجده‌ماهه بود، مادر او تصمیم گرفت تا از همسرش جدا شود، فرزند
خردسالش را ترک کند و به دنبال زندگی و رویاهای خودش برود. خوشبختانه
پدر دارن فردی مسئولیت‌پذیر بود که حضانت و مسئولیت پسرش را پذیرفت و
او را پرورش داد.`;

var moreAboutAuthor = `<br /><br />
دارن تا حد زیادی خودش را مدیون طرز فکر پدرش می‌داند. پدر او
سخت‌گیری نمی‌کرد، قانون‌های طاقت‌فرسا برای او نمی‌گذاشت، از او
عالی‌ترین نمرات را طلب نمی‌کرد و از دارن توقع پسری را نداشت که
همیشه در حال درخشش باشد. به طبع این طرز تفکر و عشقی که پدرش به
دارن می‌داد، این پسر دوران کودکی و نوجوانی را بدون واقعه‌ی خاص
دیگری گذراند، هیچوقت به مصرف مواد مخدر روی نیاورد و تمام تلاشش را
برای یافتن اهداف واقعی خودش کرد.
<br /><br />
تاثیر دیگری که پدر دارن هاردی با طرز فکر خود بر زندگی پسرش گذاشت
مربوط به جملاتی بود که بر زبان می‌آورد. یکی از باورهای جالب پدر
دارن این بود که «هیچ اهمیتی ندارد شرایط چه‌قدر سخت است، دیگران
چه‌قدر مستعدتر و دانشمندتر از تو هستند یا چه‌قدر سابقه‌ی کار
بیشتری نسبت به تو دارند! تو هنوز هم می‌توانی تمام تلاشت را بکنی!
به بیشترین حد ممکن مطالعه کن، خودت را به چالش بکش و ببین که تو
جلوتر از همه هستی! پس استثنایی باش!»
<br /><br />
این طرز فکر و جملات انگیزه‌دهنده‌ی پدر دارن بود که او را مصمم
می‌کرد تا درست‌ترین و مناسب‌ترین تصمیم را درمورد خود و زندگی‌اش
بگیرد. دارن در اوایل جوانی پا به دانشگاه گذاشت، اما همچون دیگر
نوابغ و رهبران تاثیرگذار خیلی زود فهمید که دانشگاه راهی نیست که او
را به خواسته‌ها و اهدافش برساند. بنابراین تنها یک ترم را در
دانشگاه به اتمام رساند، بعد از آن قید تحصیل دانشگاهی را زد و وارد
بازار کار شد.
<br /><br />
دارن در هجده‌سالگی کسب و کار نوپای خود را پی‌ریزی کرد. دارن در
تولد نوزده‌سالگی‌اش بود که به درآمدی شش برابر یک کارمند عادی در
آمریکا رسید و در طول ۵ سال کار و مداومت به درآمد یک میلیون دلاری
در سال دست پیدا کرد. او در این سال‌ها به کسب و کارها و مدیران
مشاوره‌ می‌داد تا کسب و کار خود را بهبود بدهند.
<br /><br />
شهرت دارن هاردی در ایران به جهت کتاب‌های انگیزشی است و از هر کتاب
او ده‌ها ترجمه‌ی مختلف در بازار وجود دارد. اغلب کتاب‌های دارن
هاردی به افراد در افزایش بهره‌وری، از بین بردن عادات منفی، خلق
عادات مثبت، تغییر باورها و نگرش درمورد کار و زندگی، افزایش درآمد،
فروش و نکات مدیریتی کمک می‌کنند. البته ناگفته نماند که به گفته‌ی
بسیاری از مخاطبان این کتاب استراتژی‌های مفیدی را در اختیارشان قرار
داده که آنها توانسته‌اند با استفاده از این استراتژی‌ها کسب و
کارشان را زیر و رو کنند.`;
