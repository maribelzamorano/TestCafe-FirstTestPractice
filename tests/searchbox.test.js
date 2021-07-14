import Navbar from '../page_objects/components/Navbar'
import SearchResultsPage from '../page_objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

fixture `Search box test`
    .page `http://zero.webappsecurity.com/index.html`

test('User can search for information using the search box', async t =>{
navbar.search('online bank')

// Assertions
await t.expect(searchResultsPage.resultsTitle.exists).ok()
await t.expect(navbar.searchBox.exists).ok()
await t
    .expect(searchResultsPage.linkText.innerText)
    .contains('Zero - Free Access to Online Banking')
})
