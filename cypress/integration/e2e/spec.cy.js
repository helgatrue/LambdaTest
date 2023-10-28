describe("Test Scenario 1", () => {
  beforeEach(() => {
    cy.visit("https://www.lambdatest.com/selenium-playground/");
    cy.get("section.my-50")
      .contains("Progress Bars & Sliders")
      .parent()
      .contains("Drag & Drop Sliders")
      .click();
  });

  it("should go to drag and drop slider page", () => {
    cy.location().should((loc) => {
      expect(loc.href).to.eq(
        "https://www.lambdatest.com/selenium-playground/drag-drop-range-sliders-demo"
      );
    });
  });

  it.only("change slider value from 15 to 95 with mouse click", function() {
    cy.get('.container').eq(4).scrollIntoView();
    //cy.get('.sp__range-success > .sp__range').trigger('mousedown', {scrollBehavior: false});
    //cy.get('.sp__range-success > .sp__range').trigger('mouseup', 15, 40, {scrollBehavior: false});
    movePiece('.sp__range-success > .sp__range', 150, 5);

  });
});