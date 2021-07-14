import { Selector, t } from "testcafe";

class LoginPage {
    constructor(){
        this.usernameInput = Selector('#user_login')
        this.passwordInput = Selector('#user_password')
        this.submitButton = Selector('.btn-primary')
        this.errorMessage = Selector('.alert-error')
        this.loginForm = Selector('#login_form')
        this.linkToForgottenPassword = Selector('a').withText('Forgot your password ?')
    }

    async loginToApp(username, password){
        await t
            .typeText(this.usernameInput, username, { paste: true, replace: true })
            .typeText(this.passwordInput, password, { paste: true, replace: true })
            .click(this.submitButton)
    }
}

export default LoginPage