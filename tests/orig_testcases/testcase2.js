module.exports ={
    '@tags': ['testcase2'],
    'Search functionality is working': function (browser){
        browser
        .url('https://www.artsyjewels.com/')
        .waitForElementVisible('body', 1000)
        .setValue('#header > div.header2.bg-white > div.main-header2 > div > div > div.col-md-6.col-sm-8.col-xs-8 > form > input[type="search"]:nth-child(2)', ['pearl necklace', browser.Keys.ENTER])
        .assert.visible('body > div.wrap > div.wrap-bread-crumb > div > div > strong')
        .pause(2000)
    browser.saveScreenshot('./screenshots/image2.jpg')
        .end();
    }
}