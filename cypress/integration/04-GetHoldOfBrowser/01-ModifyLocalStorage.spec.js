import * as HomePage from '../../pages/Home'
import * as LoginPage from '../../pages/Login'
import * as UserLandingPage from '../../pages/UserLanding'
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
        HomePage.visit()
        cy.task('getJWT',{id:user.email}).then(jwt=>{
            LoginPage.loginWithToken(jwt)
        })
        UserLandingPage.navigateToSettings()
        SettingsPage.modifySettings(newSettings)
        UserLandingPage.verifyProfileImageUrl(newSettings.url)
    })
})
function createUser(user){
    return cy.request('POST','https://tw-cypress-be.herokuapp.com/api/users',{user:user}).as('POSTUser')
    cy.wait('POSTUser');
    return cy.wrap(body)
}