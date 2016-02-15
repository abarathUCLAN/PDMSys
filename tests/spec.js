describe('Login test', function() {
  var emailBox = element(by.model('login.username'));
  var passwordBox = element(by.model('login.password'));
  var loginStatus = element(by.model('loginStatus'));
  var loginBtn = element(by.id('loginBtn'));

  it('Get url', function() {
    browser.get('http://localhost:8080/pdmsys/#/start');
  });

  it('Expected dynamic URL', function() {
    expect(browser.getTitle()).toEqual('Start - Pdmsys');
  });

  it('Fill the login model', function() {
    browser.sleep(2000);
    emailBox.sendKeys('test5@mail.com');
    browser.sleep(2000);
    passwordBox.sendKeys('Test1234');
  });

  it('Press login button', function() {
    browser.sleep(2000);
    loginBtn.click();
    browser.waitForAngular();
  });

  it('Projects overview', function() {
    expect(browser.getTitle()).toEqual('Home - Pdmsys');
    browser.sleep(2000);
  });
});
