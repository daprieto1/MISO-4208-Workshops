import { browser, by, element, ElementFinder } from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  searchForHero(heroName: string) {
    element(by.id('search-box')).sendKeys(heroName);
    element(by.css('.search-result')).click();
    return element.all((by.tagName('h2')));
  }

  deleteHero() {
    element(by.tagName('my-heroes'))
      .all(by.tagName('li'))
      .first()
      .element(by.tagName('button'))
      .click();
  }

  editHero(newName: string) {
    var input = element(by.tagName("input"));
    input.clear();
    input.sendKeys(newName);
    element(by.buttonText('Save')).click();
    browser.waitForAngular();
  }

  navigateToHero(wayToNavigate: string) {
    switch (wayToNavigate) {
      case 'dashboard':
        element.all(by.css('.module.hero'))
          .all(by.tagName('h4'))
          .first()
          .click();
        break;
      case 'heroList':
        element(by.tagName('my-heroes'))
          .all(by.tagName('li'))
          .first()
          .click();
        element(by.buttonText('View Details')).click();
        break;
    }
    browser.waitForAngular();
    return element.all((by.tagName('h2')));
  }
}
