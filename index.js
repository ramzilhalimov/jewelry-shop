import {
  MAIN_PAGE,
  CONTACT_PAGE,
  AUTH_PAGE,
  LOADING_PAGE,
  PRODUCTS_PAGE,
  USER_PRODUCTS_PAGE,
} from "./routes.js";
import { renderProductsPageComponent } from "./components/products-page-component.js";
import { renderLoadingPageComponent } from "./components/loading-page-component.js";
import { getUserFromLocalStorage } from "./helpers.js";
import { renderUserProductsPageComponent } from "./components/user-products-page-component.js";
import { renderHeaderComponent } from "./components/header-component.js";
import { renderContactComponent } from "./components/contact-component.js";

export let user = getUserFromLocalStorage();
export let page = null;

export const goToPage = async (newPage) => {
  if (
    ![
      MAIN_PAGE,
      PRODUCTS_PAGE,
      AUTH_PAGE,
      CONTACT_PAGE,
      USER_PRODUCTS_PAGE,
      LOADING_PAGE,
    ].includes(newPage)
  ) {
    throw new Error("Страница не существует");
  }

  if (newPage === PRODUCTS_PAGE) {
    try {
      renderLoadingPageComponent({
        appEl: document.getElementById("app"),
        goToPage,
      });
      // const newProducts = await fetchNewProducts();
      // products = newProducts;
      page = PRODUCTS_PAGE;
      renderApp();
    } catch (error) {
      console.error(error);
      goToPage(PRODUCTS_PAGE);
    }
  } else {
    page = newPage;
    renderApp();
    return;
  }
};

const renderApp = () => {
  const appEl = document.getElementById("app");
  if (page === LOADING_PAGE) {
    return renderLoadingPageComponent({
      appEl,
      // user: currentUser,
      goToPage,
    });
  }

  if (page === MAIN_PAGE) {
    return renderHeaderComponent({
      appEl,
    });
  }
  if (page === PRODUCTS_PAGE) {
    return renderProductsPageComponent({
      appEl,
    });
  }

  if (page === USER_PRODUCTS_PAGE) {
    return renderUserProductsPageComponent({
      appEl,
    });
  }

  if (page === CONTACT_PAGE) {
    return renderContactComponent({
      appEl,
    });
  }
  throw new Error("Не удалось определить страницу для отображения");
};

goToPage(MAIN_PAGE);
