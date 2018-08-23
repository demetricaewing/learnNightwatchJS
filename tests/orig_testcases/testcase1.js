
module.exports ={
    '@tags': ['testcase1'],
    'Open Homepage and click on headers': function (browser){
        browser
         .url('https://www.artsyjewels.com/')
         .waitForElementVisible('body', 1000)
         .assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels')
         .moveToElement('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > a',1,1)
         .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > ul > li:nth-child(1) > a')
         .pause(3000)
         .end();
     }
 }