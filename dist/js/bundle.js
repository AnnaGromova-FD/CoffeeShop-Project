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

/***/ "./src/js/helpers/utils.js":
/*!*********************************!*\
  !*** ./src/js/helpers/utils.js ***!
  \*********************************/
/*! exports provided: parseRequestURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseRequestURL", function() { return parseRequestURL; });
const parseRequestURL = () => {
  const url = location.hash.slice(2),
        request = {};
  request.resource = url.split('/');
  return request;
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/utils */ "./src/js/helpers/utils.js");
/* harmony import */ var _views_calc_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/calc-page.component */ "./src/js/views/calc-page.component.js");
/* harmony import */ var _views_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/home-page.component */ "./src/js/views/home-page.component.js");
/* harmony import */ var _views_error404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/error404 */ "./src/js/views/error404.js");





window.onload = () => {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};

const Routes = {
  '/': _views_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"],
  '/select-coffee': _views_calc_page_component__WEBPACK_IMPORTED_MODULE_1__["CalcPage"]
};

function router() {
  const home = document.getElementById('home');
  const request = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["parseRequestURL"])(),
        parsedURL = `/${request.resource || ''}`,
        page = Routes[parsedURL] ? new Routes[parsedURL]() : new _views_error404__WEBPACK_IMPORTED_MODULE_3__["Error404"]();
  page.render().then(html => {
    home.innerHTML = html;
    page.afterRender();
  });
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);

/***/ }),

/***/ "./src/js/modules/animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/animation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//Animation on scroll
function animation() {
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

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//  Filter by country origin
function filter() {
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

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");


function forms(formsSelector) {
  const forms = document.querySelectorAll(formsSelector),
        nameInput = document.getElementById('name'),
        phoneInput = document.getElementById('tel');
  const message = {
    loading: `../img/form/spinner.svg`,
    success: `We will call you back as soon as possible!`,
    failure: `Something went wrong...`
  };
  forms.forEach(item => postData(item));
  let nameInputRegEx = /[A-zА-Я\s]{2,12}/ig,
      phoneInputRegEx = /^((\+?375-?|8-?\s?0\s?))?\(?0?(29|25|44|33)\)?-?\s?[1-9]\s?(\d{2}-?\s?){2}\d{2}$/;

  function postData(form) {
    form.addEventListener('submit', e => {
      let isValidNameInput = nameInputRegEx.test(nameInput.value.trim()),
          isValidphoneInput = phoneInputRegEx.test(phoneInput.value.trim());

      if (!isValidNameInput) {
        clearError();
        showError(nameInput);
        e.preventDefault();
        return false;
      }

      if (!isValidphoneInput) {
        clearError();
        showError(phoneInput);
        e.preventDefault();
        return false;
      }

      e.preventDefault();
      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.classList.add('message');
      form.insertAdjacentElement('afterend', statusMessage);
      const request = new XMLHttpRequest();
      request.open('POST', 'https://reqres.in/api/users');
      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);
      const object = {};
      formData.forEach((value, key) => object[key] = value);
      const json = JSON.stringify(object);
      request.send(json);
      request.addEventListener('load', () => {
        try {
          let statusType = Math.round(request.status / 100);

          if (statusType === 2) {
            console.log(request.response);
            showThanksModal(message.success);
            statusMessage.remove();
            form.reset();
          } else {
            showThanksModal(message.failure);
          }
        } catch {
          console.error(this.status);
          console.log(message.failure);
        }
      });

      request.onerror = () => {
        console.error(this.status);
        showThanksModal(message.failure);
      };
    }, false);
  }

  function showError(input) {
    input.classList.add('invalid');
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = input === nameInput ? `Type 2 to 12 letters, please` : `Type your phone with code, please`;
    input.insertAdjacentElement('beforeBegin', error);
    input.value = '';
    setTimeout(() => {
      input.classList.remove('invalid');
      clearError();
    }, 3000);
    return false;
  }

  function clearError() {
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => error.remove());
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])('.modal');
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').appendChild(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeModal"])('.modal');
    }, 4000);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (forms);

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
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
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
/*! exports provided: promTimer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promTimer", function() { return promTimer; });
function promTimer(id, deadline) {
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
      t.total <= 0 && clearInterval(timeInterval);
    }
  }

  setClock(id, deadline);
}
/* harmony default export */ __webpack_exports__["default"] = (promTimer);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function carousel() {
  let position = 0,
      slideIndex = 1,
      width = 241;
  const dots = [];
  const slides = document.querySelectorAll('.coffee__item.best'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        slidesWrapper = document.querySelector('.coffee-block__slider'),
        slidesField = document.querySelector('.coffee-block__inner');

  function createDots() {
    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    slidesWrapper.append(indicators);

    for (let i = 0; i < slides.length; ++i) {
      const dot = document.createElement('li');
      dot.setAttribute('data-slide-to', i + 1);
      dot.classList.add('dot');

      if (i === 0) {
        dot.classList.add('active');
      }

      indicators.append(dot);
      dots.push(dot);
    }
  }

  createDots();

  function setActiveDot() {
    dots.forEach(dot => dot.style.opacity = ".5");
    dots[slideIndex - 1].style.opacity = 1;
  }

  function slideElement() {
    slidesField.style.transform = `translateX(-${position}px)`;
  }

  next.addEventListener('click', () => {
    position === width * 3 ? position = 0 : position += width;
    slideElement();
    slideIndex == slides.length ? slideIndex = 1 : slideIndex++;
    setActiveDot();
  });
  prev.addEventListener('click', () => {
    position === 0 || position === slides.length ? position = width * 3 : position -= width;
    slideElement();
    slideIndex == 1 ? slideIndex = slides.length : slideIndex--;
    setActiveDot();
  });
  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      position = width * (slideTo - 1);
      slidesField.style.transform = `translateX(-${position}px)`;
      dots.forEach(dot => dot.style.opacity = ".5");
      dots[slideIndex - 1].style.opacity = 1;
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (carousel);

/***/ }),

