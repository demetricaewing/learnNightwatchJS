var utils = require('../../pages/ngwtpg');

module.exports = {
    '@tags': ['login'],

    before: function(browser){
        utils(browser).openBrowser(); 
    },
    'Go to the login page': function(browser){
        utils(browser).loginButton();
    },
    'Login page': function(browser){
        utils(browser).adminLogin();
    },
    after: function(browser){
        utils(browser).closeBrowser();
    }
};
