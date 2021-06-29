// import {parseRequestURL} from './helpers/utils.js';
// import {filterByCountry} from './main.js';

// import Header from './views/partials/header.js';
// import Footer from './views/partials/footer.js';

// import About from './views/pages/about.js';
// import Error404 from './views/pages/error404.js';

// import AddAndList from './views/pages/tasks/add-list.js';
// import Info from './views/pages/tasks/info.js';
// import Edit from './views/pages/tasks/edit.js';

// const Routes = {
//     '/': Home,
//     '/select-coffee': Calculator,
//     '/coffee-page': CoffeePage,
// };

// function router() {
//     const headerContainer = document.getElementsByClassName('header')[0],
//     aboutUsContainer = document.getElementsByClassName('about-us')[0],
//     ourBestContainer = document.getElementsByClassName('our-best')[0],
//     aboutOurBeansContainer = document.getElementsByClassName('about-our-beans')[0],
//           calculatingContainer = document.getElementsByClassName('calculating')[0],
//           calculatingResultContainer = document.getElementsByClassName('calculating__result')[0],
//           catalogContainer = document.getElementsByClassName('catalog')[0],
//           promotionContainer = document.getElementsByClassName('promotion')[0],
//           footerContainer = document.getElementsByClassName('footer')[0];

//     header.render().then(html => headerContainer.innerHTML = html);

//     const request = parseRequestURL(),
//         parsedURL = `/${request.resource || ''}${request.id ? '/:id' : ''}${request.action ? `/${request.action}` : ''}`,
//         page = Routes[parsedURL] ? new Routes[parsedURL]() : new Error404();

//     page.render().then(html => {
//         contentContainer.innerHTML = html;
//         page.afterRender();
//     });

//     footer.render().then(html => footerContainer.innerHTML = html);
// }

// window.addEventListener('load', router);
// window.addEventListener('hashchange', router);