import { navData } from "./data.js";
const navbar = document.querySelector(".navbar");
function renderNav(navItem) {
  const template = `
     <li class="level-1">
            <a class="level-1-link" href="https://vietjack.com/index.jsp">
              <p>${navItem.navName}</p>
            </a>
          </li>
    `;
  navbar.insertAdjacentHTML("beforeend", template);
}
navData.forEach((item) => {
  renderNav(item);
});

import { mainData } from "./data.js";
const main = document.querySelector(".main-content");
function renderMain(mainItem) {
  const text = `
    <div class="panel">
        <h4 class="panel-title">
            <a class="collapse">
                <span>${mainItem.mainName}</span>
                <i class="fa fa-angle-up" aria-hidden="true"></i>
            </a>
        </h4>
    </div>
    `;
  main.insertAdjacentHTML("beforeend", template);
}
mainData.forEach((item) => {
  renderMain(item);
});
