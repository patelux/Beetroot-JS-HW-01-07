"use strict";

var products = [{
  name: 'tomato',
  quantity: 100,
  price: 25,
  isBought: false
}, {
  name: 'apple',
  quantity: 150,
  price: 8,
  isBought: true
}, {
  name: 'coconut',
  quantity: 80,
  price: 43,
  isBought: false
}, {
  name: 'potato',
  quantity: 200,
  price: 10,
  isBought: true
}, {
  name: 'melon',
  quantity: 20,
  price: 38,
  isBought: false
}];

function renderProductList(el) {
  var isBoughtIndicate = el.isBought ? 'Придбано' : 'Не придбано';
  return console.log("".concat(el.name, " (\u041A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C: ").concat(el.quantity, ", \u0426\u0456\u043D\u0430 \u0437\u0430 \u043E\u0434\u0438\u043D\u0438\u0446\u044E: ").concat(el.price, ", ").concat(isBoughtIndicate, ", \u0421\u0443\u043C\u0430: ").concat(el.quantity * el.price));
}
/* 1 variant of rendering-----------*/
// function listOfProducts() {
//     products.forEach((el) => {
//         if (el.isBought){
//             renderProductList(el)
//         } });
//         products.forEach((el) => {
//             if (!el.isBought){
//                 renderProductList(el) 
//             } });
//         }    

/* 2 variant of rendering-----------*/


function listOfProducts(array) {
  var sortedArray = array.slice();
  sortedArray.sort(function (a, b) {
    return a.isBought - b.isBought;
  }).forEach(function (el) {
    renderProductList(el);
  });
} // Придбання продукту за назвою


function productPurchase(name) {
  var isInList = products.find(function (el) {
    return el.name.toLowerCase().includes(name);
  });

  if (!isInList) {
    return console.log("".concat(name, " \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0443 \u0441\u043F\u0438\u0441\u043A\u0443!"));
  } else {
    isInList.isBought = true;
    return console.log("".concat(isInList.name, " \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u043E!"));
  }
}

function listOfProductsAlert() {
  var show = confirm('Хочете передивитись список продуктів?');

  if (!show) {
    return false;
  } else {
    listOfProducts(products);
    var shopped = prompt('Якщо хочете придбати продукт введіть назву продукта');

    if (!shopped) {
      return console.log('Ви не ввели назву продукта');
    } else {
      productPurchase(shopped.toLowerCase());
      listOfProducts(products);
    }
  }
} // Видалення продукту із переліку


var userCart = products.slice();

function deleteProduct(name) {
  var delProduct = userCart.findIndex(function (el) {
    return el.name.toLowerCase().includes(name);
  });

  if (delProduct >= 0) {
    userCart.splice(delProduct, 1);
  } else {
    console.log('Продукт із такою назвою не знайдено!');
    return false;
  }
} // збільшення кількості існуючого товару 


function setQuantity(name, quantity) {
  var newProd = userCart.findIndex(function (el) {
    return el.name.toLowerCase().includes(name);
  });
  userCart[newProd].quantity = quantity;
}

function addProductToCart(name, quantity) {
  var newProd = userCart.find(function (el) {
    return el.name.toLowerCase().includes(name);
  });

  if (!newProd) {
    console.log("\u0422\u0430\u043A\u0438\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442  \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0443 \u0441\u043F\u0438\u0441\u043A\u0443");
    var isAdd = confirm('Додати продукт до списку?');

    if (isAdd) {
      var newProductPrice = +prompt("\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0432\u0430\u0440\u0442\u0456\u0441\u0442\u044C ".concat(name));

      if (isNaN(newProductPrice)) {
        return false;
      }

      var newProdtoAdd = {
        name: name,
        quantity: quantity,
        price: newProductPrice,
        isBought: false
      };
      userCart.push(newProdtoAdd);
      return console.log("\u041D\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0442 \u0434\u043E\u0434\u0430\u043D\u043E");
    }
  } else {
    setQuantity(newProd.name, newProd.quantity + quantity);
    return console.log("\u041F\u0440\u043E\u0434\u0443\u043A\u0442 \u0434\u043E\u0434\u0430\u043D\u0438\u0439");
  }
}

function addOrDeleteProductsAlert() {
  var isDelete = confirm('Хочете видалити продукт?');

  if (!isDelete) {
    var isAddQuantity = confirm('Хочете додати?');

    if (!isAddQuantity) {
      return false;
    } else {
      var productToAddName = prompt('Введіть назву продукта');

      if (!productToAddName) {
        return false;
      }

      ;
      var productToAddQuantity = +prompt('Введіть кількість продукта');

      if (isNaN(productToAddQuantity)) {
        return false;
      }

      ;
      addProductToCart(productToAddName, productToAddQuantity);
      return listOfProducts(userCart);
    }
  } else {
    var productToDeleteName = prompt('Введіть назву продукта');

    if (!productToDeleteName) {
      return false;
    }

    ;
    deleteProduct(productToDeleteName);
    listOfProducts(userCart);
  }
} // 3 task --------------------------------------


function getTotalSum() {
  var total = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = userCart[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      total += item.quantity * item.price;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 ".concat(total));
}

function getTotalSumIsBought() {
  var totalSumIsBought = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = userCart[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;

      if (item.isBought === true) {
        totalSumIsBought += item.quantity * item.price;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0456\u0432 \u0449\u043E \u043F\u0440\u0438\u0434\u0431\u0430\u043D\u0456 ".concat(totalSumIsBought));
}

function sortedByMethod(method) {
  var sortedListOfProducts = userCart.slice();
  console.log(sortedListOfProducts, method);
  sortedListOfProducts.sort(function (a, b) {
    var sumIncrease = a.quantity * a.price;
    var sumDecrease = b.quantity * b.price;
    return method ? sumIncrease - sumDecrease : sumDecrease - sumIncrease;
  }).forEach(function (el) {
    return console.log(renderProductList(el));
  });
}

function sumAndSortAlert() {
  var isTotalSum = confirm('Вивести загальну суму всіх продуктів?');

  if (!isTotalSum) {
    var isTotalSumIsBought = confirm('Вивести загальну суму всіх придбаних продуктів?');

    if (!isTotalSumIsBought) {
      var method = confirm('Вивести загальну суму продуктів за зростанням (Так=OK або Ні=Cancel)?');
      return sortedByMethod(method);
    } else {
      return getTotalSumIsBought();
    }
  } else {
    return getTotalSum();
  }
} // function speak(f){
//     var d=new SpeechSynthesisUtterance();
//     var e=speechSynthesis.getVoices();
//     d.voice=e[2];
// d.voiceURI="native";
//     d.volume=1;
//     d.rate=1;
//     d.pitch=1;
//     d.text=f;
//     d.lang="en-EN";
//     speechSynthesis.speak(d)
// }
// speak("Hello my master!");