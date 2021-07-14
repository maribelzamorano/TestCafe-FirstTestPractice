import { Selector } from 'testcafe'
import Navbar from '../page_objects/components/Navbar'
import ForgottenPasswordPage from '../page_objects/pages/ForgottenPasswordPage'
import LoginPage from '../page_objects/pages/LoginPage'

const navbar = new Navbar()
const loginPage = new LoginPage()
const forgottenPasswordPage = new ForgottenPasswordPage()

fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`

test("User can request new password to be send to his email", async t =>{

    // Actions
    await t.click(navbar.signInButton)
    await t.click(loginPage.linkToForgottenPassword)
    await t.typeText(forgottenPasswordPage.emailInput, 'email@random.com', { paste: true})
    await t.pressKey('enter')

    // Assertions
    await t
        .expect(forgottenPasswordPage.message.innerText)
        .contains('email@random.com')
    await t.expect(forgottenPasswordPage.emailInput.exists).notOk()
})