/***/ "./src/js/views/calc-page.component.js":
/*!*********************************************!*\
  !*** ./src/js/views/calc-page.component.js ***!
  \*********************************************/
/*! exports provided: CalcPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcPage", function() { return CalcPage; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/views/component.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/form */ "./src/js/modules/form.js");



class CalcPage extends _component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return new Promise(resolve => {
      let html;
      html = `
            <section class="calculating calculating__page" id="calc-page">
                <div class=" container calc-container">
                    <div class="title-no-anim title-no-frame">
                        Lets select coffee to suit your personal taste
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
                            <div class="title-no-anim title-no-frame">
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
                                <button class="btn" data-modal>Order</button>
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
                                <button class="btn" data-modal>Order</button>
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
                                <button class="btn" data-modal>Order</button>
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
                                <button class="btn" data-modal>Order</button>
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
                                <button class="btn" data-modal>Order</button>
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
                                <button class="btn" data-modal>Order</button>
                                <div class="coffee__item-price">6.99$</div> 
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-calc">
                        <a href="">Back to main page</a>
                    </button>  
                </div>
            </section>
            <div class="modal">
                <div class="modal__dialog">
                    <div class="modal__content">
                        <form action="#">
                            <div class="modal__close" data-close>&times;</div>
                            <div class="modal__title"></div>
                            <input required  id="name" minlength="2" maxlength="12" placeholder="Your name" name="name" type="text" class="modal__input">
                            <input required id="tel" placeholder="Your phone number" name="phone" type="phone" class="modal__input">
                            <button class="btn">Call me back</button>
                        </form>
                    </div>
                </div>
            </div>
            `;
      resolve(html);
      reject('error');
    });
  }

  afterRender() {
    this.setActiveAndFilter('how', 'calculating__choose-item_active');
    this.setActiveAndFilter('addings', 'calculating__choose-item_active');
    this.setActiveAndFilter('roast', 'calculating__choose-item_active');
    this.setActiveAndFilter('flavour', 'calculating__choose-item_active');
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal');
    Object(_modules_form__WEBPACK_IMPORTED_MODULE_2__["default"])('form');
  }

  setActiveAndFilter(id, activeClass) {
    const chooseBlock = document.getElementById(id),
          coffeeItems = document.querySelectorAll('.coffee__item'); // let chosen;
    // if(localStorage.getItem('chosen')) {
    //     chosen = localStorage.getItem('chosen');
    //     initLocalSettings('how', 'calculating__choose-item_active');
    //     initLocalSettings('addings', 'calculating__choose-item_active');
    //     initLocalSettings('roast', 'calculating__choose-item_active');
    //     initLocalSettings('flavour', 'calculating__choose-item_active');
    // } else {
    //     // chosen = 'brasil';
    //     localStorage.setItem('chosen', 'brasil');
    // }
    // function initLocalSettings(id, activeClass) {
    //     const elements = document.getElementById(id);
    //     elements.forEach(elem => {
    //         elem.classList.remove(activeClass);
    //         if (elem.getAttribute('id') === localStorage.getItem('chosen')) {
    //             elem.classList.add(activeClass);
    //         }
    //     });
    // }
    // initLocalSettings('how', 'calculating__choose-item_active');
    // initLocalSettings('addings', 'calculating__choose-item_active');
    // initLocalSettings('roast', 'calculating__choose-item_active');
    // initLocalSettings('flavour', 'calculating__choose-item_active');

    chooseBlock.addEventListener('click', e => {
      let target = e.target;

      if (target.classList.contains('calculating__choose-item')) {
        // let categories = [];
        const currentCategory = e.target.dataset.filter;
        chooseBlock.getElementsByClassName(activeClass)[0].classList.remove(activeClass);
        target.classList.add(activeClass); //     categories.push(currentCategory);
        //    console.log(categories);
        // localStorage.setItem('chosen', JSON.stringify(categories));

        filter(currentCategory, coffeeItems);
      }

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

/***/ }),

/***/ "./src/js/views/component.js":
/*!***********************************!*\
  !*** ./src/js/views/component.js ***!
  \***********************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/utils */ "./src/js/helpers/utils.js");

