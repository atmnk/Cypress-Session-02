import * as HomePage from '../../pages/Home'
import * as LoginPage from '../../pages/Login'
import * as UserLandingPage from '../../pages/UserLanding'
import * as SettingsPage from '../../pages/Settings'
describe('Profile Image URL',()=>{
    it('Update and Verify',()=>{
        HomePage.visit()
        HomePage.navigateToSignIn()
        LoginPage.login('naik_atmaram@yahoo.com','test123$')
        UserLandingPage.navigateToSettings()
        SettingsPage.getUsername().then(value=>{
            expect(value).to.equal('atmnk')
        })
    })
})