import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  inputEmail(){
    element(by.css(' [name="email"] ')).sendKeys('brianheredia@gmail.com');
  }

  inputPassword(){
    element(by.css('[name="contraseña"]')).sendKeys('v12421226');
  }

  getH1(){
    return element(by.css('app-dashboard h1')).getText();
  }


}