import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get("/login") as Promise<any>;
  }

  inputEmail(){
    element(by.css(' [name="email"] ')).sendKeys('brianheredia@gmail.com');
  }

  inputPassword(){
    element(by.css('[name="contraseña"]')).sendKeys('v12421226');
  }

   getMessage(){
      element(by.css('[id="OK"]')).click().then(()=>{
        return element(by.css('[id="checking"]')).getText();
      });
      
  }


}