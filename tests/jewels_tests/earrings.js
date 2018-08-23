var utils = require('../../pages/ngwtpg');

module.exports = {
    '@tags': ['earrings'],

     before: function(browser){
         utils(browser).openBrowser();
     },
     
    'Click for Main Earring header': function(browser){
        utils(browser).mainEarringsHeader();
    },
    
    'Click on Stud Earrings':  function(browser){
        utils(browser).mainEarringsHeader();
        utils(browser).studs();
    },

    'Click on Pearl Earrings':  function(browser){
        utils(browser).mainEarringsHeader();
        utils(browser).pearlearrings();
    },
    'Click on Hoops Earrings':  function(browser){
        utils(browser).mainEarringsHeader();
        utils(browser).hoops();
    },
    'Click on Cuff Earrings':  function(browser){
        utils(browser).mainEarringsHeader();
        utils(browser).cuffs();
    },
    'Click on Fashion Earrings':  function(browser){
        utils(browser).mainEarringsHeader();
        utils(browser).fashionearrings();
    },
    'Click on Other Earrings':  function(browser){
        utils(browser).mainEarringsHeader();
        utils(browser).otherearrings();
    },

     after: function(browser){
        utils(browser).closeBrowser();
    }
};