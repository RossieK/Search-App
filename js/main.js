import { setSearchFocus } from "./searchBar.js";
import { buildSearchResults } from "./searchResults.js";
import { getSearchTerm, retrieveSearchResults } from "./dataFunctions.js";

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        initApp();
    }
});

const initApp = () => {
    setSearchFocus();

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

const submitTheSearch = (event) => {
    event.preventDefault();

    processTheSearch();
    setSearchFocus();
}

const processTheSearch = async() => {
    const searchTerm = getSearchTerm();
    if (searchTerm === "") {
        return;
    }

    const resultArray = await retrieveSearchResults(searchTerm);

    if (resultArray.length) {
        buildSearchResults(resultArray);
    }
}