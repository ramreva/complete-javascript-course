import { elements } from './base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => {
    elements.searchInput.value = ''
};
export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

const limitRecipeTitle = (title, limit = 17) => {
    if (title.length > limit) {
        const newTitle = [];
        if (title.length > limit) {
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
        }
    }
    return `${newTitle.join(' ')}...`;
};

// arrow functions with 1 lines are of implicit return kind

const renderRecipe = recipe => {
    const markup = ` 
    <li>
        <a class="results__link results__link--active" href="#${recipe.recipe_id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    ` // end of the template string
    elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

//type of button can be prev or next

const createButton = (page, type) => `
    <button class="btn-inline results__btn--prev" data-goto=${type === 'prev' ? page - 1 : page + 1}>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
    </svg>
    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
    </button>
    
    `

/*

                <button class="btn-inline results__btn--prev">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-left"></use>
                    </svg>
                    <span>Page 1</span>
                </button>
                <button class="btn-inline results__btn--next">
                    <span>Page 3</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>
                </button>

*/

const renderButtons = (page, numResults, resPerPage) => {
    const pages =  Math.ceil(numResults / resPerPage);
    let button;
    if (page === 1 && pages > 1) {
        // only show button forward
        button = createButton(page, 'next');
    } else if (page < pages) {
        button = `
        ${createButton(page, 'next')}
        ${createButton(page, 'prev')};
        `
    } 
    else if (page ===  pages) {
        // only show button backward
        button = createButton(page, 'prev');
    } 

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 10) => {
    // render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    recipes.slice(start, end).forEach(renderRecipe);

    // render pagination buttons
    renderButtons(page, recipes.length, resPerPage);
};

