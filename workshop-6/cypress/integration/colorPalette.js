describe('Random color palette', () => {

  context('Generate Random Colors', () => {
    beforeEach(function () {
      cy.visit('https://daprieto1.github.io/MISO-4208-randomColors/')
    })

    it('T1: Should generate random color from empty palette', () => {
      cy.contains('Paleta de colores')
      cy.screenshot('T1-before')
      cy.contains(' Generar nueva paleta').click()
      cy.screenshot('T1-after')
    })

    it('T2: Should generate random color from dirty palette', () => {
      cy.contains('Paleta de colores')      
      cy.contains(' Generar nueva paleta').click()
      cy.screenshot('T2-before')
      cy.contains(' Generar nueva paleta').click()
      cy.screenshot('T2-after')
    })

  })

  context('Clean Palette', () => {
    beforeEach(function () {
      cy.visit('https://daprieto1.github.io/MISO-4208-randomColors/')
    })

    it('T3: Should clean from empty palette', () => {
      cy.contains('Paleta de colores')
      cy.screenshot('T3-before')
      cy.contains(' Limpiar paleta').click()
      cy.screenshot('T3-after')
    })

    it('T2: Should generate random color from dirty palette', () => {
      cy.contains('Paleta de colores')      
      cy.screenshot('T4-before')
      cy.contains(' Generar nueva paleta').click()      
      cy.contains(' Limpiar paleta').click()
      cy.screenshot('T4-after')
    })

  })

})

