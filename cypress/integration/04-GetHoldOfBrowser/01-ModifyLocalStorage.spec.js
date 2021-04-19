import * as HomePage from '../../pages/Home'
import * as LoginPage from '../../pages/Login'
import * as UserLandingPage from '../../pages/UserLanding'
import * as SettingsPage from '../../pages/Settings'

describe('Profile Image URL',()=>{
    it('Update and Verify',()=>{
        let newSettings  = {
            url : 'https://picsum.photos/200'
        }
        HomePage.visit()
        cy.task('getJWT',{id:26}).then(jwt=>{
            LoginPage.loginWithToken(jwt)
        })
        UserLandingPage.navigateToSettings()
        SettingsPage.modifySettings(newSettings)
        UserLandingPage.verifyProfileImageUrl(newSettings.url)
    })
})