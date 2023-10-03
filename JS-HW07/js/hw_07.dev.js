"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}]; // SHOW PLAYLIST-------------OPEN MODAL WINDOW----------------- 

function playlist(markupPosition) {
  var buttonText = document.getElementById('playlist').textContent;
  var list = document.querySelector("".concat(markupPosition));
  var playlistMarkup = document.getElementById('playlist_list');
  console.log(playlistMarkup);

  if (playlistMarkup === null) {
    var htmlToInsert = '<ul id="playlist_list">';

    for (var i = 0; i < playList.length; i++) {
      htmlToInsert += "<li class=\"playlist_item\"><div>Song name: ".concat(playList[i].song, "</div><div>Author: ").concat(playList[i].author, "</div></li>");
    }

    htmlToInsert += '</ul>';
    list.insertAdjacentHTML('afterend', htmlToInsert);

    if (markupPosition === '#list') {
      buttonText = 'hide playlist';
      document.getElementById('playlist').textContent = buttonText;
    }
  } else {
    playlistMarkup.outerHTML = '';

    if (markupPosition === '#list') {
      document.getElementById('playlist').textContent = 'show playlist';
    }
  }
} // OPEN MODAL WINDOW-----------------


function toggleModal(e) {
  e.preventDefault();
  document.querySelector('[data-modal]').classList.toggle('is-hidden');
  document.querySelector('body').classList.toggle('fixed');
  var list = document.querySelector('#modalContent');
  var playlistMarkup = document.getElementById('playlist_list-modal');

  if (playlistMarkup === null) {
    var htmlToInsert = '<ul id="playlist_list-modal">';

    for (var i = 0; i < playList.length; i++) {
      htmlToInsert += "<li class=\"playlist_item\"><div>Song name: ".concat(playList[i].song, "</div><div>Author: ").concat(playList[i].author, "</div></li>");
    }

    htmlToInsert += '</ul>';
    list.insertAdjacentHTML('afterend', htmlToInsert);
  } else {
    playlistMarkup.outerHTML = '';
  }
} // TRAFFIC LIGHTS---------


var index = 0;
var lightColor = {
  0: 'red',
  1: 'yellow',
  2: 'green'
};

function switchLight(e) {
  e.preventDefault();
  var lights = document.querySelectorAll('.light-btn');

  switch (index) {
    case 0:
      lights[1].classList.remove("".concat(lightColor[1]));
      lights[2].classList.remove("".concat(lightColor[2]));
      lights[index].classList.add("".concat(lightColor[index]));
      break;

    case 1:
      lights[0].classList.remove("".concat(lightColor[0]));
      lights[2].classList.remove("".concat(lightColor[2]));
      lights[index].classList.add("".concat(lightColor[index]));
      break;

    case 2:
      lights[0].classList.remove("".concat(lightColor[0]));
      lights[1].classList.remove("".concat(lightColor[1]));
      lights[index].classList.add("".concat(lightColor[index]));
      break;

    default:
      lights[0].classList.add("".concat(lightColor[0]));
      lights[1].classList.add("".concat(lightColor[1]));
      lights[2].classList.add("".concat(lightColor[2]));
      break;
  }

  index < 3 ? index += 1 : index = 0;
}

function toggleLights(e) {
  e.preventDefault();
  var isVisible = false;
  var buttonTrafficText = document.querySelector('[data-light]').textContent;
  document.querySelector('#trafficLights').classList.toggle('is-hidden');

  if (document.querySelector('#trafficLights').className !== "traffic-lights_wrapper is-hidden") {
    isVisible = true;
  } else {
    isVisible = false;
  }

  ;

  if (isVisible) {
    buttonTrafficText = 'hide traffic lights';
    document.querySelector('[data-light]').textContent = buttonTrafficText;
    return;
  } else {
    buttonTrafficText = 'show traffic lights';
    document.querySelector('[data-light]').textContent = buttonTrafficText;
  }
}