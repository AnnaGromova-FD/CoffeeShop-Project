/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animation.js */ "./src/js/modules/animation.js");
/* harmony import */ var _modules_promTimer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/promTimer.js */ "./src/js/modules/promTimer.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/filter.js */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_calculator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator.js */ "./src/js/modules/calculator.js");





window.addEventListener('DOMContentLoaded', () => {
  Object(_modules_animation_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_promTimer_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '.modal');
  Object(_modules_filter_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_calculator_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./src/js/modules/animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/animation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function animation() {
  //Animation on scroll
  const animItems = document.querySelectorAll('._anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    animOnScroll();
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 6;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('active');
        }
      }
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (animation);

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.js */ "./src/js/modules/modal.js");


function calculator() {
  // Calculator
  const parseRequestURL = () => {
    const url = location.hash.slice(2),
          request = {};
    request.resource = url.split('/');
    return request;
  };

  const selectCoffee = document.getElementById('select-coffee');
  selectCoffee.addEventListener('click', goToCoffePage);

  function goToCoffePage() {
    event.preventDefault();
    location.hash = `#/select-coffee`;
    selectCoffee.removeEventListener('click', goToCoffePage);

    if (location.hash === `#/select-coffee`) {
      renderCalculator();
    }

    function renderCalculator() {
      return new Promise(resolve => {
        let html;
        html = `
            <section class="calculating calculating__page">
            <div class=" container calc-container">
                <div class="title-no-anim">
                <a href="#/" id="select-coffee">Lets select coffee to suit your personal taste
                </a> 
                </div>
                
                <div class="calculating__field">
                    <div class="calculating__subtitle">
                        How do you usually brew your coffee?
                    </div>
                    <div class="calculating__choose" id="how">
                        <div id="press" data-filter="kenya" class="calculating__choose-item">French Press</div>
                        <div id="machine" data-filter="brasil" class="calculating__choose-item calculating__choose-item_active">Espresso machine</div>
                        <div id="cazve" data-filter="columbia" class="calculating__choose-item">Cezve</div>
                    </div>

                    <div class="calculating__subtitle">
                        What do you add to your coffee?
                    </div>
                    <div class="calculating__choose" id="addings">
                        <div id ="milk" data-filter="columbia" class="calculating__choose-item calculating__choose-item_active">Milk</div>
                        <div id="sugar" data-filter="brasil" class="calculating__choose-item">Sugar</div>
                        <div id="syrop" data-filter="kenya" class="calculating__choose-item">Syrop</div>
                        <div id="nothing" data-filter="brasil" class="calculating__choose-item">Nothing</div>
                    </div>

                    <div class="calculating__subtitle">
                        Preffered coffee roast level
                    </div>
                    <div class="calculating__choose" id="roast">
                        <div id="light" data-filter="kenya" class="calculating__choose-item">Light</div>
                        <div id="medium" data-filter="brasil" class="calculating__choose-item calculating__choose-item_active">Medium</div>
                        <div id="dark" data-filter="columbia" class="calculating__choose-item">Dark</div>
                    </div>

                    <div class="calculating__subtitle">
                        What coffee flavour do you preffer?
                    </div>
                    <div class="calculating__choose" id="flavour">
                        <div id="bitter" data-filter="columbia" class="calculating__choose-item">Bitter</div>
                        <div id="sweet" data-filter="brasil" class="calculating__choose-item calculating__choose-item_active">Sweet</div>
                        <div id="sour" data-filter="kenya" class="calculating__choose-item">Sour</div>
                        <div id="solty" data-filter="columbia" class="calculating__choose-item">Solty</div>
                        <div id="notsure" data-filter="brasil" class="calculating__choose-item">Not sure</div>
                    </div>

                    <div class="calculating__total">
                        <div class="title-no-anim">
                            We recommend:
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="line"></div>

        <section class="catalog">
            <div class="container">
                <div class="subtitle-black subtitle-black__calc-page" id="our-coffee">Our coffee
                </div>
                
                <div class="coffee-block">
                    <div class="coffee__item brasil">
                        <img src="img/tabs/solimo_2pack.png" alt="aromistico">
                        <h3 class="coffee__item-subtitle">
                            Solimo Coffee Beans 2 kg
                        </h3>
                        <div class="coffee__item-country-name">
                            Brazil
                        </div>
                        <div class="coffee__item--price-block">
                            <button class="btn" data-modal>More</button>
                            <div class="coffee__item-price">10.73$</div> 
                        </div>
                    </div>
                    <div class="coffee__item kenya">
                        <img src="img/tabs/presto.png" alt="aromistico">
                        <h3 class="coffee__item-subtitle">
                            Presto Coffee Beans 1 kg
                        </h3>
                        <div class="coffee__item-country-name">
                            Kenya
                        </div>
                        <div class="coffee__item--price-block">
                            <button class="btn" data-modal>More</button>
                            <div class="coffee__item-price">15.99$</div> 
                        </div>
                    </div>
                    <div class="coffee__item brasil">
                        <img src="img/tabs/aromistico.png" alt="aromistico">
                        <h3 class="coffee__item-subtitle">
                            AROMISTICO Coffee 1 kg
                        </h3>
                        <div class="coffee__item-country-name">
                            Brasil
                        </div>
                        <div class="coffee__item--price-block">
                            <button class="btn" data-modal>More</button>
                            <div class="coffee__item-price">6.99$</div> 
                        </div>
                    </div>
                    <div class="coffee__item columbia">
                        <img src="img/tabs/solimo_2pack.png" alt="aromistico">
                        <h3 class="coffee__item-subtitle">
                            Solimo Coffee Beans 2 kg
                        </h3>
                        <div class="coffee__item-country-name">
                            Columbia
                        </div>
                        <div class="coffee__item--price-block">
                            <button class="btn" data-modal>More</button>
                            <div class="coffee__item-price">10.73$</div> 
                        </div>
                    </div>
                    <div class="coffee__item brasil" >
                        <img src="img/tabs/presto.png" alt="aromistico">
                        <h3 class="coffee__item-subtitle">
                            Presto Coffee Beans 1 kg
                        </h3>
                        <div class="coffee__item-country-name">
                            Brasil
                        </div>
                        <div class="coffee__item--price-block">
                            <button class="btn" data-modal>More</button>
                            <div class="coffee__item-price">15.99$</div> 
                        </div>
                    </div>
                    <div class="coffee__item kenya">
                        <img src="img/tabs/aromistico.png" alt="aromistico">
                        <h3 class="coffee__item-subtitle">
                            AROMISTICO Coffee 1 kg
                        </h3>
                        <div class="coffee__item-country-name">
                            Kenya
                        </div>
                        <div class="coffee__item--price-block">
                            <button class="btn" data-modal>More</button>
                            <div class="coffee__item-price">6.99$</div> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="modal">
            <div class="modal__dialog">
                <div class="modal__content">
                    <div class="modal__close" data-close>&times;</div>  
                    <div class="modal--img">
                        <img src="img/coffee-page/aromostico_coffee-page.jpg" alt="aromistico">
                    </div>
                    <div class="coffee--descr-block">
                        <div class="subtitle-black subtitle-9pt">About it</div>
                        <div class="devider devider-black">
                            <div class=" devider__line devider__line-black"></div>
                            <img src="icons/3 coffee-beans-black.png" alt="3 coffee-beans">
                            <div class="devider__line devider__line-black"></div>
                        </div>
                        <div class="subtitle__descr descr-mb modal-descr">
                            <p><strong>Country:</strong>  Brasil</p>
                            <p><strong>Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p><strong>Price:</strong> <span> 16.99$</span></p>
                        </div>
                        <!-- <button class="btn btn-modal">Go to coffee page</button> -->
                    </div>
                </div>
            </div>   
        </div> 
        `;
        resolve(html);
        reject('error');
      });
    }

    renderCalculator().then(html => document.body.innerHTML = html).then(() => getInformation('#how div', 'calculating__choose-item_active')).then(() => getInformation('#addings div', 'calculating__choose-item_active')).then(() => getInformation('#roast div', 'calculating__choose-item_active')).then(() => getInformation('#flavour div', 'calculating__choose-item_active')).then(() => Object(_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-modal]', '.modal')).catch(error => console.log(`Возникла ошибка при загрузке: ${error}`));
  }

  function getInformation(selector, activeClass) {
    const chooseBlock = document.querySelectorAll(selector),
          coffeeItems = document.querySelectorAll('.coffee__item');
    chooseBlock.forEach(elem => {
      elem.addEventListener('click', e => {
        const currentCategory = e.target.dataset.filter;
        chooseBlock.forEach(elem => {
          elem.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        filter(currentCategory, coffeeItems);
      });

      function filter(category, items) {
        items.forEach(item => {
          const isItemFiltered = !item.classList.contains(category) && !item.classList.contains('best');

          if (isItemFiltered) {
            item.classList.add('hide', 'fade');
          } else {
            item.classList.remove('hide');
          }
        });
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function filter() {
  //  Filter by country origin
  const filterByCountry = () => {
    const countryBtn = document.querySelectorAll('.country-tab'),
          coffeeItems = document.querySelectorAll('.coffee__item');
    countryBtn.forEach(button => {
      button.addEventListener('click', () => {
        const currentCategory = button.dataset.filter;
        button.classList.toggle('active');
        filter(currentCategory, coffeeItems);
      });
    });

    function filter(category, items) {
      items.forEach(item => {
        const isItemFiltered = !item.classList.contains(category) && !item.classList.contains('best'),
              isShowAll = category.toLowerCase() === 'all';

        if (isItemFiltered && !isShowAll) {
          item.classList.add('hide', 'fade');
        } else {
          item.classList.remove('hide');
        }
      });
    }
  };

  filterByCountry();
}

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, closeModal, openModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function openModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
}

function modal(triggerSelector, modalSelector) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);
  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector));
  });
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
      closeModal(modalSelector);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);



/***/ }),

/***/ "./src/js/modules/promTimer.js":
/*!*************************************!*\
  !*** ./src/js/modules/promTimer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function promTimer() {
  // Promotion timer
  const deadline = '2021-07-10';

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          seconds = Math.floor(t / 1000 % 60),
          minutes = Math.floor(t / 1000 / 60 % 60),
          hours = Math.floor(t / (1000 * 60 * 60) % 24);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    return num = num >= 0 && num < 10 ? `0${num}` : num;
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector("#days"),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (promTimer);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map