import { Selector } from 'testcafe'
import Navbar from '../page_objects/components/Navbar'
import LoginPage from '../page_objects/pages/LoginPage'

const navbar = new Navbar()
const loginPage = new LoginPage()

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test("User cannot login with invalid credentials", async t => {
   await t.click(navbar.signInButton)
   loginPage.loginToApp('Invalid username', 'Invalid password')
   await t
        .expect(loginPage.errorMessage.innerText)
        .contains('Login and/or password are wrong.')
})

test("User can login into application", async t => {
    await t.click(navbar.signInButton)
    loginPage.loginToApp('username', 'password')

    const accountSummaryTab = Selector('#account_summary_tab')
    await t.expect(accountSummaryTab.exists).ok()
    await t.expect(loginPage.loginForm.exists).notOk()

    await t.click(navbar.userIcon)

    await t.click(navbar.logoutButton)

    await t.expect(navbar.logoutButton.exists).notOk()
    await t.expect(navbar.signInButton.exists).ok()
})