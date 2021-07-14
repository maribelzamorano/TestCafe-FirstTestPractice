import { Selector, t } from "testcafe";
import BasePage from "./BasePage";

class FeedbackPage extends BasePage{
    constructor(){
        super()
        this.formName = Selector('#name')
        this.formEmail = Selector('#email')
        this.formSubject = Selector('#subject')
        this.formComment = Selector('#comment')
        this.sendMessageButton = Selector('input').withAttribute(
            'value',
            'Send Message'
        )
        this.message = Selector('div')
        this.feedbackButton = Selector('#feedback')
    }

    async sendFeedback(name, email, subject, comment){
        await t
            .click(this.feedbackButton)
            .typeText(this.formName, name, { paste: true })
            .typeText(this.formEmail, email, { paste: true })
            .typeText(this.formSubject, subject, { paste: true })
            .typeText(this.formComment, comment, { paste: true })
            .click(this.sendMessageButton)
    }
}

export default FeedbackPage