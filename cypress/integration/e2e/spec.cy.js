import "cypress-axe"

describe("Test Scenario 1", () => {
    beforeEach(() => {
        cy.visit("/")
        cy.get("li")
            .contains("Drag & Drop Sliders")
            .click()
    })

    it("Change slider value from 15 to 95 with mouse click", function () {
        cy.get('h4').contains('Default value 5').scrollIntoView();
        cy.get('.sp__range-success > .sp__range')
            .then($el => $el[0].stepUp(80))
            .trigger('change')
        cy.get('.sp__range-success > .sp__range').should('have.value', '95')
    })
})

describe("Test Scenario 2", () => {
        beforeEach(() => {
            cy.visit("/")
            cy.viewport('samsung-note9')
        })

        it('Select input form submit', () => {
            cy.get("li")
                .contains("Input Form Submit")
                .click()
            cy.location().should((loc) => {
                expect(loc.href).to.eq(
                    "https://www.lambdatest.com/selenium-playground/input-form-demo"
                )
            })
            cy.injectAxe()
        })

        it('Fill form and submit', () => {
            cy.get("li")
                .contains("Input Form Submit")
                .click()
            cy.location().should((loc) => {
                expect(loc.href).to.eq(
                    "https://www.lambdatest.com/selenium-playground/input-form-demo"
                )
            });

            // cy.lighthouse();

            cy.get('#seleniumform').within(() => {
                cy.get('#name').type('Olga')
                cy.get('#inputEmail4').type('helgatruee@gmail.com')
                cy.get('#inputPassword4').type('12345678')
                cy.get('#company').type('Test')
                cy.get('#websitename').type('https://www.linkedin.com/in/olga-tro-fimova/')
                cy.get('select').select('Germany')
                cy.get('#inputCity').type('Berlin')
                cy.get('#inputAddress1').type('Alexander Platz')
                cy.get('#inputAddress2').type('12')
                cy.get('#inputState').type('Berlin')
                cy.get('#inputZip').type('12300')
            })
            cy.get('#seleniumform').submit()
            cy.contains('Thanks for contacting us, we will get back to you shortly.')
        })

    }
)