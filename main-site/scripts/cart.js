let itemBox = document.querySelectorAll(".item_box"); // блок каждого товара
let cartCont = document.getElementById("cart_content"); // блок вывода данных корзины
let totalPrice = document.getElementById("totalPrice");

// Записываем данные в LocalStorage
function setCartData(o) {
  localStorage.setItem("cart", JSON.stringify(o));
}
// Получаем данные из LocalStorage
function getCartData() {
  return JSON.parse(localStorage.getItem("cart"));
}

function addToCart(e) {
  totalPrice.innerHTML = "";
  let button = e.target;
  button.disabled = true; // блокируем кнопку на время операции с корзиной
  let cartData = getCartData() || {}; // получаем данные корзины или создаём новый объект, если данных еще нет
  let parentBox = button.parentNode; // родительский элемент кнопки "Добавить в корзину";
  let itemId = button.getAttribute("data-id"); // ID товара
  let itemTitle = parentBox.querySelector(".item_title").innerHTML; // название товара
  let itemPrice = parentBox.querySelector(".item_price").innerHTML; // стоимость товара
  console.log(cartData);
  if (cartData.hasOwnProperty(itemId)) {
    // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2] += 1;
  } else {
    // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  // Обновляем данные в LocalStorage
  setCartData(cartData);
  button.disabled = false; // разблокируем кнопку после обновления
  cartCont.innerHTML = "Товар добавлен в корзину.";
  setTimeout(function () {
    cartCont.innerHTML = "Продолжить покупки...";
  }, 1000);
}
// Генериурем корзину со списком добавленных товаров
function openCart(e) {
  let cardTable = "";
  let fullPrice = 0;
  let cartData = getCartData(); // вытаскиваем все данные корзины
  console.log(JSON.stringify(cartData));
  // если что-то в корзине уже есть, формируем таблицу
  if (cartData !== null) {
    // let cardTable = "";
    cardTable = `<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>`;
    for (let items in cartData) {
      cardTable += "<tr>";
      for (let i = 0; i < cartData[items].length; i++) {
        cardTable += "<td>" + cartData[items][i] + "</td>";
        if (i == 1) {
          fullPrice += Number(cartData[items][i] * cartData[items][2]);
        }
      }
      cardTable += "</tr>";
    }
    cardTable += "<table>";
    // cartCont.innerHTML = cardTable;
  } else {
    // если в корзине пусто, то сигнализируем об этом
    cartCont.innerHTML = "В корзине пусто!";
  }
  cardTable += `<th style="color: #b4f867;">Итоговая стоимость:</th> <td style="color: #b4f867;">${fullPrice}</td><a
  style="color: rgb(250, 253, 249); background-color: rgb(30, 156, 57)"href="./congrations.html">Подтвердить покупку</a><td></td>`;
  cartCont.innerHTML = cardTable;
}

// Функция очистки корзины
function clearCart(e) {
  localStorage.removeItem("cart");
  cartCont.innerHTML = "Корзина очишена.";
  totalPrice.innerHTML = "Вы отменили покупки";
}

// Обработчик события на кнопку Очистить корзину
document.getElementById("clear_cart").addEventListener("click", clearCart);

// Обработчик события на каждую кнопку "Добавить в корзину"
for (let i = 0; i < itemBox.length; i++) {
  itemBox[i].querySelector(".add_item").addEventListener("click", addToCart);
}

// Обработчик события на кнопку Открыть корзину
document.getElementById("checkout").addEventListener("click", openCart);
