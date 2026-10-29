import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'



const Loginpage = new LoginPage()
const Dashboardpage = new DashboardPage()
const Menupage = new MenuPage()

describe('Orange HRM Tests', () => {
    const selectorList = {
    firstNameField: `[name="firstName"]`,
    lastNameField: `[name="lastName"]`,
    genericField: '.oxd-input--active',
    dataField: '[placeholder="yyyy-dd-mm"]',
    dataCloseButton: '.--close',
    dataSubmitButton: '[type="submit"]',
    dataGenericComboBox: '.oxd-select-text--arrow',
    
  }

  it.only('User Info Update - Success', () => {
    Loginpage.accessLoginPage()
    Loginpage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    
    Dashboardpage.checkDashboardGrid()
    Menupage.myInfoButtonClick()
    
    //cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type(userData.userInfo.firstName)
    cy.get(selectorList.lastNameField).clear().type(userData.userInfo.lastName)
    cy.get(selectorList.genericField).eq(3).clear().type(userData.userInfo.employeeId)
    cy.get(selectorList.genericField).eq(4).clear().type(userData.userInfo.otherId)
    cy.get(selectorList.genericField).eq(5).clear().type(userData.userInfo.licenseNumber)
    cy.get(selectorList.dataField).eq(0).clear().type(userData.userInfo.licenseExpiryDate)
    cy.get(selectorList.dataCloseButton).eq(0).click()
    cy.get(selectorList.dataField).eq(1).clear().type(userData.userInfo.birthData)
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.dataGenericComboBox).eq(0).click()
    cy.get('.oxd-select-dropdown').eq(0).contains('Brazilian').click()
    cy.get(selectorList.dataGenericComboBox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
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