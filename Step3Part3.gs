var token = " your bot token ";
var url = "https://api.telegram.org/bot" + token;
var webAppUrl = "your webAppUrl";

var mainMenu_kb = {
  "inline_keyboard": [
    [{
      "text": "NPShareBot",
      "callback_data": "NPShareBot",
      "url": "https://t.me/NPShareBot"
    }],
    [{
      "text": "BotFather",
      "callback_data": "BotFather",
      "url": "https://t.me/BotFather"
    }],
    [{
      "text": "SG Food Deals",
      "callback_data": "SGfooddeals",
      "url": "https://t.me/SGfooddeals"
    }]
  ]
};

function doPost(e) {
  try {
    var contents = JSON.parse(e.postData.contents);
    var message = contents.message;
    var resp = sendTextWithButtons(message.from.id, "Select bot to launch", mainMenu_kb);
  }
  catch (err) {
    Logger.log(err);
  }
}

function sendTextWithButtons(chatId, text, keyboard) {
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatId),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(keyboard)
    }
  };
  var response = UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
  return response.getContentText();
}

function getMe() {
  var response = UrlFetchApp.fetch(url + "/getMe");
  Logger.log(response.getContentText());
}

function setWebhook() {
  var response = UrlFetchApp.fetch(url + "/setWebhook?url=" + webAppUrl);
  Logger.log(response.getContentText());
}