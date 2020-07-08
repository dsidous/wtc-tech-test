describe('fe-wtc-tech-test', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.get('h1')
      .contains('Click on the instructions button to start')
      .should('be.visible');
  });

  it('should go to /instructions when click on button', () => {
    cy.get('a').contains('Instructions').click();
    cy.contains('Instructions:').should('be.visible');
  });
});