class Component {
  constructor() {
    this.request = Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_0__["parseRequestURL"])();
  }

  render() {}

  afterRender() {}

}

/***/ }),

/***/ "./src/js/views/error404.js":
/*!**********************************!*\
  !*** ./src/js/views/error404.js ***!
  \**********************************/
/*! exports provided: Error404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404", function() { return Error404; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/views/component.js");

class Error404 extends _component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return new Promise(resolve => {
      resolve(`                
                <h1 class="page-error">404 Error - Page Not Found</h1>              
            `);
    });
  }

}

/***/ }),

/***/ "./src/js/views/home-page.component.js":
/*!*********************************************!*\
  !*** ./src/js/views/home-page.component.js ***!
  \*********************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/js/views/component.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_promTimer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/promTimer */ "./src/js/modules/promTimer.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/animation */ "./src/js/modules/animation.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/slider */ "./src/js/modules/slider.js");







class HomePageComponent extends _component__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return new Promise(resolve => {
      resolve(`
            <header class="header" id="header">
                <div class="header-block">
                    <div class="header__logo">
                    </div>
                    <nav class="header__links">
                        <a href="#/select-coffee">Select coffee</a>
                    </nav>
                </div>
                <div class="title-block">
                    <div class="title _anim-items _anim-no-hide">Everything You Love About Coffee</div>
                    <div class="devider">
                        <div class="devider__line"></div>
                        <img src="icons/3 coffee beans.png" alt="3 coffee-beans">
                        <div class="devider__line"></div>
                    </div>
                    <div class="subtitle _anim-items _anim-no-hide">We make every day full of energy and taste<br>Want to try our beans?</div>
                </div>
            </header>
            
            <section class="about-us">
                <div class="container">
                <div class="subtitle-black">About Us</div>
                <div class="devider devider-black">
                        <div class=" devider__line devider__line-black"></div>
                        <img src="icons/3 coffee-beans-black.png" alt="3 coffee-beans">
                        <div class="devider__line devider__line-black"></div>
                    </div>
                <div class="subtitle__descr">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.</div> 
                </div>
            </section>
            
            
            <section class="our-best">
                <div class="offer__slider-prev">
                    <img src="icons/left.svg" alt="prev">
                </div>
                <div class="container">
                    <div class="subtitle-black">Our best
                    </div>
    
                    <div class="coffee-block coffee-block__slider">
                        <div class="coffee-block__inner">
                            <div class="coffee__item best">
                                <img src="img/tabs/solimo_2pack.png" alt="aromistico">
                                <h3 class="coffee__item-subtitle">
                                    Solimo Coffee Beans 2 kg
                                </h3>
                                <div class="coffee__item--price-block">
                                    <button class="btn" data-modal>Order</button>
                                    <div class="coffee__item-price">10.73$</div> 
                                </div>
                            </div>
                            <div class="coffee__item best">
                                <img src="img/tabs/presto.png" alt="aromistico">
                                <h3 class="coffee__item-subtitle">
                                    Presto Coffee Beans 1 kg
                                </h3>
                                <div class="coffee__item--price-block">
                                    <button class="btn" data-modal>Order</button>
                                    <div class="coffee__item-price">15.99$</div> 
                                </div>
                            </div>
                            <div class="coffee__item best">
                                <img src="img/tabs/aromistico.png" alt="aromistico">
                                <h3 class="coffee__item-subtitle">
                                    AROMISTICO Coffee 1 kg
                                </h3>
                                <div class="coffee__item--price-block">
                                    <button class="btn" data-modal>Order</button>
                                    <div class="coffee__item-price">6.99$</div> 
                                </div>
                            </div>
                            <div class="coffee__item best">
                                <img src="img/tabs/solimo_2pack.png" alt="aromistico">
                                <h3 class="coffee__item-subtitle">
                                    Solimo Coffee Beans 2 kg
                                </h3>
                                <div class="coffee__item--price-block">
                                    <button class="btn" data-modal>Order</button>
                                    <div class="coffee__item-price">10.73$</div> 
                                </div>
                            </div>
                            <div class="coffee__item best">
                                <img src="img/tabs/solimo_2pack.png" alt="aromistico">
                                <h3 class="coffee__item-subtitle">
                                    Solimo Coffee Beans 2 kg
                                </h3>
                                <div class="coffee__item--price-block">
                                    <button class="btn" data-modal>Order</button>
                                    <div class="coffee__item-price">10.73$</div> 
                                </div>
                            </div>
                            <div class="coffee__item best">
                                <img src="img/tabs/solimo_2pack.png" alt="aromistico">
                                <h3 class="coffee__item-subtitle">
                                    Solimo Coffee Beans 2 kg
                                </h3>
                                <div class="coffee__item--price-block">
                                    <button class="btn" data-modal>Order</button>
                                    <div class="coffee__item-price">10.73$</div> 
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div class="offer__slider-next right">
                    <img src="icons/right.svg" alt="prev">
                </div>
            </section>
            
            <section class="about-our-beans">
                <div class="container">
                    <div class="about-our-beans-wrapper">
                    <div class="image">
                        <img src="img/main-page/girl-865304_1920.jpg" alt="girl">
                    </div> 
                        <div class="about-beans-block">
                            <div class="subtitle-black subtitle-9pt">About our beans</div>
                            <div class="devider devider-black">
                                <div class=" devider__line devider__line-black"></div>
                                <img src="icons/3 coffee-beans-black.png" alt="3 coffee-beans">
                                <div class="devider__line devider__line-black"></div>
                            </div>
                            <div class="subtitle__descr descr-mb">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br><br>
            
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. <br>
                                As greatly removed calling pleased improve an. Last ask him cold feel<br>
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                    <div class="line"></div>
                </div>
            </section>
            
            <section class="calculating" id="calc-page">
                <div class=" container calc-container">
                    <div class="title-no-anim">
                    <a href="#/select-coffee" id="select-coffee">Lets select coffee to suit your personal taste
                    </a> 
                    </div>
            
                    <div class="calculating__total">
                        <div class="title-no-anim title-no-frame">
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
                    <div class="filter-wrap _anim-items _anim-no-hide">
                        <div class="filter"><strong>Filter</strong>
                            <div class="country-wrap">
                            <div class="country-tab" data-filter="brasil">Brazil</div>
                                <div class="country-tab" data-filter="kenya">Kenya</div>
                                <div class="country-tab" data-filter="columbia">Columbia</div> 
                                <div class="country-tab" data-filter="all">All</div> 
                            </div>
                        </div>
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
                                <button class="btn" data-modal>Order</button>
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
                                <button class="btn" data-modal>Order</button>
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
                                <button class="btn" data-modal>Order</button>
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
                                <button class="btn" data-modal>Order</button>
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
                                <button class="btn" data-modal>Order</button>
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
                                <button class="btn" data-modal>Order</button>
                                <div class="coffee__item-price">6.99$</div> 
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div class="line"></div>
            
            <section class="promotion" id="promotion">
                <div class="container promotion-container">
                    <div class="promotion__block _anim-items _anim-no-hide">
                        <div class="subtitle-black subtitle-left">New customer promotion!</div>
                        <div class="promotion__descr">
                            We highly estimate each customer and offer you to become one of them on very profitable terms. 
                            Everyone who orders coffee delivery for a month will receive a discount in the amount of <span>20%!</span>
                            <br><br>
                            The promotion ends on <strong>July 10 at 23.59</strong>
                        </div>
                    </div>
                    <div class="promotion__timer _anim-items _anim-no-hide">
                        <div class= "subtitle-black subtitle-right">The promotion ends in:</div>
                        <div class="timer">
                            <div class="timer__block">
                                <span id="days">12</span>
                                days
                            </div>
                            <div class="timer__block">
                                <span id="hours">20</span>
                                hours
                            </div>
                            <div class="timer__block">
                                <span id="minutes">56</span>
                                minutes
                            </div>
                            <div class="timer__block">
                                <span id="seconds">20</span>
                                seconds
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <footer class="footer">
                <div class="footer-block">
                        <div class="footer__logo">
                        </div>
                        <nav class="header__links black-links">
                            <a href="#/select-coffee">Select coffee</a>
                        </nav>
                </div>
                <div class="devider devider-black">
                    <div class=" devider__line devider__line-black"></div>
                    <img src="icons/3 coffee-beans-black.png" alt="3 coffee-beans">
                    <div class="devider__line devider__line-black"></div>
                </div>
            </footer>
            
            <div class="modal">
                <div class="modal__dialog">
                    <div class="modal__content">
                        <form action="#">
                            <div class="modal__close" data-close>&times;</div>
                            <div class="modal__title"></div>
                            <input required id="name" minlength="2" maxlength="12" placeholder="Your name" name="name" type="text" class="modal__input">
                            <input required id="tel" minlength="7" maxlength="19" placeholder="Your phone number" name="phone" type="phone" class="modal__input">
                            <button class="btn">Call me back</button>
                        </form>
                    </div>
                </div>
            </div>
            `);
    });
  }

  afterRender() {
    Object(_modules_animation__WEBPACK_IMPORTED_MODULE_3__["default"])();
    Object(_modules_promTimer__WEBPACK_IMPORTED_MODULE_2__["default"])('.timer', '2021-07-11');
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('[data-modal]', '.modal');
    Object(_modules_form__WEBPACK_IMPORTED_MODULE_5__["default"])('form');
    Object(_modules_filter__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])();
  }

}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map