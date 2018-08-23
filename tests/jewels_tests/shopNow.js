var utils = require('../../pages/ngwtpg');

module.exports = {
    '@tags': ['shopnow'],

     before: function(browser){
         utils(browser).openBrowser();
     },
     
    'Click the shop now button': function(browser){
        utils(browser).shopNowButton();
    },

     after: function(browser){
        utils(browser).closeBrowser();
    }
};