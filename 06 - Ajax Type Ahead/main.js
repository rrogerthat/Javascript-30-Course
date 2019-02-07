const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let searchBox = document.querySelector('.search');
let search = "";    //global variable created in order to be used in createList function (to highlight words searched)

//search starts here
searchBox.oninput = function(e) {

    search = this.value;

    fetchData(endpoint)
        .then(data => filterList(data))
        .then( (filterData) => createList(filterData) ) 
        .then(listData => addToList(listData))
}   

function fetchData(endpoint) {
    return fetch(endpoint)
    .then(checkStatus)
    .then( res => res.json() )
    .catch( error => console.log('Fetch request error', error) )
}

function checkStatus(response) {
    if(response.ok === true) return Promise.resolve(response);
    else return Promise.reject( new Error(response.statusText) );
}

function filterList (data) {
    let regex = new RegExp(search, "gi"); //Use the constructor function when you know the regular expression pattern will be changing, 
                                          //or you don't know the pattern and are getting it from another source, such as user input.
    return data.filter( item => item.city.match(regex) || item.state.match(regex));
}

function createList(filterData) {
    return filterData.map(item => {
        let regex = new RegExp(search, "gi");  //replace the part of what you searched for with a class of a yellow background (highlighted)
        let cityName = item.city.replace(regex, `<span class="hl">${search}</span>`) //replace item.city below with cityName
        let stateName = item.state.replace(regex, `<span class="hl">${search}</span>`) //replace item.population below with cityName

        return `
        <li>
            <span class="location">${cityName}, ${stateName}</span> 
            <span class="population">pop: ${numberWithCommas(item.population)}</span>
        </li>
    `}).join("");
}

function addToList(listData) {
    document.querySelector('.suggestions').innerHTML = listData;
}

//copied from stackoverflow
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

