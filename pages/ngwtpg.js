module.exports = function (browser){
    
    this.openBrowser = function(){
       browser
            .windowMaximize()
            .url('https://www.artsyjewels.com/')
           .waitForElementVisible('body', 1000)
        return browser
     }; 
 
     this.loginButton = function(){
     browser
         .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-3.col-sm-4.col-xs-12 > ul > li:nth-child(1) > a > span > i');
     };
 
     this.adminLogin = function(){
     browser
         .setValue('#customer_login > div > p:nth-child(2) > input[type="email"]','ninevolt72@gmail.com')
         .setValue('#customer_login > div > p:nth-child(3) > input[type="password"]', 'deman1972')
         .click('#customer_login > div > p:nth-child(4) > input');
     };
 
     this.mainEarringsHeader = function(){
     browser
         .moveToElement('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > a',1,1)
         .moveToElement('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > ul > li:nth-child(2) > a',1,1);
     };
     
     this.studs = function(){
         browser 
             .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > ul > li:nth-child(2) > ul > li:nth-child(1) > a')
             .waitForElementVisible('body', 2000)
             .assert.containsText('#shopify-section-collection-template > section > div.wrap-bread-crumb > div > div > strong', 'Studs');
         };
 
     this.pearlearrings = function(){
      browser 
         .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > ul > li:nth-child(2) > ul > li:nth-child(2) > a')
         .waitForElementVisible('body', 2000)
         .assert.containsText('#shopify-section-collection-template > section > div.wrap-bread-crumb > div > div > strong', 'Pearl Earrings');
     };
 
     this.hoops = function(){
         browser 
             .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > ul > li:nth-child(2) > ul > li:nth-child(3) > a')
             .waitForElementVisible('body', 2000)
             .assert.containsText('#shopify-section-collection-template > section > div.wrap-bread-crumb > div > div > strong', 'Hoops');
         };
         
     this.cuffs = function(){
         browser 
             .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > ul > li:nth-child(2) > ul > li:nth-child(4) > a')
             .waitForElementVisible('body', 2000)
             .assert.containsText('#shopify-section-collection-template > section > div.wrap-bread-crumb > div > div > strong', 'Cuffs');
         };
 
     this.fashionearrings = function(){
         browser 
             .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > ul > li:nth-child(2) > ul > li:nth-child(5) > a')
             .waitForElementVisible('body', 2000)
             .assert.containsText('#shopify-section-collection-template > section > div.wrap-bread-crumb > div > div > strong', 'Earrings');
         };
     
     this.otherearrings = function(){
         browser 
             .click('#header > div.header2.bg-white > div.header-nav2 > div > div > div.col-md-9.col-sm-8.col-xs-12 > nav > ul > li:nth-child(2) > ul > li:nth-child(2) > ul > li:nth-child(6) > a')
             .waitForElementVisible('body', 2000)
             .assert.containsText('#shopify-section-collection-template > section > div.wrap-bread-crumb > div > div > strong', 'Front Backs Earrings');
         };
 
     this.featuredProductAddtoCart = function(){
     browser
         .click('#AddToCart622380220450');
     };
 
     this.shopNowButton = function(){
     browser 
        .click('#shopify-section-1522923222604 > div > div > div > div.owl-wrapper-outer > div > div > div > div.banner-info.animated.text-center.zoomIn > a')
        .waitForElementVisible('body', 1000)
        .assert.containsText('#shopify-section-collection-template > section > div.wrap-bread-crumb > div > div > strong', 'Exclusive Selections');
     };
 
     this.closeBrowser = function(){
     browser
         .pause(3000)
         .end();
     };
   return this;
 };
