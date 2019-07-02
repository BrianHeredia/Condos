import { LoginPage } from './login.po';
import { browser, logging, element, by } from 'protractor';


describe('login E2E Test', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should do login right', () => {
    page.navigateTo();
    element(by.css('[routerLink="/login"]')).click();
    page.inputEmail();
    page.inputPassword();
    element(by.css('[id="OK"]')).click().then(()=>{
      expect(page.getH1()).toEqual('Tus condominios:');
    });
  });

});
