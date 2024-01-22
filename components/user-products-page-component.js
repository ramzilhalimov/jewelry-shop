import { LOADING_PAGE, MAIN_PAGE, PRODUCTS_PAGE } from "../routes.js";
import { renderHeaderComponent } from "./header-component.js";
import { goToPage } from "../index.js";
import { productsData } from "../ products.js";

export function renderUserProductsPageComponent({ appEl }) {
  const productsHtml = productsData
    .slice(0, 3)
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
  <nav class="bread__list center listbar ">
  <button class="listbar__link">Главная  /</button>
  <button class="listbar__catalog">Каталог  /</button>
  <a href="#"  class="listbar__link">Категория  /</a>
  <a href="#"  class="listbar__link">Подвеска Dolce & Gabarra</a>
  </nav>
  <div class="main-container center">
  <div class="photo-container">
      <img src="/assets/images/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg"  alt="Главное фото">
      <div class="sub-photos">
          <img src="/assets/images/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg" alt="Фото 1">
          <img src="/assets/images/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg" alt="Фото 2">
          <img src="/assets/images/Apple_iPhone_12_vs_Apple_iPad_Mini_6_21518.jpg" alt="Фото 3">
      </div>
  </div>
  <div class="details-container">
  <div class="details-content">
      <h1>Подвеска Dolce & Gabbara</h1>
      <nav class="details__list  detailsbar ">
      <a href="#"  class="detailsbar__link">Категория: </a>
      <a href="#"  class="detailsbar__link">Подвески  </a>
      <a href="#"  class="detailsbar__link">Бренд:  </a>
      <a href="#"  class="detailsbar__link">Dolce & Gabarra</a>
      </nav>
      <p class ="details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.
      Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. 
      Et nulla sit convallis orci est, fames sit luctus lacus. 
      </p>
      <p class="price">200 000 ₽ </p>
      <div class = "details-button">  
      <button class="buy-button">Купить</button>
      <button class="add-to-cart-button">Добавить в корзину</button>
      </div>
  </div>
  </div>
</div>

   <div class= "section-product center">
   <div class="section-product__content">
   <div class="section-product__nav">
  <p class="section-product__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.
  Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.</p>
  <button class="read-more-btn">Читать полностью</button>
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
 <section class="product-box center">
<div class="product-box__title">Мы подготовили для вас кое-что еще</div>
<h2 class="product-box__heading">Товары, которые могут Вам понравиться</h2>
<div class="products center">
${productsHtml}
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
        <button class="subscribebar__btn">Отправить</button>
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
  //Переход в каталог
  document.querySelector(".listbar__catalog").addEventListener("click", () => {
    goToPage(PRODUCTS_PAGE);
  });
  const button = document.querySelector(".subscribebar__btn");
  button.addEventListener("click", sendDataToServer);

  // Функция для отображения полного текста
  const readMoreButton = document.querySelector(".read-more-btn");
  const productText = document.querySelector(".section-product__text");

  // Проверяем, что оба элемента существуют, прежде чем добавить обработчик
  if (readMoreButton && productText) {
    readMoreButton.addEventListener("click", function () {
      // При клике меняем стиль текста, чтобы он отображался полностью
      productText.style.whiteSpace = "normal";
      // И меняем текст на кнопке
      readMoreButton.textContent = "Скрыть описание";
    });
  } else {
    console.error("Не удалось найти один из элементов");
  }

  // Функция для отправки данных на сервер
  function sendDataToServer() {
    // Получаем значение поля email
    const email = document.querySelector(".subscribebar__email").value;

    // объект, который будет содержать данные для отправки на сервер
    const data = { email: email };

    const url = "здесь_адрес_запроса";

    // параметры запроса
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    //  запрос на сервер
    fetch(url, options)
      .then((response) => {
        if (response.ok) {
          return response.json(); // если запрос прошел успешно, возвращаем JSON
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        // Обрабатываем ответ от сервера
        console.log(data);
      })
      .catch((error) => {
        // Обрабатываем ошибки
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }
}
