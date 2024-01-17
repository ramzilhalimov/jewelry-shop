import { USER_PRODUCTS_PAGE } from "../routes.js";
import { goToPage } from "../index.js";
import { productsData } from "../ products.js";

export function renderProductsPageComponent({ appEl }) {
  const productsHtml = productsData
    .slice(0, 6)
    .map(
      (product) =>
        '<div class="product">' +
        `<img src="${product.image}" alt="${product.title}" />` +
        "<h3>" +
        product.title +
        "</h3>" +
        "<p>Цена: " +
        product.price +
        "</p>" +
        "</div>"
    )
    .join("");

  const appHtml = `
  <body>
  <header class="header-product center">
      <div class="header__content">
      <nav class="header__nav navbar">
      <a href="#" class="navbar__link">Контрагентам</a>
      <a href="#" class="navbar__link">Дизайнерам</a>
      <a href="#" class="navbar__link">Вакансии</a>
      </nav>
         <img class="header__logo" src="/assets/images/logo.svg" alt="logo"></img>
      <nav class="header__nav navbar">
 <img class="header__logo" src="/assets/images/gridicons_search.svg" alt="logo"></img>
<a href="#" class="navbar__link">Поиск</a>
<a href="#" class="navbar__link">Вход/Регистрация</a>
<img class="header__logo" src="/assets/images/mdi_account.svg" alt="logo"></img>
<img class="header__logo" src="/assets/images/topcoat_like.svg" alt="logo"></img>
      </nav>
      </div>
  </header>
  <nav class="filter__list listbar">
  <div class="dropdown">
    <button class="listbar__link">Бренд</button>
    <span class="dropdown-icon">v</span>
    <div class="dropdown-content">
      <!--  варианты -->
    </div>
  </div>
  <div class="dropdown">
    <button class="listbar__link">Цена</button>
    <span class="dropdown-icon">v</span>
    <div class="dropdown-content">
      <!--  варианты -->
    </div>
  </div>
  <div class="dropdown">
  <button class="listbar__link">Для кого</button>
  <span class="dropdown-icon">v</span>
  <div class="dropdown-content">
    <!--  варианты -->
  </div>
</div>
<div class="dropdown">
<button class="listbar__link">Коллекция</button>
<span class="dropdown-icon">v</span>
<div class="dropdown-content">
  <!--  варианты -->
</div>
</div>
<div class="dropdown">
<button class="listbar__link">Сезон</button>
<span class="dropdown-icon">v</span>
<div class="dropdown-content">
  <!--  варианты -->
</div>
</div>
<div class="dropdown">
<button class="listbar__link">Событие</button>
<span class="dropdown-icon">v</span>
<div class="dropdown-content">
  <!--  варианты -->
</div>
</div>
</nav>
  <div class="products center">
  ${productsHtml}
   </div>
   <button class="products-btn">Покажите еще</button>
   <div class= "section-product center">
   <div class="section-product__content">
   <div class="section-product__nav">
  <p class="section-product__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.
  Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.</p>
  <button class="read-more-btn">Читать дальше</button>
  </div>
  <div class="section-product__list">
  <div class="list">
  <div class="list-image">
    <img src="/assets/images/delivery.svg" alt="delivery" />
    <div class="list-text">Бесплатная
    доставка</div>
  </div>
</div>
<div class="list">
<div class="list-image">
  <img src="/assets/images/ribbon-design.svg" alt="ribbon-design" />
  <div class="list-text">Бесплатная
  примерка</div>
</div>
</div>

</div>
<div class="section-product__list">
<div class="list">
<div class="list-image">
  <img src="/assets/images/list.svg" alt="list" />
  <div class="list-text">Индивидуальный
  дизайн</div>
</div>
</div>
<div class="list">
<div class="list-image">
  <img src="/assets/images/jewelry.svg" alt="jewelry" />
  <div class="list-text">Личный
  подход
  </div>
</div>
</div>
</div>
  </div>
 </div>
<div class="subscribe center">
<div class="subscribe__title">Полезные советы и персональный предложения</div>
<h2 class="subscribe__heading">Эксклюзивная рассылка</h2>
<div class="subscribe__content">
        <div class="subscribe__info">
            <nav class="subscribe__item">
                <a href="#" class="subscribe__link"><img class="subscribe__logo" src="/assets/images/subscribe__icon.svg" alt="logo">Личный менеджер</a>
                <a href="#" class="subscribe__link"><img class="subscribe__logo" src="/assets/images/subscribe__icon.svg" alt="logo">Доставка и оформление</a>
                <a href="#" class="subscribe__link"><img class="subscribe__logo" src="/assets/images/subscribe__icon.svg" alt="logo">Индивидуальный дизайн</a>
            </nav>
        </div>
        <form action="#" class="subscribe__form subscribebar">
        <div class="subscribebar__item">
        <input placeholder=" Ваш Email  " class="subscribebar__email" type="email" >
        <button class="subscribebar__btn">Подписаться</button>
    </div>
    </form>
    </div>
    </div>
  <footer class="footer center">
      <div class="footer__content">
              <div class="footer__info">
                  <div class="footer__item">
                      <h4 class="footer__heading">Полезные ссылки</h4>
                      <a href="#" class="footer__link">Доставка</a>
                      <a href="#" class="footer__link">Оплата</a>
                      <a href="#" class="footer__link">Акции</a>
                      <a href="#" class="footer__link">Политика конфиденциальности</a>
                  </div>
                  <div class="footer__item">
                  <h4 class="footer__heading">Оплата</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                  <div class="footer__icons iconbar">
                 <img class="subscribe__logo" src="/assets/images/Rectangle 13.svg"></img>
                  <img class="subscribe__logo" src="/assets/images/Rectangle 14.svg"></img>
              </div>
              </div>
                  <div class="footer__item">
                      <h4 class="footer__heading">Контакты</h4> 
                      <a href="#" class="footer__link"><img class="subscribe__logo" src="/assets/images/entypo_old-phone.svg" alt="logo">8 (812) 234-56-55</a>
                      <a href="#" class="footer__link"><img class="subscribe__logo" src="/assets/images/entypo_old-phone.svg" alt="logo">8 (812) 234-56-55</a>
                      <a href="#" class="footer__link"><img class="subscribe__logo" src="/assets/images/entypo_mail.svg" alt="logo">ojjo@ojjo.ru</a>
                  </div>
                  <div class="footer__item">
                  <h4 class="footer__heading">Социальные сети</h4> 
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                  <div class="footer__icons iconbar">
                  <img class="subscribe__logo" src="/assets/images/carbon_logo-youtube.svg"></img>
                  <img class="subscribe__logo" src="/assets/images/entypo-social_vk.svg"></img>
                  <img class="subscribe__logo" src="/assets/images/bx_bxl-facebook.svg"></img>
                  <img class="subscribe__logo" src="/assets/images/bx_bxl-telegram.svg"></img>
                  <img class="subscribe__logo" src="/assets/images/simple-icons_etsy.svg"></img>
                  </div>
              </div>
              </div> 
              <nav class="footer__nav footerbar">
              <a href="#" class="footerbar__link">(c) 2020 OJJO jewelry</a>
              <a href="#" class="footerbar__link">Договор публичной офферты</a>
              <a href="#" class="footerbar__link">Контрагентам</a>
              <a href="#" class="footerbar__link">Сделано Figma.info</a>
              </nav>
          </div>
  </footer>

</body>
`;

  appEl.innerHTML = appHtml;
  document.querySelector(".products").innerHTML = productsHtml;
  document.querySelectorAll(".products").addEventListener("click", () => {
    goToPage(USER_PRODUCTS_PAGE, {});
  });
  const productsElements = document.querySelectorAll(".product");
  for (let i = 6; i < productsElements.length; i++) {
    productsElements[i].style.display = "none";
  }
  document
    .querySelector(".products-more-btn")
    .addEventListener("click", function () {
      for (let i = 6; i < productsElements.length; i++) {
        productsElements[i].style.display = "flex";
      }
      this.style.display = "none";
    });

  document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    if (readMoreButtons.length > 0) {
      readMoreButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          const text = document.querySelector(".section-product__text");
          text.classList.toggle("show-full-text");
          this.textContent = text.classList.contains("show-full-text")
            ? "Скрыть"
            : "Читать дальше";
        });
      });
    } else {
      console.error("Кнопка .read-more-btn не найдена на странице");
    }
  });

  document.querySelectorAll(".dropdown").forEach(function (dropdown) {
    var button = dropdown.querySelector(".listbar__link");
    var icon = dropdown.querySelector(".dropdown-icon");

    button.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("show");
    });

    icon.addEventListener("click", function () {
      this.previousElementSibling.nextElementSibling.classList.toggle("show");
    });
  });
}
