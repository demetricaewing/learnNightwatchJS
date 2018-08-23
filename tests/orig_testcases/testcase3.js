module.exports ={
    '@tags': ['testcase3'],
    'Existing User should be able to login': function (browser){
        browser
        .url('https://www.artsyjewels.com/')
        .waitForElementVisible('body', 1000)
        .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul > li:nth-child(1) > a > span > i')
        .setValue('#customer_login > div > p:nth-child(2) > input[type="email"]','ninevolt72@gmail.com')
        .setValue('#customer_login > div > p:nth-child(3) > input[type="password"]', 'deman1972')
        .click('#customer_login > div > p:nth-child(4) > input')
        .pause(3000)
        .end();
    }
}