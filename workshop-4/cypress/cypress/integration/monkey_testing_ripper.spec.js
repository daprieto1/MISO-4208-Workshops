describe('Los estudiantes under monkeys', function () {
  it('visits los estudiantes and survives monkeys', function () {
    cy.visit('https://losestudiantes.co');
    cy.contains('Cerrar').click();
    cy.wait(1000);
    randomClick(10);
  })
})

function randomClick(monkeysLeft) {
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

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