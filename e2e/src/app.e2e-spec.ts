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
    expect(page.getMessage()).toEqual('Has inicado sesión correctamente!');
  });

});
