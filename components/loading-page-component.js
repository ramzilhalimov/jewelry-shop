import { renderHeaderComponent } from "./header-component.js";

export function renderLoadingPageComponent({ appEl, goToPage }) {
  const appHtml = `
              <div class="page-container">
                <div class="header "></div>
                <div class="loading-page">
                  <div class="loader"><div></div><div></div><div></div></div>
                </div>
              </div>`;

  appEl.innerHTML = appHtml;

  renderHeaderComponent({
    appEl: appEl,
    goToPage,
  });
}
