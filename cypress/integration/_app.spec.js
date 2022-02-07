describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("/");

    cy.get('a[href*="about"]').click();

    cy.url().should("include", "/about");
  });
});
