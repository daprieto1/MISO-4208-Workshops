describe('Los estudiantes under monkeys', function () {
  it('visits los estudiantes and survives monkeys', function () {
    cy.visit('https://losestudiantes.co');
    cy.contains('Cerrar').click();
    cy.wait(1000);
    randomEvent(10);
  })
})

function randomEvent(monkeysLeft) {
  var monkeysLeft = monkeysLeft;
  if (monkeysLeft > 0) {
    console.log(`=> This is the ${monkeysLeft} monkey`);
    var randomEventId = getRandomInt(0, 4);
    console.log(`-> ${randomEventId} random event id`);
    var event;

    switch (randomEventId) {
      case 0:
        console.log('-> Link Click Event');
        event = randomLinkClickEvent(monkeysLeft);
        break;
      case 1:
        console.log('-> Type Event');
        event = randomTypeEvent(monkeysLeft);
        break;
      case 2:
        console.log('-> Select Event');
        event = randomSelectEvent(monkeysLeft);
        break;
      case 3:
        console.log('-> Button Click Event');
        event = randomButtonClickEvent(monkeysLeft);
        break;
    }

    event
      .then(ml => {
        cy.wait(1000)
        randomEvent(ml);
      })
      .catch(err => console.log(err));
  }
}

function randomClick(monkeysLeft) {

  var monkeysLeft = monkeysLeft;
  if (monkeysLeft > 0) {
    console.log(`=> This is the ${monkeysLeft} monkey`);
    cy.get('a').then($links => {
      console.log(`-> ${$links.length} links were found`);
      var randomInResult = getRandomInt(0, $links.length);
      console.log(`-> random int is ${randomInResult}`);
      var randomLink = $links.get(randomInResult);
      console.log(`-> The random link is: ${randomLink}`);
      if (!Cypress.dom.isHidden(randomLink)) {
        cy.wrap(randomLink).click({ force: true });
        monkeysLeft = monkeysLeft - 1;
      }
      cy.wait(1000)
      randomClick(monkeysLeft)
    });
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function randomSelectEvent(monkeysLeft) {
  return new Promise((resolve, reject) => {
    try {
      cy.get('select')
        .then($selects => {
          var randomSelect = $selects[getRandomInt(0, $selects.length)];
          var randomOption = randomSelect.options[getRandomInt(0, randomSelect.options.length)].value;

          if (!Cypress.dom.isHidden(randomSelect)) {
            console.log(`-> Selected option = ${randomOption}`);
            cy.wrap(randomSelect).select(randomOption, { force: true });
            monkeysLeft = monkeysLeft - 1;
          }
          resolve(monkeysLeft);
        });
    } catch (err) {
      resolve(monkeysLeft);
    }
  });
}

function randomButtonClickEvent(monkeysLeft) {
  return new Promise((resolve, reject) => {
    cy.get('button').then($buttons => {
      var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
      if (!Cypress.dom.isHidden(randomButton)) {
        cy.wrap(randomButton).click({ force: true });
        monkeysLeft = monkeysLeft - 1;
      }
      resolve(monkeysLeft);
    });
  });
}

function randomTypeEvent(monkeysLeft) {
  return new Promise((resolve, reject) => {
    try {
      cy.get('input[type="text"]')
        .then($inputs => {
          var randomInput = $inputs.get(getRandomInt(0, $inputs.length));

          cy.wrap(randomInput).type('Pruebas Automáticas', { force: true });
          monkeysLeft = monkeysLeft - 1;

          resolve(monkeysLeft);
        });
    } catch (err) {
      resolve(monkeysLeft);
    }
  });
}

function randomLinkClickEvent(monkeysLeft) {
  return new Promise((resolve, reject) => {
    cy.get('a').then($links => {
      var randomLink = $links.get(getRandomInt(0, $links.length));
      if (!Cypress.dom.isHidden(randomLink)) {
        cy.wrap(randomLink).click({ force: true });
        monkeysLeft = monkeysLeft - 1;
      }
      resolve(monkeysLeft);
    });
  });
}