/// <reference types="Cypress" />

describe('tasks management, user interaction', () => {
    it('should open and close the new task modal', () => {
        cy.visit('http://localhost:5173/');
        cy.contains('Add Task').click();
        // cy.contains('Cancel').click();
        // cy.get('.backdrop').click(); // 이건 실패한다. 무조건 중앙을 클릭하는데 backdrop이 아니라 다른 element를 클릭해서 그렇다.
        cy.get('.backdrop').click({ force: true });
        cy.get('.backdrop').should('not.exist');
        cy.get('dialog.modal').should('not.exist');
    });
});