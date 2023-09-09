import React from 'react'
import "./sidebar.css"

function Sidebar() {
  const ANIMATION_DURATION = 300;

const SIDEBAR_EL = document.getElementById("sidebar");

const SUB_MENU_ELS = document.querySelectorAll(
  ".menu > ul > .menu-item.sub-menu"
);

const FIRST_SUB_MENUS_BTN = document.querySelectorAll(
  ".menu > ul > .menu-item.sub-menu > a"
);

const INNER_SUB_MENUS_BTN = document.querySelectorAll(
  ".menu > ul > .menu-item.sub-menu .menu-item.sub-menu > a"
);

class PopperObject {
  instance = null;
  reference = null;
  popperTarget = null;

  constructor(reference, popperTarget) {
    this.init(reference, popperTarget);
  }

  init(reference, popperTarget) {
    this.reference = reference;
    this.popperTarget = popperTarget;
    this.instance = Poppers.createPopper(this.reference, this.popperTarget, {
      placement: "right",
      strategy: "fixed",
      resize: true,
      modifiers: [
        {
          name: "computeStyles",
          options: {
            adaptive: false
          }
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: ["left", "right"]
          }
        }
      ]
    });

    document.addEventListener(
      "click",
      (e) => this.clicker(e, this.popperTarget, this.reference),
      false
    );

    const ro = new ResizeObserver(() => {
      this.instance.update();
    });

    ro.observe(this.popperTarget);
    ro.observe(this.reference);
  }

  clicker(event, popperTarget, reference) {
    if (
      SIDEBAR_EL.classList.contains("collapsed") &&
      !popperTarget.contains(event.target) &&
      !reference.contains(event.target)
    ) {
      this.hide();
    }
  }

  hide() {
    this.instance.state.elements.popper.style.visibility = "hidden";
  }
}

class Poppers {
  subMenuPoppers = [];

  constructor() {
    this.init();
  }

  init() {
    SUB_MENU_ELS.forEach((element) => {
      this.subMenuPoppers.push(
        new PopperObject(element, element.lastElementChild)
      );
      this.closePoppers();
    });
  }

  togglePopper(target) {
    if (window.getComputedStyle(target).visibility === "hidden")
      target.style.visibility = "visible";
    else target.style.visibility = "hidden";
  }

  updatePoppers() {
    this.subMenuPoppers.forEach((element) => {
      element.instance.state.elements.popper.style.display = "none";
      element.instance.update();
    });
  }

  closePoppers() {
    this.subMenuPoppers.forEach((element) => {
      element.hide();
    });
  }
}

const slideUp = (target, duration = ANIMATION_DURATION) => {
  const { parentElement } = target;
  parentElement.classList.remove("open");
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = `${duration}ms`;
  target.style.boxSizing = "border-box";
  target.style.height = `${target.offsetHeight}px`;
  target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};
const slideDown = (target, duration = ANIMATION_DURATION) => {
  const { parentElement } = target;
  parentElement.classList.add("open");
  target.style.removeProperty("display");
  let { display } = window.getComputedStyle(target);
  if (display === "none") display = "block";
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = 0;
  target.style.paddingTop = 0;
  target.style.paddingBottom = 0;
  target.style.marginTop = 0;
  target.style.marginBottom = 0;
  target.offsetHeight;
  target.style.boxSizing = "border-box";
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = `${duration}ms`;
  target.style.height = `${height}px`;
  target.style.removeProperty("padding-top");
  target.style.removeProperty("padding-bottom");
  target.style.removeProperty("margin-top");
  target.style.removeProperty("margin-bottom");
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};

const slideToggle = (target, duration = ANIMATION_DURATION) => {
  if (window.getComputedStyle(target).display === "none")
    return slideDown(target, duration);
  return slideUp(target, duration);
};

const PoppersInstance = new Poppers();

/**
 * wait for the current animation to finish and update poppers position
 */
const updatePoppersTimeout = () => {
  setTimeout(() => {
    PoppersInstance.updatePoppers();
  }, ANIMATION_DURATION);
};

/**
 * sidebar collapse handler
 */
document.getElementById("btn-collapse").addEventListener("click", () => {
  SIDEBAR_EL.classList.toggle("collapsed");
  PoppersInstance.closePoppers();
  if (SIDEBAR_EL.classList.contains("collapsed"))
    FIRST_SUB_MENUS_BTN.forEach((element) => {
      element.parentElement.classList.remove("open");
    });

  updatePoppersTimeout();
});

