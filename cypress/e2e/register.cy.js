import { errorMessages } from "../../src/components/Register";
describe('Register Page', () => {
  describe('Error Messages', () => {
  it('name input throws error for 2 chars', () => {
    cy.visit('http://localhost:5174/')

    cy.get('[data-cy="ad-input"]').type("em");

    cy.contains(errorMessages.ad)
  });
  it('Surname input throws error for 2 chars', () => {
    cy.visit('http://localhost:5174/')

    cy.get('[data-cy="soyad-input"]').type("ss");

    cy.contains(errorMessages.soyad)
  });
  it('Email input throws error for 2 chars', () => {
    cy.visit('http://localhost:5174/')

    cy.get('[data-cy="email-input"]').type("emre@wit.");

    cy.contains(errorMessages.email)
  });
  it('Password input throws error for 2 chars', () => {
    cy.visit('http://localhost:5174/')

    cy.get('[data-cy="password-input"]').type("1234");

    cy.contains(errorMessages.password)
  });
  it('button is disabled for unvalidated inputs', () => {
    cy.visit('http://localhost:5174/')

    cy.get('[data-cy="password-input"]').type("1234");

    cy.get('[data-cy="submit-button"]').should("be.disabled");
  });
});
 describe('Form inputs validated', () => {
  it('button enabled for validated inputs', () => {
    cy.visit('http://localhost:5174/')

    cy.get('[data-cy="ad-input"]').type("hasan");
    cy.get('[data-cy="soyad-input"]').type("asdwdasd");
    cy.get('[data-cy="email-input"]').type("asdase@wit.com");
    cy.get('[data-cy="password-input"]').type("1234Aa*");
    cy.get('[data-cy="submit-button"]').click();

    cy.get('[data-cy="response-message"]').should("be.visible");

  });
});
});
//commit1
//commit2
