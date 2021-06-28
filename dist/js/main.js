
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
    return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
} 

function animOnScroll() {
    for (let i = 0; i <animItems.length; i ++) {
        const animItem = animItems[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 6;
        
        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - animItemHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add ('active');
        } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('active');
            }
        }
    }
}

// Promotion timer
const deadline = '2021-07-10';

function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor( (t/(1000*60*60*24)) ),
        seconds = Math.floor( (t/1000) % 60 ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        hours = Math.floor( (t/(1000*60*60) % 24) );

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function getZero(num){
    return num = (num >= 0 && num < 10) ? `0${num}` : num;
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


// MODAL

const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
    btn.addEventListener('click', function() {
        modal.classList.toggle('show');
        
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.toggle('show');
    document.body.style.overflow = '';
}
    
modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.code === "Escape" && modal.classList.contains('show')) { 
        closeModal();
    }
});


//  Filter by country origin

const filterByCountry = () => {
    const countryBtn = document.querySelectorAll('.country-tab'),
    coffeeItem = document.querySelectorAll('.coffee__item');

    countryBtn.forEach(button => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;
            button.classList.toggle('active');

            filter(currentCategory, coffeeItem);
    
        });
    });

    function filter (category, items) {
        items.forEach(item => {
            const isItemFiltered = !item.classList.contains(category),
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


// Calculator

const selectCoffee = document.getElementById('select-coffee');

// selectCoffee.addEventListener('click', () => {
//     event.preventDefault();
//     document.body.innerHTML = `Hello`;
// });

const result = document.querySelector('.calculating__result');
let press, machine, weight, cazve, ratio, milk, sugar, syrop, nothing, light, medium, dark, bitter, sweet, sour, solty, notsure;

function calcTotal() {
    if (!press || !machine || !weight || !cazve || !milk || !sugar || !syrop || !nothing || !light || !medium  || !dark|| !bitter|| !sweet|| !sour|| !solty|| !notsure) {
        result.innerHTML = `
            <div class="container">
            <div class="subtitle-black" id="our-coffee">Our coffee
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
        </div>`;
        return;
    } 
}

calcTotal();

function getInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector),
          coffeeItem = document.querySelectorAll('.coffee__item');

    elements.forEach(elem => {
        elem.addEventListener('click', (e) => {
            if (e.target.dataset.filter === 'brasil') {
                const currentCategory = e.target.dataset.filter;
                result.innerHTML = filter(currentCategory, coffeeItem);
                
            } else if (e.target.dataset.filter === 'kenya') {
                sex = e.target.getAttribute('id');
                
            }

            elements.forEach(elem => {
                elem.classList.remove(activeClass);
            });

            e.target.classList.add(activeClass);

            calcTotal();
        });

        function filter (category, items) {
            items.forEach(item => {
                const isItemFiltered = !item.classList.contains(category),
                      isShowAll = category.toLowerCase() === 'all';
                if (isItemFiltered && !isShowAll) {
                    item.classList.add('hide', 'fade');
                } else {
                    item.classList.remove('hide');
                }
            });
        }
    });
}

getInformation('#how div', 'calculating__choose-item_active');
getInformation('#addings div', 'calculating__choose-item_active');
getInformation('#roast div', 'calculating__choose-item_active');
getInformation('#flavour div', 'calculating__choose-item_active'); 