const products = [{
        name: 'tomato',
        quantity: 100,
        price: 25,
        isBought: false,
    },
    {
        name: 'apple',
        quantity: 150,
        price: 8,
        isBought: true,
    },
    {
        name: 'coconut',
        quantity: 80,
        price: 43,
        isBought: false,
    },
    {
        name: 'potato',
        quantity: 200,
        price: 10,
        isBought: true,
    },
    {
        name: 'melon',
        quantity: 20,
        price: 38,
        isBought: false,
    }
]

function renderProductList(el) {
    const isBoughtIndicate = el.isBought ? 'Придбано' : 'Не придбано';
    return console.log(`${el.name} (Кількість: ${el.quantity}, Ціна за одиницю: ${el.price}, ${isBoughtIndicate}, Сума: ${el.quantity * el.price}`);
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
    const sortedArray = array.slice();
    sortedArray.sort((a, b) => a.isBought - b.isBought).forEach((el) => {
       renderProductList(el)
    });
}
// Придбання продукту за назвою
function productPurchase(name) {
    const isInList = products.find(el => el.name.toLowerCase().includes(name));
    if (!isInList) {
        return console.log(`${name} не знайдено у списку!`);
    } else {
        isInList.isBought = true;
        return console.log(`${isInList.name} придбано!`);
    }
}

function listOfProductsAlert() {
    const show = confirm('Хочете передивитись список продуктів?');
    if (!show) {
        return false;
    } else {
        listOfProducts(products);
        const shopped = prompt('Якщо хочете придбати продукт введіть назву продукта');
        if (!shopped) {
            return console.log('Ви не ввели назву продукта');
        } else {
            productPurchase(shopped.toLowerCase());
            listOfProducts(products);
        }
    }
}

// Видалення продукту із переліку
const userCart = products.slice();

function deleteProduct(name) {
    const delProduct = userCart.findIndex((el) => el.name.toLowerCase().includes(name));
    if (delProduct >= 0) {
        userCart.splice(delProduct, 1);
    } else {
        console.log('Продукт із такою назвою не знайдено!');
        return false;
    }
}
// збільшення кількості існуючого товару 
function setQuantity(name, quantity) {
    const newProd = userCart.findIndex((el) => el.name.toLowerCase().includes(name));
    userCart[newProd].quantity = quantity;
}

function addProductToCart(name, quantity) {
    const newProd = userCart.find((el) => el.name.toLowerCase().includes(name));
    if (!newProd) {
        console.log(`Такий продукт  не знайдено у списку`);
        const isAdd = confirm('Додати продукт до списку?')
        if (isAdd) {
            const newProductPrice = +prompt(`Введіть вартість ${name}`)
            if (isNaN(newProductPrice)) {
                return false
            }
            const newProdtoAdd = {name: name, quantity: quantity, price:newProductPrice, isBought: false};
            userCart.push(newProdtoAdd);
            return console.log(`Новий продукт додано`);
        }
    } else {
        setQuantity(newProd.name, newProd.quantity + quantity);
        return console.log(`Продукт доданий`);
    }
}

function addOrDeleteProductsAlert() {
    const isDelete = confirm('Хочете видалити продукт?');
    if (!isDelete) {
        const isAddQuantity = confirm('Хочете додати?');
        if (!isAddQuantity) {
            return false;
        } else {
            const productToAddName = prompt('Введіть назву продукта');
            if (!productToAddName) {
                return false
            };
            const productToAddQuantity = +prompt('Введіть кількість продукта');
            if (isNaN(productToAddQuantity)) {
                return false
            };
            addProductToCart(productToAddName, productToAddQuantity);
            return listOfProducts(userCart);
        }
    } else {
        const productToDeleteName = prompt('Введіть назву продукта');
        if (!productToDeleteName) {
            return false
        };
        deleteProduct(productToDeleteName);
        listOfProducts(userCart);
    }
}

// 3 task --------------------------------------
function getTotalSum() {
    let total = 0;
    for (const item of userCart) {
        total += item.quantity * item.price;
    }
    return console.log(`Загальна сума продуктів ${total}`);
}

function getTotalSumIsBought() {
    let totalSumIsBought = 0;
    for (const item of userCart) {
        if (item.isBought === true) {
            totalSumIsBought += item.quantity * item.price;
        }
    }
    return console.log(`Загальна сума продуктів що придбані ${totalSumIsBought}`);
}

function sortedByMethod(method) {
    const sortedListOfProducts = userCart.slice();
    console.log(sortedListOfProducts, method);
    sortedListOfProducts.sort((a, b) => {
        const sumIncrease = a.quantity * a.price;
        const sumDecrease = b.quantity * b.price;
        return method ? sumIncrease - sumDecrease : sumDecrease - sumIncrease;
    }).forEach(el => console.log(renderProductList(el)));
}

function sumAndSortAlert() {
    const isTotalSum = confirm('Вивести загальну суму всіх продуктів?');
    if(!isTotalSum) {
        const isTotalSumIsBought = confirm('Вивести загальну суму всіх придбаних продуктів?');
        if(!isTotalSumIsBought) {
            const method = confirm('Вивести загальну суму продуктів за зростанням (Так=OK або Ні=Cancel)?');
            return sortedByMethod(method);
        } else {
            return getTotalSumIsBought();
        }
    } else {
        return getTotalSum();
    }
}

// function speak(f){
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