/**
 * sidebar toggle handler (on break point )
 */
document.getElementById("btn-toggle").addEventListener("click", () => {
  SIDEBAR_EL.classList.toggle("toggled");

  updatePoppersTimeout();
});

/**
 * toggle sidebar on overlay click
 */
document.getElementById("overlay").addEventListener("click", () => {
  SIDEBAR_EL.classList.toggle("toggled");
});

const defaultOpenMenus = document.querySelectorAll(".menu-item.sub-menu.open");

defaultOpenMenus.forEach((element) => {
  element.lastElementChild.style.display = "block";
});

/**
 * handle top level submenu click
 */
FIRST_SUB_MENUS_BTN.forEach((element) => {
  element.addEventListener("click", () => {
    if (SIDEBAR_EL.classList.contains("collapsed"))
      PoppersInstance.togglePopper(element.nextElementSibling);
    else {
      const parentMenu = element.closest(".menu.open-current-submenu");
      if (parentMenu)
        parentMenu
          .querySelectorAll(":scope > ul > .menu-item.sub-menu > a")
          .forEach(
            (el) =>
              window.getComputedStyle(el.nextElementSibling).display !==
                "none" && slideUp(el.nextElementSibling)
          );
      slideToggle(element.nextElementSibling);
    }
  });
});

/**
 * handle inner submenu click
 */
