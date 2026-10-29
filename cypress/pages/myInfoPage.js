class MyInfoPage {

    selectorsList() {

        const selectors = {
            firstNameField: `[name="firstName"]`,
            lastNameField: `[name="lastName"]`,
            genericField: '.oxd-input--active',
            dataField: '[placeholder="yyyy-dd-mm"]',
            dataCloseButton: '.--close',
            dataSubmitButton: '[type="submit"]',
            dataGenericComboBox: '.oxd-select-text--arrow'
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, licenseNumber, licenseExpiryDate, birthData) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(licenseNumber)
        cy.get(this.selectorsList().dataField).eq(0).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dataCloseButton).eq(0).click()
        cy.get(this.selectorsList().dataField).eq(1).clear().type(birthData)
        cy.get(this.selectorsList().dataCloseButton).click()
        
    }

    saveForm() {
        cy.get(this.selectorsList().dataSubmitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        
        cy.get(this.selectorsList().dataGenericComboBox).eq(0).click()
        cy.get('.oxd-select-dropdown').eq(0).contains('Brazilian').click()
        cy.get(this.selectorsList().dataGenericComboBox).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    }
}

export default MyInfoPage
