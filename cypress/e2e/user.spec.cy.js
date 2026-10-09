import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {
  const selectorList = {
    usernameField: `[name="username"]`,
    passwordField: `[name="password"]`,
    loginButton: `.oxd-button`,
    dashboardTitle: `.oxd-topbar-header-title`,
    alertMessage: `.oxd-alert`,
    dashboardGrid: `.oxd-grid-3`,
    myInfoButton: `[href="/web/index.php/pim/viewMyDetails"]`,
    firstNameField: `[name="firstName"]`,
    lastNameField: `[name="lastName"]`,
    genericField: '.oxd-input--active',
    dataField: '[placeholder="yyyy-dd-mm"]',
    dataCloseButton: '.--close',
    dataSubmitButton: '[type="submit"]'
  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField) .type(userData.userSuccess.username)
    cy.get(selectorList.passwordField) .type(userData.userSuccess.password)
    cy.get(selectorList.loginButton) .click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type(userData.userInfo.firstName)
    cy.get(selectorList.lastNameField).clear().type(userData.userInfo.lastName)
    cy.get(selectorList.genericField).eq(3).clear().type(userData.userInfo.employeeId)
    cy.get(selectorList.genericField).eq(4).clear().type(userData.userInfo.otherId)
    cy.get(selectorList.genericField).eq(5).clear().type(userData.userInfo.licenseNumber)
    cy.get(selectorList.dataField).eq(0).clear().type(userData.userInfo.licenseExpiryDate)
    cy.get(selectorList.dataCloseButton).eq(0).click()
    cy.get(selectorList.dataField).eq(1).clear().type(userData.userInfo.birthData)
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.dataSubmitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })


  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField) .type(userData.userFail.username)
    cy.get(selectorList.passwordField) .type(userData.userFail.password)
    cy.get(selectorList.loginButton) .click()
    cy.get(selectorList.alertMessage)
    })


})