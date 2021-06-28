
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
    coffeeItems = document.querySelectorAll('.coffee__item');

    countryBtn.forEach(button => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;
            button.classList.toggle('active');

            filter(currentCategory, coffeeItems);
    
        });
    });

    function filter (category, items) {
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


// Calculator

const selectCoffee = document.getElementById('select-coffee');

// selectCoffee.addEventListener('click', () => {
//     event.preventDefault();
//     document.body.innerHTML = `Hello`;
// });


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

getInformation('#how div', 'calculating__choose-item_active');
getInformation('#addings div', 'calculating__choose-item_active');
getInformation('#roast div', 'calculating__choose-item_active');
getInformation('#flavour div', 'calculating__choose-item_active'); 