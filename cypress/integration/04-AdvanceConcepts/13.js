import * as HomePage from '../../pages/Home'
describe('Stub Some APIS',()=>{
    it('Stub Global Feeds 0',()=>{
        
    })
    it('Stub Global Feeds many',()=>{
        
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