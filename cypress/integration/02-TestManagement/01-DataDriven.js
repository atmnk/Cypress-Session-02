import * as HomePage from '../../pages/Home'
import * as LoginPage from '../../pages/Login'
import * as UserLandingPage from '../../pages/UserLanding'
import * as SettingsPage from '../../pages/Settings'
import {data} from '../../fixtures/invalid-settings'
describe('Negative',()=>{
    data.forEach(data=>{
        it(`Test ${data.name}`,()=>{
            let newSettings  = data.settings
            HomePage.visit()
            HomePage.navigateToSignIn()
            LoginPage.login('naik_atmaram@yahoo.com','test123$')
            UserLandingPage.navigateToSettings()
            SettingsPage.modifySettings(newSettings)
            data.errorMessages.forEach(message=>{
                SettingsPage.verifyErrorOnPage(message)
            })
        })
    })
    // it('Update and Verify',()=>{
    //     let newSettings  = {
    //         url : 'https://picsum.photos/200'
    //     }
    //     HomePage.visit()
    //     HomePage.navigateToSignIn()
    //     LoginPage.login('naik_atmaram@yahoo.com','test123$')
    //     UserLandingPage.navigateToSettings()
    //     SettingsPage.modifySettings(newSettings)
    //     UserLandingPage.verifyProfileImageUrl(newSettings.url)
    // })
})