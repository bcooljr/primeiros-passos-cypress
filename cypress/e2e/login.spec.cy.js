import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'


const Loginpage = new LoginPage()
const Dashboardpage = new DashboardPage()


describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    Loginpage.accessLoginPage()
    Loginpage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)    
    })


    it('Login - Success', () => {
    Loginpage.accessLoginPage()
    Loginpage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    Dashboardpage.checkDashboardGrid()
    })
})