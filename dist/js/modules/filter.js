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
}

export default filter;