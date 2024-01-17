import { renderHeaderComponent } from "./header-component.js";
import { renderUploadImageComponent } from "./upload-image-component.js";

let imageUrl = "";

export function renderAddPostPageComponent({ appEl, onAddPostClick }) {
  const render = () => {
    const appHtml = `
    <body>
  <header class="header center">
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
    renderHeaderComponent({
      element: document.querySelector(".header"),
    });
  };
  render();
  renderUploadImageComponent({
    element: appEl.querySelector(".upload-image-container"),
    onImageUrlChange(newImageUrl) {
      imageUrl = newImageUrl;
    },
  });
  document.getElementById("add-button").addEventListener("click", (event) => {
    const text = document
      .getElementById("text-input")
      .value.replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
    onAddPostClick({
      description: text,
      imageUrl: imageUrl,
    });
  });
}