INNER_SUB_MENUS_BTN.forEach((element) => {
  element.addEventListener("click", () => {
    slideToggle(element.nextElementSibling);
  });
});
  return (
    <div>
      <div className="layout has-sidebar fixed-sidebar fixed-header">
        <aside id="sidebar" className="sidebar break-point-sm has-bg-image">
          <a id="btn-collapse" className="sidebar-collapser">
            <i className="ri-arrow-left-s-line" />
          </a>
          <div className="image-wrapper">
            <img src="assets/images/sidebar-bg.jpg" alt="sidebar background" />
          </div>
          <div className="sidebar-layout">
            <div className="sidebar-header">
              <div className="pro-sidebar-logo">
                <div>P</div>
                <h5>Pro Sidebar</h5>
              </div>
            </div>
            <div className="sidebar-content">
              <nav className="menu open-current-submenu">
                <ul>
                  <li className="menu-header">
                    <span> GENERAL </span>
                  </li>
                  <li className="menu-item sub-menu">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-vip-diamond-fill" />
                      </span>
                      <span className="menu-title">Components</span>
                      <span className="menu-suffix">
                        <span className="badge primary">Hot</span>
                      </span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Grid</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Layout</span>
                          </a>
                        </li>
                        <li className="menu-item sub-menu">
                          <a href="#">
                            <span className="menu-title">Forms</span>
                          </a>
                          <div className="sub-menu-list">
                            <ul>
                              <li className="menu-item">
                                <a href="#">
                                  <span className="menu-title">Input</span>
                                </a>
                              </li>
                              <li className="menu-item">
                                <a href="#">
                                  <span className="menu-title">Select</span>
                                </a>
                              </li>
                              <li className="menu-item sub-menu">
                                <a href="#">
                                  <span className="menu-title">More</span>
                                </a>
                                <div className="sub-menu-list">
                                  <ul>
                                    <li className="menu-item">
                                      <a href="#">
                                        <span className="menu-title">CheckBox</span>
                                      </a>
                                    </li>
                                    <li className="menu-item">
                                      <a href="#">
                                        <span className="menu-title">Radio</span>
                                      </a>
                                    </li>
                                    <li className="menu-item sub-menu">
                                      <a href="#">
                                        <span className="menu-title">
                                          Want more ?
                                        </span>
                                        <span className="menu-suffix">🤔</span>
                                      </a>
                                      <div className="sub-menu-list">
                                        <ul>
                                          <li className="menu-item">
                                            <a href="#">
                                              <span className="menu-prefix">🎉</span>
                                              <span className="menu-title">
                                                You made it{" "}
                                              </span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item sub-menu">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-bar-chart-2-fill" />
                      </span>
                      <span className="menu-title">Charts</span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Pie chart</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Line chart</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Bar chart</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item sub-menu">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-shopping-cart-fill" />
                      </span>
                      <span className="menu-title">E-commerce</span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Products</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Orders</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">credit card</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item sub-menu">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-global-fill" />
                      </span>
                      <span className="menu-title">Maps</span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Google maps</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Open street map</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item sub-menu">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-paint-brush-fill" />
                      </span>
                      <span className="menu-title">Theme</span>
                    </a>
                    <div className="sub-menu-list">
                      <ul>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Dark</span>
                          </a>
                        </li>
                        <li className="menu-item">
                          <a href="#">
                            <span className="menu-title">Light</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-header" style={{ paddingTop: 20 }}>
                    <span> EXTRA </span>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-book-2-fill" />
                      </span>
                      <span className="menu-title">Documentation</span>
                      <span className="menu-suffix">
                        <span className="badge secondary">Beta</span>
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-calendar-fill" />
                      </span>
                      <span className="menu-title">Calendar</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="#">
                      <span className="menu-icon">
                        <i className="ri-service-fill" />
                      </span>
                      <span className="menu-title">Examples</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sidebar-footer">
              <div className="footer-box">
                <div>
                  <img
                    className="react-logo"
                    src="https://user-images.githubusercontent.com/25878302/213938106-ca8f0485-3f30-4861-9188-2920ed7ab284.png"
                    alt="react"
                  />
                </div>
                <div style={{ padding: "0 10px" }}>
                  <span style={{ display: "block", marginBottom: 10 }}>
                    Pro sidebar is also available as a react package
                  </span>
                  <div style={{ marginBottom: 15 }}>
                    <img
                      alt="preview badge"
                      src="https://img.shields.io/github/stars/azouaoui-med/react-pro-sidebar?style=social"
                    />
                  </div>
                  <div>
                    <a
                      href="https://github.com/azouaoui-med/react-pro-sidebar"
                      target="_blank"
                    >
                      Check it out!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div id="overlay" className="overlay" />
        <div className="layout">
          <main className="content">
            <div>
              <a id="btn-toggle" href="#" className="sidebar-toggler break-point-sm">
                <i className="ri-menu-line ri-xl" />
              </a>
              <h1 style={{ marginBottom: 0 }}>Pro Sidebar</h1>
              <span style={{ display: "inline-block" }}>
                Responsive layout with advanced sidebar menu built with SCSS and
                vanilla Javascript
              </span>
              <br />
              <span>
                Full Code and documentation available on
                <a
                  href="https://github.com/azouaoui-med/pro-sidebar-template"
                  target="_blank"
                >
                  Github
                </a>
              </span>
              <div style={{ marginTop: 10 }}>
                <a
                  href="https://github.com/azouaoui-med/pro-sidebar-template"
                  target="_blank"
                >
                  <img
                    alt="GitHub stars"
                    src="https://img.shields.io/github/stars/azouaoui-med/pro-sidebar-template?style=social"
                  />
                </a>
                <a
                  href="https://github.com/azouaoui-med/pro-sidebar-template"
                  target="_blank"
                >
                  <img
                    alt="GitHub forks"
                    src="https://img.shields.io/github/forks/azouaoui-med/pro-sidebar-template?style=social"
                  />
                </a>
              </div>
            </div>
            <div>
              <h2>Features</h2>
              <ul>
                <li>Fully responsive</li>
                <li>Collapsable sidebar</li>
                <li>Multi level menu</li>
                <li>RTL support</li>
                <li>Customizable</li>
              </ul>
            </div>
            <div>
              <h2>Resources</h2>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/azouaoui-med/css-pro-layout"
                  >
                    Css Pro Layout
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/popperjs/popper-core">
                    {" "}
                    Popper Core
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://remixicon.com/">
                    {" "}
                    Remix Icons
                  </a>
                </li>
              </ul>
            </div>
            <footer className="footer">
              <small style={{ marginBottom: 20, display: "inline-block" }}>
                © 2023 made with
                <span style={{ color: "red", fontSize: 18 }}>❤</span> by -
                <a target="_blank" href="https://azouaoui.netlify.com">
                  {" "}
                  Mohamed Azouaoui{" "}
                </a>
              </small>
              <br />
              <div className="social-links">
                <a href="https://github.com/azouaoui-med" target="_blank">
                  <i className="ri-github-fill ri-xl" />
                </a>
                <a href="https://twitter.com/azouaoui_med" target="_blank">
                  <i className="ri-twitter-fill ri-xl" />
                </a>
                <a href="https://codepen.io/azouaoui-med" target="_blank">
                  <i className="ri-codepen-fill ri-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-azouaoui/"
                  target="_blank"
                >
                  <i className="ri-linkedin-box-fill ri-xl" />
                </a>
              </div>
            </footer>
          </main>
          <div className="overlay" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar