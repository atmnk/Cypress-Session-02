import * as LoginPage from '../../pages/Login'
import * as UserPage from '../../pages/User'
import * as SettingsPage from '../../pages/Settings'
let user;
before(()=>{
    let uk = Date.now()
    user = {
        username:`${uk}`,
        email:`${uk}@technogise.com`,
        password:"test123$"
    };
    createUser(user)
    cy.clearLocalStorage()
})
describe('Profile Image URL',()=>{
    it('Update and Verify',()=>{
        let newSettings  = {
            url : 'https://picsum.photos/200'
        }
        LoginPage.visit()
        cy.task('getJWT',{id:user.email}).then(jwt=>{
            LoginPage.loginWithToken(jwt)
        })
        UserPage.navigateToSettings()
        SettingsPage.modifySettings(newSettings)
        UserPage.getProfileUrlElementSrcValue().then(val=>{
            expect(val).to.equal(newSettings.url)
        })
    })
})
function createUser(user){
    return cy.request('POST','https://tw-cypress-be.herokuapp.com/api/users',{user:user}).as('POSTUser')
    cy.wait('POSTUser');
    return cy.wrap(body)
}