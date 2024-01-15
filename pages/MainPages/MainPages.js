export function renderMainPages({ element }) {
  element.innerHTML = `
    <body>
      <header class="header center">
        <div class="header__content">
          <a href="">
            <img class="header__logo" src="img/logo.svg" alt="logo" />
          </a>
          <input placeholder="Поиск" class="header__input" type="text" />
          <nav class="header__nav navbar">
            <a href="#" class="navbar__link">
              Каталог
            </a>
            <a href="#" class="navbar__link">
              Корзина
            </a>
          </nav>
          <div class="nav_mob"></div>
        </div>
        <h1 class="header__heading">Всё, чего заслуживает ваш дом</h1>
        <p class="header__text">Наша мебель-ваше отражение</p>
        <a href="#" class="header__link">
          Перейти в каталог
        </a>
      </header>
      <div class="for center">
        <h2 class="for__heading">Мебель для ...</h2>
        <div class="for__content">
          <div class="for__item for_item_1 for__item_big">ОТДЫХА</div>
          <div class="for__item for_item_2 for__item_big">РАБОТЫ</div>
          <div class="for__item for_item_3">КУХНИ</div>
          <div class="for__item for_item_4">ДЕТСКОЙ</div>
          <div class="for__item for_item_5">ВАННОЙ</div>
        </div>
      </div>
      <section class="product-box center">
        <h2 class="product-box__heading">Специальные предложения</h2>
        <div class="product-box__content">
          <div class="product-box__product productbar">
            <img src="img/Voda.jpg" alt="product" />
            <h3 class="productbar__title">Люстра VODA</h3>
            <p class="productbar__text">
              Основание из полированной нержавеющей стали, придает оригинальный
              парящий эффект.
            </p>
            <div class="product-box__price pricebar">
              <p class="pricebar__text">45 000 руб.</p>
              <p class="pricebar__sale">67 000 руб.</p>
            </div>
          </div>
          <div class="product-box__product productbar">
            <img src="img/ronald.jpg" alt="product" />
            <h3 class="productbar__title">Диван RONALD</h3>
            <p class="productbar__text">
              Модель отличается простотой линий и форм, отсутствием броского
              декора.
            </p>
            <div class="product-box__price pricebar">
              <p class="pricebar__text">156 000 руб.</p>
              <p class="pricebar__sale">198 000 руб.</p>
            </div>
          </div>
          <div class="product-box__product productbar">
            <img src="img/vent.jpg" alt="product" />
            <h3 class="productbar__title">Комод VENT</h3>
            <p class="productbar__text">
              Европейский дуб - отличается особой прочностью и стабильностью.
            </p>
            <div class="product-box__price pricebar">
              <p class="pricebar__text">34 000 руб.</p>
              <p class="pricebar__sale">45 000 руб.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="product-box center">
        <h2 class="product-box__heading">Каталог товаров</h2>
        <div class="product-box__content">
          <div class="product-box__product productbar">
            <img src="img/Tatran.png" alt="product" />
            <h3 class="productbar__title">Кровать TATRAN</h3>
            <p class="productbar__text">
              Основание из полированной нержавеющей стали, придает оригинальный
              парящий эффект.
            </p>
            <div class="product-box__price pricebar">
              <p class="pricebar__text">120 000 руб.</p>
            </div>
          </div>
          <div class="product-box__product productbar">
            <img src="img/vilora.jpg" alt="product" />
            <h3 class="productbar__title">Кресло VILORA</h3>
            <p class="productbar__text">
              Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и
              приятная на ощупь ткань
            </p>
            <div class="product-box__price pricebar">
              <p class="pricebar__text">21 000 руб.</p>
            </div>
          </div>
          <div class="product-box__product productbar">
            <img src="img/menu.png" alt="product" />
            <h3 class="productbar__title">Стол MENU</h3>
            <p class="productbar__text">
              Для того чтобы трапезничать было приятно, необходим правильный
              обеденный стол.
            </p>
            <div class="product-box__price pricebar">
              <p class="pricebar__text">34 000 руб.</p>
            </div>
          </div>
          <div class="product-box__product productbar">
            <img src="img/askesta.png" alt="product" />
            <h3 class="productbar__title">Кресло ASKESTA</h3>
            <p class="productbar__text">
              Высокоэластичный пенополиуретан в «начинке» кресла надежен и
              долговечен.
            </p>
            <div class="product-box__price pricebar">
              <p class="pricebar__text">68 000 руб.</p>
            </div>
          </div>
          <div class="product-box__product productbar">
            <img src="img/norman.png" alt="product" />
            <h3 class="productbar__title">Стол NORMAN</h3>
            <p class="productbar__text">
              Прекрасно переносит солнечные лучи, перепады влажности и любые
              осадки..
            </p>
            <div class="product-box__price pricebar">
              <p class="pricebar__text">40 000 руб.</p>
            </div>
          </div>
          <div class="product-box__product productbar">
            <img src="img/nastan.png" alt="product" />
            <h3 class="productbar__title">Диван NASTAN</h3>
            <p class="productbar__text">
              Модель отличается простотой линий и форм, отсутствием броского
              декора.
            </p>
            <div class="product-box__price pricebar">
              <p class="pricebar__text">80 000 руб.</p>
            </div>
          </div>
          <a href="catalog.html" class="product-box__link">
            Перейти в каталог
          </a>
        </div>
      </section>
      <footer class="footer center">
        <div class="footer__content">
          <div class="footer__logo ">
            <a href="index.html">
              <img src="img/lofof.png" alt="logo" />
            </a>
          </div>
          <div class="footer__info">
            <nav class="footer__item">
              <h4 class="footer__heading">Меню</h4>
              <a href="#" class="footer__link">
                Главная
              </a>
              <a href="#" class="footer__link">
                Каталог
              </a>
              <a href="#" class="footer__link">
                Корзина
              </a>
            </nav>
            <div class="footer__item">
              <h4 class="footer__heading">Контакты</h4>
              <a href="#" class="footer__link">
                +7908 800 80 80
              </a>
              <a href="#" class="footer__link">
                help@interier.com
              </a>
              <div class="footer__icons iconbar"></div>
            </div>
          </div>
          <form action="#" class="footer__form formbar">
            <p class="formbar__text">Получайте наши новости и обновления</p>
            <div class="formbar__item">
              <input
                placeholder="Email Address "
                class="formbar__email"
                type="email"
              />
              <button class="formbar__btn">Подписаться</button>
            </div>
          </form>
        </div>
      </footer>
    </body>
`;
}
