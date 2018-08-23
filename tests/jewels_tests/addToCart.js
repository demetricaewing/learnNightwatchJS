var utils = require('../../pages/ngwtpg');

module.exports = {
    '@tags': ['addtocart'],

     before: function(browser){
         utils(browser).openBrowser();
     },
     'Add a featured product to cart': function(browser){
        utils(browser).featuredProductAddtoCart();
     },
     after: function(browser){
        utils(browser).closeBrowser();
    }
};