import { Selector } from 'testcafe'
import { login } from '../helper'

fixture `New payee test`
    .page `http://zero.webappsecurity.com/index.html`

test.before(async t=>{
   await login('username', 'password')
})('User can add new payee to the list', async t =>{
    // Selectors
    const payBillsTab = Selector('#pay_bills_tab')
    const newPayeeTab = Selector('a').withText('Add New Payee')
    const formPayeeName = Selector('#np_new_payee_name')
    const formPayeeAddress = Selector('#np_new_payee_address')
    const formPayeeAccount = Selector('#np_new_payee_account')
    const formPayeeDetails = Selector('#np_new_payee_details')
    const addPayeeButton = Selector('#add_new_payee')
    const resultMessage = Selector('#alert_content').innerText 

    // Actions
    await t.click(payBillsTab)
    await t.click(newPayeeTab)
    await t.typeText(formPayeeName, 'name', { paste: true})
    await t.typeText(formPayeeAddress, 'address', { paste: true})
    await t.typeText(formPayeeAccount, 'account', { paste: true})
    await t.typeText(formPayeeDetails, 'details', { paste: true})
    await t.click(addPayeeButton)

    // Assertions
    await t.expect(resultMessage).contains('successfully created.')
})
