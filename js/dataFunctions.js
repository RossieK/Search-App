export const getSearchTerm = () => {
    const rawSearchTerm = document.getElementById("search").nodeValue.trim();
    const regex = /[ ]{2,}/gi;
    const searchTerm = rawSearchTerm.replaceAll(regex, " ");
    return searchTerm;
}