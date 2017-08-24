module.exports = {

  'get to signup page': (browser) => {

    browser
      .url(browser.launchUrl)
      .waitForElementVisible('.navbar', 1000)
      .click('a[href="/signup')

    browser.assert.urlContains('signup')
    browser.assert.cssClassPresent("form", "signup_form");
  },

  'signup user and redirect to profile': (browser) => {
    
    browser 
      .setValue('input[type-email]', 'b@baani.com')
      .setValue('input[type-text]', 'baani')
      .setValue('input[type-password]', 'baanipassword')
      .click('button[type-submit]')
      .waitForElementVisible('.navbar', 1000)
      .getText('h1', function(res){
        this.assert.equal(res.value, 'Thanks for signing up!')
      })
      
      browser.assert.urlEquals('users/baani/profile')
  },
  
  'close': (browser) => browser.end()
}
