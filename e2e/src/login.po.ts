import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get("/login") as Promise<any>;
  }

  inputEmail(){
    element(by.name('email')).sendKeys('brianheredia@gmail.com');
  }

  inputPassword(){
    element(by.name('contraseña')).sendKeys('v12421226');
  } 

   async getMessage(){
      await element(by.id('OK')).click().then(()=>{
        browser.waitForAngular().then(()=>{
            return element(by.id('checking')).getText();
        });
      });
      
  }


}