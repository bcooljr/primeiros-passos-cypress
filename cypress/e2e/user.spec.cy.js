import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


const Chance = require('chance')

const chance = new Chance()
const Loginpage = new LoginPage()
const Dashboardpage = new DashboardPage()
const Menupage = new MenuPage()
const MyInfopage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    Loginpage.accessLoginPage()
    Loginpage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    Dashboardpage.checkDashboardGrid()
    Menupage.myInfoButtonClick()
    MyInfopage.fillPersonalDetails(chance.first(), chance.last())
    MyInfopage.fillEmployeeDetails('123456', '654321', 'A1234567', '2025-12-31', '1990-01-01')
    MyInfopage.fillStatus()
    MyInfopage.saveForm()
  })

})