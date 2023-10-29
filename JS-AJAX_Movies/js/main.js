// apikey=1c39f51b //9f5304c4
const url = 'https://www.omdbapi.com/?apikey=1c39f51b';
// const url = `https://api.themoviedb.org/3/search/movie?api_key=2463514ee2e145bc819726cf4aea003e`

// add novie details card
const cardUrl = './parts/card.html';
let card;
let cardBlock;

axios.get(cardUrl)
    .then(function (response) {
        card = response.data;
        addCardBlockToDocument();
    });

function addCardBlockToDocument() {
    cardBlock = document.getElementById('#card_block');
    cardBlock.innerHTML = card;
}
// add movies list
const listMoviesUrl = './parts/card.html';
let listMovies = [];

let list = document.getElementById('list');

let moviesList = [];
let findMovie = {};

let search = document.getElementById('searchText');

let messageError = document.getElementById('messageError');

let page = 1;
let totalResults = 0;
let currentPage = 1;
let countPages = 0;

let typesOfMovies = document.getElementsByName('type');
type = (document.querySelector('input[name="type"]:checked')).getAttribute('id');

typesOfMovies.forEach(item => {
    item.addEventListener('click', function () {
        type = item.getAttribute('id');
    });
});

// pagination--------------------------
const nav = document.getElementById('nav');

let pagination = document.getElementsByClassName('page-link');

[...pagination].forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        const toPage = item.getAttribute('href');

        switch (toPage) {
            case 'first':
                page = 1;
                break;
            case 'prev':
                page > 1 ? page -= 1 : page = 1;
                break;
            case 'page':
                break;
            case 'next':
                page < countPages ? page += 1 : page = countPages;
                break;
            case 'last':
                page = countPages;
                break;
        }

        searchFilms(page);
    });
});
//add list of movies
function addListMoviesToDocument(listMovies) {
    list.innerHTML = '';

    if (listMovies.length) {
        listMovies.forEach(item => {
            list.innerHTML += `<li class="list-group-item">
                <img src="${item.Poster}">
                <h2 class="h5">${item.Title} (${item.Year})</h2>
                <button type="button" class="btn btn-info" id="${item.imdbID}" onclick="getMovie(event)">
                    Details
                </button>
            </li> `;
        });
    }
}

function searchFilms(page = 1) {
    messageError.classList.add('d-none');
    nav.classList.add('d-none');
    cardBlock.classList.add('d-none');

    const title = search.value;

    axios.get(`${url}&s=${title}&page=${page}&type=${type}`)
        .then(function (response) {
            if (response.data.Response === "True") {
                totalResults = response.data.totalResults;
                countPages = Math.ceil(totalResults / 10);
                moviesList = response.data.Search;
                addListMoviesToDocument(moviesList);
                addPagination(page);
            } else {
                onCatch(response.Error);
            }
        })
        .catch(function (error) {
            onCatch(error.response.message);
        });
}

function onCatch(error) {
    moviesList = [];
    list.innerHTML = '';
    messageError.text = error;
    messageError.classList.remove('d-none');
}

function addPagination(page) {
    if (totalResults > 10) {
        (document.getElementById('page')).text = page;
        (document.getElementById('page')).classList.add('active');
        nav.classList.remove('d-none');
    }
}

function getMovie(event, getMovie) {
    id = event.target.getAttribute('id');
    getFilmById(id, getMovie);
}

function getFilmById(id, getMovie) {
    findMovie = {};

    axios.get(`${url}&i=${id}`)
        .then(function (response) {
            if (response.data.Response === "True") {
                findMovie = response.data;
                showCard(findMovie, getMovie);
            } else {
                onCatch(response.Error);
            }
        })
        .catch(function (error) {
            onCatch(error.response.message);
        });
}

const listArr = [];

function addToWishList(e) {
    const filmItem = {
        id: e.target.dataset.id,
        name: e.target.dataset.name
    };

    const tid = filmItem.id;
    let isIncludedToWishList = false;
    const filmsFromStorage = localStorage.getItem('watchList');
    if(filmsFromStorage){
        const formatedArr = filmsFromStorage.split('},').map((el, index) => {
        if (index < list.length - 1) {
            return el + '}'
        }
        return el;
    });
    formatedArr.forEach(film => {
        if (film.includes(`${tid}`)) {
            return isIncludedToWishList = true;
        }
    });}
        if(!isIncludedToWishList){listArr.push(JSON.stringify(filmItem));}
        localStorage.setItem('watchList', listArr);
        generateWatchList();    
}

function generateWatchList() {
    const list = localStorage.getItem('watchList').split('},');
    // ------------------------------
    const formatedArr = list.map((el, index) => {
        if (index < list.length - 1) {
            return el + '}'
        }
        return el;
    });

    let html = '';

    formatedArr.forEach(film => {
        const parsedFilm = JSON.parse(film);
        html += `
        <li class="list-group-item">
            <h2 class="h5" id="details">${parsedFilm.name}</h2>
            <button type="button" class="btn btn-info" id="${parsedFilm.id}" onclick="getMovie(event, true)">
                Details
            </button>
        </li>
        `;
    });

    document.getElementById('watchlist').innerHTML = html;

    const buttons = document.getElementById('watchlist').querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', getMovie);
    })
}

document.addEventListener('DOMContentLoaded', generateWatchList);

const watchList = document.getElementById('watchlist');
document.getElementById('watchLater').addEventListener('click', (event) => showWatchList(event, watchList));

function showWatchList(event, el) {
    event.preventDefault();
    el.classList.toggle("d-none");
}

// close details
function closeCardInfo(event) {
    event.preventDefault();
    cardBlock.classList.add('d-none');
    cardBlock.classList.remove('menu-open');
    document.body.classList.remove('fixed');
}
//   ----------------------------------

function showCard(movie) {
    if (movie) {
        cardBlock.classList.remove('d-none');
        cardBlock.classList.add('menu-open');
        document.body.classList.add('fixed');

        const button = cardBlock.querySelector('.button__to_wishlist');

        button.setAttribute('data-id', movie.imdbID);
        button.setAttribute('data-name', movie.Title);

        button.addEventListener('click', addToWishList);

        const title = document.getElementById('title');
        title.textContent = movie.Title || '';

        const year = document.getElementById('year');
        year.textContent = 'Year: ' + (movie.Year || '');

        const description = document.getElementById('description');
        description.textContent = 'Description: ' + movie.Plot || '';

        const languages = document.getElementById('languages');
        languages.textContent = 'Language: ' + movie.Language || '';

        const poster = document.getElementById('poster');
        const posterSrc = movie.Poster || '';
        poster.setAttribute('src', `${posterSrc}`);

        const actors = document.getElementById('actors');
        actors.textContent = 'Actors: ' + movie.Actors || '';

        const genre = document.getElementById('genre');
        genre.textContent = 'Genre: ' + movie.Genre || '';

        const score = document.getElementById('score');
        if (movie.imdbRating !== "N/A") {
            score.classList.remove('d-none');
            score.textContent = movie.imdbRating || ''
        } else {
            score.classList.add('d-none');
        }

        const time = document.getElementById('time');
        time.textContent = movie.Runtime;
    }
}