var token = "your bot token";
var url = "https://api.telegram.org/bot" + token;

function getMe() {
    var response = UrlFetchApp.fetch(url + "/getMe");
    Logger.log(response.getContentText());
}
