import modal from './modal.js';

function calculator() {
   // Calculator

   const parseRequestURL = () => {
        const url = location.hash.slice(2),
            request = {};

        [request.resource, request.action] = url.split('/');

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
                <a href="#/home" id="select-coffee">Lets select coffee to suit your personal taste
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

       renderCalculator()
       .then(html => document.body.innerHTML = html)
       .then(() => getInformation('#how div', 'calculating__choose-item_active'))
       .then(() => getInformation('#addings div', 'calculating__choose-item_active'))
       .then(() => getInformation('#roast div', 'calculating__choose-item_active'))
       .then(() => getInformation('#flavour div', 'calculating__choose-item_active'))
       .then(() => modal('[data-modal]', '.modal'))
    
       .catch(error => console.log(`Возникла ошибка при загрузке: ${error}`)); 
   }   
    
   function getInformation(selector, activeClass) {
       const chooseBlock = document.querySelectorAll(selector),
           coffeeItems = document.querySelectorAll('.coffee__item');

       chooseBlock.forEach(elem => {
           elem.addEventListener('click', (e) => {
               const currentCategory = e.target.dataset.filter;
                   
               chooseBlock.forEach(elem => {
                   elem.classList.remove(activeClass);
               });
               e.target.classList.add(activeClass);
               
               filter(currentCategory, coffeeItems);

           });

           function filter (category, items) {
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

export default calculator;