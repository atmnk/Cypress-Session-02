import {data} from '../../fixtures/invalid-settings'
import * as LoginPage from '../../pages/Login'
import * as UserPage from '../../pages/User'
import * as SettingsPage from '../../pages/Settings'
describe('Settings Page Validation',()=>{
    data.forEach(test=>{
        it(test.name,()=>{
            LoginPage.visit()
            LoginPage.login('naik_atmaram@yahoo.com','test123$')
            UserPage.navigateToSettings()
            SettingsPage.modifySettings(test.settings)
            SettingsPage.verifyMessage(test.errorMessage)
        })
    })
})