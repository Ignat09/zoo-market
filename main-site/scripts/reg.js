let login;
let nameReg = /^\D\w+/;
let pasReg = /^\D[A-Za-z0-9а-яА-Я_*]+/;
function verify(f) {
  // перевірка прізвища
  if (
    f.lname.value.length == 0 ||
    f.lname.value.length < 8 ||
    f.lname.value.length > 20 ||
    !f.lname.value.match(nameReg)
  ) {
    alert("Введите правильное имя/логин(от 8 до 20 символов)");
    f.lname.focus();
    return false;
  }

  // перевірка телефону
  if (!f.phone.value.match(/^((\+38)-?(0\d{2})-?(\d{3}-?\d{2}-?\d{2}))$/)) {
    alert("Введите правильный телефон");
    f.phone.focus();
    return false;
  }

  //проверка пароля
  if (
    f.password.value.length == 0 ||
    f.password.value.length <= 8 ||
    f.password.value.length >= 20 ||
    f.password.value.match(pasReg)
  ) {
    alert("Введите правильный пароль(от 8 до 20 символов)");
    f.password.focus();
    return false;
  }
  // якщо все ОК
  login = f.lname.value;
  document.cookie = `${login}`;
  return true;
}
