
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

const countryParent = document.querySelector('.country-wrap');

// countryParent.addEventListener('click', function(event) {
//     const target = event.target;
    
//     target.classList.toggle('active');
// });

function filterByCountry () {
    const countryBtn = document.querySelectorAll('.country-tab'),
    coffeeItem = document.querySelectorAll('.coffee__item');
    
    function filter (category, items) {
        items.forEach(item => {
            const isItemFiltered = !item.classList.contains(category);
            if (isItemFiltered) {
                item.classList.add('hide', 'fade');
            } else {
                item.classList.remove('hide');
            }
        });
    }

    countryBtn.forEach(button => {
        button.addEventListener('click', () => {
            const currentCategory = button.dataset.filter;
            button.classList.toggle('active');
            filter(currentCategory, coffeeItem);
    
        });
    });
}

filterByCountry();


        // isFedor['Пользователь с именем Федор'] = users.filter(item => item.name.startsWith('Fedor'));
        // 
        // if(target && target.classList.contains('country-tab')) {
        //     tabs.forEach((item, i) => {
        //         if (target == item) {
        //             hideTabContent();
        //             showTabContent(i);
        //         }
        //     });
        // }
    
        // // target.dataset.country === 'kenya')
        // if(target && target.classList.contains('country-tab')) {
        //     tabs.forEach((item, i) => {
        //         if (target == item) {
        //             hideTabContent();
        //             showTabContent(i);
        //         }
        //     });
        // }
    
        // if(target && target.classList.contains('country-tab')) {
        //     tabs.forEach((item, i) => {
        //         if (target == item) {
        //             hideTabContent();
        //             showTabContent(i);
        //         }
        //     });
        // }
    
    
// function hideTabContent() {
//     // tabsContent.forEach(item => item.classList.remove('show', 'fade'));

    
// }

// function showTabContent(i = 0) {
//     tabsContent[i].classList.add('show', 'fade');
//     tabsContent[i].classList.remove('hide');
//     tabs[i].classList.add('active');
// }
    
// hideTabContent();
// showTabContent();


// Calculator

// // Calculator

//     const result = document.querySelector('.calculating__result span');
//     let sex = 'female',
//         height, weight, age,
//         ratio = 1.375;

//     function calcTotal() {
//         if (!sex || !height || !weight || !age || !ratio) {
//             result.textContent = '____'; // Можете придумать что угодно
//             return;
//         }
//         if (sex === 'female') {
//             result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
//         } else {
//             result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
//         }
//     }

//     calcTotal();

//     function getStaticInformation(parentSelector, activeClass) {
//         const elements = document.querySelectorAll(`${parentSelector} div`);

//         elements.forEach(elem => {
//             elem.addEventListener('click', (e) => {
//                 if (e.target.getAttribute('data-ratio')) {
//                     ratio = +e.target.getAttribute('data-ratio');
//                 } else {
//                     sex = e.target.getAttribute('id');
//                 }
    
//                 elements.forEach(elem => {
//                     elem.classList.remove(activeClass);
//                 });
    
//                 e.target.classList.add(activeClass);
    
//                 calcTotal();
//             });
//         });
//     }

//     getStaticInformation('#gender', 'calculating__choose-item_active');
//     getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

//     function getDynamicInformation(selector) {
//         const input = document.querySelector(selector);

//         input.addEventListener('input', () => {
//             switch(input.getAttribute('id')) {
//                 case "height":
//                     height = +input.value;
//                     break;
//                 case "weight":
//                     weight = +input.value;
//                     break;
//                 case "age":
//                     age = +input.value;
//                     break;
//             }

//             calcTotal();
//         });
//     }

//     getDynamicInformation('#height');
//     getDynamicInformation('#weight');
//     getDynamicInformation('#age');