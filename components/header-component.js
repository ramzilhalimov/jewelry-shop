export function renderHeaderComponent({ element }) {
  element.innerHTML = `
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
      <h1 class="header__heading">Долго, дорого, богато!</h1>
      <button class="header__button">Перейти в каталог</button>
      <img class="header__brands" src="/assets/images/first-screen__brands.png" alt="brands"></img>
  </header>
  <div class="for center"
      <div class="for__title">К мероприятиям</div>
      <h2 class="for__heading">Настоящая красота здесь!</h2>
      <img class="for__brands" src="/assets/images/second-screen__list.png"></img> 
      <div class="for__content center">
          <div class="for__item for_item_1"></div>
          <div class="for__item for_item_2"></div>
          <div class="for__item for_item_3"></div>
          <div class="for__item for_item_4"></div>
          <div class="for__item for_item_5"></div>
          <div class="for__item for_item_6"></div>
          </div>
      </div>
  </div>
  <div class= "section center"
  <div class="section__content ">
  <div class="section__title">Не знаете, что выбрать?</div>
  <h2 class="section__heading">Посетите наши салоны в Москве</h2>
 <p class="section__text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</p>
 <button class="section__button">Наши салоны</button>
 </div>
</div>
<section class="product-box center">
<div class="product-box__title">Полезные статьи</div>
<h2 class="product-box__heading">Лучшие советы по подбору дорогих подарков</h2>
<div class="product-box__content" >
  <div class="product-box__item product-box_item_1"></div>
  <div class="product-box__item product-box_item_2"></div>
  <div class="product-box__item product-box_item_3"></div>
</div>
<button class="product-box__button">Читать наш блог</button>
  </div>
</div>
</section>
<section class="social-box center">
<div class="social-box__title">#ojjo_jewerly</div>
<h2 class="social-box__heading">Мы в социальных сетях</h2>
<div class="social-box__content" >
  <div class="social-box__item social-box_item_1 social-box__item_big"></div>
  <div class="social-box__item social-box_item_2 "></div>
  <div class="social-box__item social-box_item_3"></div>
  <div class="social-box__item social-box_item_4"></div>
  <div class="social-box__item social-box_item_5"></div>
  <div class="social-box__item social-box_item_6 social-box__item_big"></div>
</div>
  </div>
</div>
</section>
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

  return element;
}
