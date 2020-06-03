import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

// Global app controller
// import num from './test';
// console.log(`Imported ${num} from test.js`);

// test imports below
//import { str } from './models/Search'; // not Search.js just Search

// import { add, multiply, ID } from './views/searchView';
// test logging to see the import connection working
// console.log(`Using Imported functions: ${add(ID, 2)} and ${multiply(3, 5)}. ${str}.`);

// https://forkify-api.herokuapp.com/api/search

// https://forkify-api.herokuapp.com/api/search?q=pizza

// https://forkify-api.herokuapp.com/api/get


/** Global State of the App **
 * Search Object
 * Current Recipe Object
 * Shopping List Object
 * Liked Recipes
**/

const state = {}; // empty object

// some objects can also be made with persistent state

/*
* SEARCH CONTROLLER
* */

const controlSearch = async () => {
    // Get Query from View
    const query = searchView.getInput();
    console.log(query);
    
    // if there is a query, create
    if (query) {
        // New Search object and add it to state
        state.search = new Search(query);
        // Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchres);
        // Search for Recipes
        await state.search.getResults();
        clearLoader();
    
        // Render results on UI
        searchView.renderResults(state.search.result);
    }

}

// adding an event listener for the search form submit button
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


// example of an event delegation by delegating
// to btn-inline classed element

elements.searchres.addEventListener('click', e => {
    console.log(e.target);
    const btn = e.target.closest('.btn-inline');
    console.log(btn);
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        // console.log(goToPage);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});


/*
* RECIPE CONTROLLER
* */

const r = new Recipe(47746);
r.getRecipe();
console.log(r);

