import { goToPage } from "../index.js";
import { MAIN_PAGE } from "../routes";

export function renderContactComponent({ appEl }) {
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
  <nav class="bread__list center listbar ">
  <button class="listbar__link">Главная  /</button>
  <a href="#"  class="listbar__link">Контакты  </a>
  </nav>
  <section class="section-contact center">
  <div class="section-contact__content">
          <div class="section-contact__info">
          <h1 class ="section-contact-name">Контакты</div>
              <div class="section-contact__item">
                  <h4 class="section-contact__heading">Главный офис</h4>
                  <a href="#" class="section-contact__link"><img class="subscribe__logo" src="/assets/images/gridicons_location.svg" alt="logo">Невский 140, офис 1-5</a>
                  <a href="#" class="section-contact__link"><img class="subscribe__logo" src="/assets/images/gridicons_location.svg" alt="logo">Невский 140, офис 1-5</a>
              </div>
              <div class="section-contact__item">
              <h4 class="section-contact__heading">Телефоны</h4>
              <a href="#" class="section-contact__link"><img class="subscribe__logo" src="/assets/images/carbon_phone-filled.svg" alt="logo">8 (812) 458-56-45</a>
              <a href="#" class="section-contact__link"><img class="subscribe__logo" src="/assets/images/carbon_phone-filled.svg" alt="logo"8-911-878-00-00</a>
          </div>
              <div class="section-contact__item">
                  <h4 class="section-contact__heading">E-mail</h4> 
                  <a href="#" class="section-contact__link"><img class="subscribe__logo" src="/assets/images/entypo_mail.svg" alt="logo">office@ojjo.com</a>
                  <a href="#" class="section-contact__link"><img class="subscribe__logo" src="/assets/images/entypo_mail.svg" alt="logo">sales@ojjo.com</a>
              </div>
              <div class="section-contact__item">
              <h4 class="section-contact__heading">Доп. адреса</h4> 
              <a href="#" class="section-contact__link"><img class="subscribe__logo" src="/assets/images/gridicons_location.svg" alt="logo">Невский 142, офис 1-5</a>
              <a href="#" class="section-contact__link"><img class="subscribe__logo" src="/assets/images/gridicons_location.svg" alt="logo">Загородный 145, офис 11-15</a>
              </div>
          </div> 
      </div>
</section>
  <div class = "contacts-image center">
  <img class="header__logo" src="/assets/images/contact__maps.jpg" alt="logo"></img>
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
          </div>
  </footer>
  <nav class="footer__nav footerbar">
  <div class="footerbar__content">
  <a href="#" class="footerbar__link">(c) 2020 OJJO jewelry</a>
  <a href="#" class="footerbar__link">Договор публичной офферты</a>
  <a href="#" class="footerbar__link">Контрагентам</a>
  <a href="#" class="footerbar__link">Сделано Figma.info</a>
  </div>
  </nav>
</body>`;

  appEl.innerHTML = appHtml;

  //Переход на главную
  document.querySelector(".listbar__link").addEventListener("click", () => {
    goToPage(MAIN_PAGE);
  });
}
