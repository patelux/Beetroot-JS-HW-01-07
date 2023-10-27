"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// apikey=1c39f51b //9f5304c4
var url = 'https://www.omdbapi.com/?apikey=1c39f51b'; // const url = `https://api.themoviedb.org/3/search/movie?api_key=2463514ee2e145bc819726cf4aea003e`
// add novie details card

var cardUrl = './parts/card.html';
var card;
var cardBlock;
axios.get(cardUrl).then(function (response) {
  card = response.data;
  addCardBlockToDocument();
});

function addCardBlockToDocument() {
  cardBlock = document.getElementById('#card_block');
  cardBlock.innerHTML = card;
} // add movies list


var listMoviesUrl = './parts/card.html';
var listMovies = [];
var list = document.getElementById('list');
var moviesList = [];
var findMovie = {};
var search = document.getElementById('searchText');
var messageError = document.getElementById('messageError');
var page = 1;
var totalResults = 0;
var currentPage = 1;
var countPages = 0;
var typesOfMovies = document.getElementsByName('type');
type = document.querySelector('input[name="type"]:checked').getAttribute('id');
typesOfMovies.forEach(function (item) {
  item.addEventListener('click', function () {
    type = item.getAttribute('id');
  });
}); // pagination--------------------------

var nav = document.getElementById('nav');
var pagination = document.getElementsByClassName('page-link');

_toConsumableArray(pagination).forEach(function (item) {
  item.addEventListener('click', function (event) {
    event.preventDefault();
    var toPage = item.getAttribute('href');

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
}); //add list of movies


function addListMoviesToDocument(listMovies) {
  list.innerHTML = '';

  if (listMovies.length) {
    listMovies.forEach(function (item) {
      list.innerHTML += "<li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                <img style=\"width: 100px\" src=\"".concat(item.Poster, "\">\n                <h2 class=\"h5\">").concat(item.Title, " (").concat(item.Year, ")</h2>\n                <button type=\"button text-right\" class=\"btn btn-info\" id=\"").concat(item.imdbID, "\" onclick=\"getMovie(event)\">\n                    Details\n                </button>\n            </li> ");
    });
  }
}

function searchFilms() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  messageError.classList.add('d-none');
  nav.classList.add('d-none');
  cardBlock.classList.add('d-none');
  var title = search.value;
  axios.get("".concat(url, "&s=").concat(title, "&page=").concat(page, "&type=").concat(type)).then(function (response) {
    if (response.data.Response === "True") {
      totalResults = response.data.totalResults;
      countPages = Math.ceil(totalResults / 10);
      moviesList = response.data.Search;
      addListMoviesToDocument(moviesList);
      addPagination(page);
    } else {
      onCatch(response.Error);
    }
  })["catch"](function (error) {
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
    document.getElementById('page').text = page;
    document.getElementById('page').classList.add('active');
    nav.classList.remove('d-none');
  }
}

function getMovie(event, getMovie) {
  id = event.target.getAttribute('id');
  getFilmById(id, getMovie);
}

function getFilmById(id, getMovie) {
  findMovie = {};
  axios.get("".concat(url, "&i=").concat(id)).then(function (response) {
    if (response.data.Response === "True") {
      findMovie = response.data;
      showCard(findMovie, getMovie);
    } else {
      onCatch(response.Error);
    }
  })["catch"](function (error) {
    onCatch(error.response.message);
  });
}

var listArr = [];

function addToWishList(e) {
  var filmItem = {
    id: e.target.dataset.id,
    name: e.target.dataset.name
  };
  listArr.push(JSON.stringify(filmItem));
  localStorage.setItem('watchList', listArr);
  generateWatchList();
} // function  removeFromWishList(e) {
//     const itemId = e.target.dataset.id;
//     // Получаем данные из локального хранилища и преобразуем их из JSON
//     // const storedData = localStorage.getItem('watchList');
//     const userData = JSON.parse(localStorage.getItem('watchList'));
//     console.log(userData);
//     // // Находим индекс элемента с нужным id в массиве userData
//     // const index = userData.findIndex(item => item.id === itemId);
//     // // Если индекс найден, удаляем элемент из массива
//     // if (index !== -1) {
//     //     listArr.splice(index, 1);
//     //     console.log(remove);
//     //     // Обновляем локальное хранилище после удаления элемента
//     //     localStorage.setItem('watchList', JSON.stringify(listArr));
//     //     // Перегенерируйте список после удаления элемента (вызов функции генерации списка)
//     //     generateWatchList();
//     // }
// }


function generateWatchList() {
  var list = localStorage.getItem('watchList').split('},');
  var formatedArr = list.map(function (el, index) {
    if (index < list.length - 1) {
      return el + '}';
    }

    return el;
  });
  var html = '';
  formatedArr.forEach(function (film) {
    var parsedFilm = JSON.parse(film);
    html += "\n        <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n            <h2 class=\"h5\" id=\"details\">".concat(parsedFilm.name, "</h2>\n            <button type=\"button text-right\" class=\"btn btn-info\" id=\"").concat(parsedFilm.id, "\" onclick=\"getMovie(event, true)\">\n                Details\n            </button>\n        </li>\n        ");
  });
  document.getElementById('watchlist').innerHTML = html;
  var buttons = document.getElementById('watchlist').querySelectorAll('.btn');
  buttons.forEach(function (button) {
    button.addEventListener('click', getMovie);
  });
}

document.addEventListener('DOMContentLoaded', generateWatchList);
var watchList = document.getElementById('watchlist');
document.getElementById('watchLater').addEventListener('click', function (event) {
  return showWatchList(event, watchList);
});

function showWatchList(event, el) {
  event.preventDefault();
  el.classList.toggle("d-none");
} // close details


function closeCardInfo(event) {
  event.preventDefault();
  cardBlock.classList.add('d-none');
} //   ----------------------------------


function showCard(movie, isAddedToWatchList) {
  if (movie) {
    cardBlock.classList.remove('d-none');
    cardBlock.classList.toggle('menu-open');
    document.body.classList.toggle('fixed');
    var button = cardBlock.querySelector('.button__to_wishlist');
    button.setAttribute('data-id', movie.imdbID);
    button.setAttribute('data-name', movie.Title);
    console.log(isAddedToWatchList); // if(isAddedToWatchList) {
    //     console.log('удаляем из локалсторидж');
    //     button.textContent = "Remove from wishlist";
    //     button.addEventListener('click', removeFromWishList);
    // }

    if (!isAddedToWatchList || isAddedToWatchList === undefined) {
      button.addEventListener('click', addToWishList);
      console.log('элемент не в локалсторидж');
    }

    var title = document.getElementById('title');
    title.textContent = movie.Title || '';
    var year = document.getElementById('year');
    year.textContent = 'Year: ' + (movie.Year || '');
    var description = document.getElementById('description');
    description.textContent = 'Description: ' + movie.Plot || '';
    var languages = document.getElementById('languages');
    languages.textContent = 'Language: ' + movie.Language || '';
    var poster = document.getElementById('poster');
    var posterSrc = movie.Poster || '';
    poster.setAttribute('src', "".concat(posterSrc));
    var actors = document.getElementById('actors');
    actors.textContent = 'Actors: ' + movie.Actors || '';
    var genre = document.getElementById('genre');
    genre.textContent = 'Genre: ' + movie.Genre || '';
    var score = document.getElementById('score');

    if (movie.imdbRating !== "N/A") {
      score.classList.remove('d-none');
      score.textContent = movie.imdbRating || '';
    } else {
      score.classList.add('d-none');
    }

    var time = document.getElementById('time');
    time.textContent = movie.Runtime;
  }
}