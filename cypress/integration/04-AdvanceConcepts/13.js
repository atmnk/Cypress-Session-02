import * as HomePage from '../../pages/Home'
describe('Stub Some APIS',()=>{
    it('Stub Global Feeds 0',()=>{
        cy.fixture('articles.zero').then(body=>{
            cy.intercept('https://tw-cypress-be.herokuapp.com/api/articles?limit=10&offset=0',{
                statusCode: 200,
                body,
              }).as('ArticleAPI')
            HomePage.visit();
            cy.wait('@ArticleAPI')
            HomePage.verifyGlobalFeed(body.articles)
        })
    })
    it('Stub Global Feeds many',()=>{
        cy.fixture('articles.many').then(pattern=>{
            let body = getArticles(pattern,10)
            cy.intercept('https://tw-cypress-be.herokuapp.com/api/articles?limit=10&offset=0',{
                statusCode: 200,
                body,
              }).as('ArticleAPI')
            HomePage.visit();
            cy.wait('@ArticleAPI')
            HomePage.verifyGlobalFeed(body.articles)
        })
    })
})
function getArticles(pattern,count){
    let data = []
    for(let i = 0;i<count;i++){
        data.push({...pattern,title:pattern.title + i,description:pattern.description + i,body:pattern.body + i,slug:pattern.slug + i})
    }
    return {
        articles: data,
        articlesCount: count
    }
}