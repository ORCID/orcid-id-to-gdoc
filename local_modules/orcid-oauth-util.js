var querystring = require("querystring"),
request = require('request');

var OcridOAuthUtil = function (CLIENT_ID, CLIENT_SECRET, AUTHORIZATION_ENDPOINT_URL, TOKEN_ENDPOINT_URL) {
  this.CLIENT_SECRET = CLIENT_SECRET;
  this.CLIENT_ID = CLIENT_ID;
  this.TOKEN_ENDPOINT_URL = TOKEN_ENDPOINT_URL;
  this.AUTHORIZATION_ENDPOINT_URL = AUTHORIZATION_ENDPOINT_URL;
};

// generates a link to orcid for authorization
OcridOAuthUtil.prototype.getAuthUrl = function(redirect_uri, state) {
  return this.AUTHORIZATION_ENDPOINT_URL + '?'
   + querystring.stringify({
      'redirect_uri': redirect_uri,
      'scope': '/authenticate',
      'response_type':'code',
      'client_id': this.CLIENT_ID,
      'show_login': 'true',
      'state': state //state maps to current google sheet
    });
}

OcridOAuthUtil.prototype.exchangeCode = function(code,callback) {
      // config for exchanging code for token 
    var reqConfig = {
      url: this.TOKEN_ENDPOINT_URL,
      method: 'post',
      body: querystring.stringify({
        'code': code,
        'client_id': this.CLIENT_ID,
        'client_secret': this.CLIENT_SECRET,
        'grant_type': 'authorization_code',
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=utf-8'
      }
    }
    //making request exchanging code for token
    request(reqConfig, callback);
}

exports.OcridOAuthUtil = OcridOAuthUtil;