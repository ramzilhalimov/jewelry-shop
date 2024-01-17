import { renderAddPostPageComponent } from "./components/add-post-page-component.js";
import {
  MAIN_PAGE,
  ADD_POSTS_PAGE,
  AUTH_PAGE,
  LOADING_PAGE,
  PRODUCTS_PAGE,
  USER_PRODUCTS_PAGE,
} from "./routes.js";
import { renderProductsPageComponent } from "./components/products-page-component.js";
import { renderLoadingPageComponent } from "./components/loading-page-component.js";
import { getUserFromLocalStorage } from "./helpers.js";
import { renderUserPostsPageComponent } from "./components/user-posts-page-component.js";
import { renderHeaderComponent } from "./components/header-component.js";

export let user = getUserFromLocalStorage();
export let page = null;
export let posts = [];

export const goToPage = (newPage) => {
  if (
    [
      MAIN_PAGE,
      PRODUCTS_PAGE,
      AUTH_PAGE,
      ADD_POSTS_PAGE,
      USER_PRODUCTS_PAGE,
      LOADING_PAGE,
    ].includes(newPage)
  ) {
    if (newPage === MAIN_PAGE) {
    }
    page = newPage;
    renderApp();
    return;
  }

  throw new Error("страницы не существует");
};

const renderApp = () => {
  const appEl = document.getElementById("app");
  if (page === LOADING_PAGE) {
    return renderLoadingPageComponent({
      appEl,
      user,
      goToPage,
    });
  }

  if (page === ADD_POSTS_PAGE) {
    return renderAddPostPageComponent({
      appEl,
      onAddPostClick({ description, imageUrl }) {
        addPosts({
          description: description,
          imageUrl: imageUrl,
        })
          .then(() => {
            goToPage(PRODUCTS_PAGE);
          })
          .catch(() => {
            document
              .querySelector(".form-error")
              .classList.remove("--not-entered");
          });
      },
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
    return renderUserPostsPageComponent({
      appEl,
    });
  }
};

goToPage(MAIN_PAGE);
