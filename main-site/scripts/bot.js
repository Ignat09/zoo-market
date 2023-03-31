$(function () {
  let check;
  let rand;
  let rand1;

  const phrases = [
    "Что вы думаете насчет черпах? По-моему это лучшие домашние питомцы",
    "Конечно",
    "Хм, очень интересно",
    "Сегодня прекрасная погода!",
    "Как у вас дела?",
    "Что делаете?",
  ];

  const moods = [
    "Сегодня у меня все нормально",
    "Все хорошо",
    "Терпимо",
    "Если честно, то не очень",
  ];

  const hello =
    "Здравствуйте! Я - чат-бот компании GAG_zoo, если у вас есть вопросы, то задавайте, а я попробую ответить, если вы хотите закрыть переписку со мной, то просто нажмите на край этого окна(так же есть интересная штука, что бы узнать о ней подробнее напишите мне 'бонус'";
  const goodbye = "До свидания!";
  const adress =
    "Наш офис находится по адрессу 68091, Харьковская область, город Харьков, пл. Львовская, 54";
  const activity =
    "Наша компания занимаетя продажей экзотических домашних питомцев, которые разрешены законами";
  const email =
    "zoo.khark@gmail.com - это адресс электронной почты нашей компании";
  const phoneNumber =
    "Телефон службы поддержки нашей компании - +38(082)3266701";

  $("#chatbot").click(function () {
    $(this).toggleClass("show");
  });

  $("#answers").append(`<div class = "bot_answ">${hello}</div>`);

  $("#answers").click(function () {
    return false;
  });

  $("#question").click(function () {
    return false;
  });

  $("#ok").click(function () {
    let q = $("#question").val().trim();
    $("#question").val("");
    if (q != "") {
      $("#answers").append(`<div class="human_answ">${q}</div>`);

      setTimeout(function () {
        if (q.toLowerCase().includes("номер")) {
          $("#answers").append(`<div class="bot_answ">${phoneNumber}</div>`);
          check = false;
        } else if (
          q.toLowerCase().includes("почта") ||
          q.toLowerCase().includes("почту") ||
          q.toLowerCase().includes("почты")
        ) {
          $("#answers").append(`<div class="bot_answ">${email}</div>`);
          check = false;
        } else if (
          q.toLowerCase().includes("спасибо") ||
          q.toLowerCase().includes("благодарствую") ||
          q.toLowerCase().includes("спс")
        ) {
          $("#answers").append(`<div class="bot_answ">не за что:)</div>`);
          check = false;
        } else if (
          q.toLowerCase().includes("у тебя") ||
          q.toLowerCase().includes("у вас")
        ) {
          rand1 = Math.floor(Math.random() * moods.length);
          $("#answers").append(`<div class="bot_answ">${moods[rand1]}</div>`);
          check = false;
        }
        if (q.toLowerCase().includes("бонус")) {
          $("#answers").append(
            `<div class="bot_answ">О, так я вас заинетересовал? Нажмите <a href="game.html">сюда</a>(средней кнопкой мыши)</div>`
          );
          check = false;
        }
        if (
          q.toLowerCase().includes("где вы") ||
          q.toLowerCase().includes("где ваш") ||
          q.toLowerCase().includes("где ты") ||
          q.toLowerCase().includes("где твой") ||
          q.toLowerCase().includes("где")
        ) {
          $("#answers").append(`<div class="bot_answ">${adress}</div>`);
          check = false;
        } else if (
          q.toLowerCase().includes("занимается") ||
          q.toLowerCase().includes("делает") ||
          q.toLowerCase().includes("делаете") ||
          q.toLowerCase().includes("занимаетесь")
        ) {
          $("#answers").append(`<div class="bot_answ">${activity}</div>`);
          check = false;
        }
        if (q.toLowerCase().includes("пока")) {
          $("#answers").append(`<div class="bot_answ">${goodbye}</div>`);
          check = false;
        } else if (check != false) {
          rand = Math.floor(Math.random() * phrases.length);
          $("#answers").append(`<div class="bot_answ">${phrases[rand]}</div>`);
          check = true;
        }
        let chatbot = document.getElementById("chatbot");
        $("#chatbot").animate(
          { scrollTop: chatbot.scrollHeight - chatbot.clientHeight },
          100
        );
      }, 1000);
    }
    check = true;
    return false; // preventDefault and stopPropagation()
  });

  function enterKey(event) {
    if (event.keyCode == 13) {
      $("#ok").click();
      return false;
    }
  }

  $("#question").keypress("keyup", enterKey);
});
