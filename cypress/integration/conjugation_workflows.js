describe("My First Test", function() {
  it("change the amout of verbs", function() {
    cy.visit("http://localhost:3000/");
    cy.get("#number-of-verbs").click();
    cy.get('[data-value="10"]').click();
  });

  it("can select tenses and they show", function() {
    cy.get("#Pretérito-Perfeito-checkbox").click();
    cy.get("#Pretérito-Imperfeito-checkbox").click();
    cy.contains("Start Practice").click();

    cy.url().should("include", "/conjugate");
    cy.contains("Presente").should("exist");
    cy.contains("Pretérito Perfeito").should("exist");
    cy.contains("Pretérito Imperfeito").should("exist");
    cy.contains("Subjuntivo Futuro").should("not.exist");
  });
});
