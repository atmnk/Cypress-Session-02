import * as HomePage from '../../pages/Home'
import * as LoginPage from '../../pages/Login'
import * as UserLandingPage from '../../pages/UserLanding'
import * as SettingsPage from '../../pages/Settings'
import {data} from '../../fixtures/invalid-settings'
import {tagTest} from '../../utils/tagManager'
tagTest(['Negative'],()=>{
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
    
    
        
    })
})
tagTest(['Positive'],()=>{
    describe('Positive',()=>{
        it.skip(`Test User is able to save changes`,()=>{
            cy.fixture('positive.json').then(data=>{
                HomePage.visit()
                HomePage.navigateToSignIn()
                LoginPage.login('naik_atmaram@yahoo.com','test123$')
                UserLandingPage.navigateToSettings()
                SettingsPage.modifySettings(data)
                UserLandingPage.verifyProfileImageUrl(data.url)
            })
        })
    })
})
