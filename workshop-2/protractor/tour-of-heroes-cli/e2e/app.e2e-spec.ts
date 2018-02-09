import { TourOfHeroesPage } from './app.po';
import { element } from 'protractor';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});

describe('Tour of heroes, search for hero', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
  });

  it('should find Narco hero page', () => {
    var result = page.searchForHero('Narco');
    expect(result.count()).toBe(1);
    expect(result.first().getText()).toEqual('Narco details!');
  });

  it('should find Bombasto hero page', () => {
    var result = page.searchForHero('Bombasto');
    expect(result.count()).toBe(1);
    expect(result.first().getText()).toEqual('Bombasto details!');
  });
});

describe('Tour of heroes, delete hero', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });

  it('should find delete', () => {
    page.deleteHero();
    expect(page.getAllHeroes().count()).toBe(10);
  })

});

describe('Tour of heroes, edit hero', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should display top 4 heroes original', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should find specific hero page', () => {
    var result = page.searchForHero('Mr. Nice');
    expect(result.count()).toBe(1);
    expect(result.first().getText()).toEqual('Mr. Nice details!');
  });

  it('should display top 4 heroes but with edited content', () => {
    page.editHero('Mr. Tests');
    expect(page.getTop4Heroes()).toEqual(['Mr. Tests', 'Narco', 'Bombasto', 'Celeritas']);
  });
});

describe('Tour of heroes, Navigate', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('navigate to hero from dashboard', () => {
    page.navigateTo();
    var result = page.navigateToHero('dashboard');
    expect(result.first().getText()).toContain('details!');
  });

  it('navigate to hero from hero list', () => {
    page.navigateToHeroes();
    var result = page.navigateToHero('heroList');
    expect(result.first().getText()).toContain('details!');
  });

  it('navigate to hero from searching', () => {
    page.navigateTo();
    var result = page.searchForHero('Narco');
    expect(result.first().getText()).toEqual('Narco details!');
  });
});
