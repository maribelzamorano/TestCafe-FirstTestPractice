import { Selector } from 'testcafe'
import FeedbackPage from '../page_objects/pages/FeedbackPage'

const feedbackPage = new FeedbackPage()

fixture `Feedback form test`
  .page `http://zero.webappsecurity.com/index.html`

test("User can submit feedback via form", async t =>{

    feedbackPage.sendFeedback('NAME', 'EMAIL', 'SUBJECT', 'COMMENT')

    await t.expect(feedbackPage.message.innerText).contains('Thank you for your comments')
})