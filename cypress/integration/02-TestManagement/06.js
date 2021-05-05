import { useTags } from "../../utils/TestManagement"
import {data} from '../../fixtures/invalid-settings'
import * as LoginPage from '../../pages/Login'
import * as UserPage from '../../pages/User'
import * as SettingsPage from '../../pages/Settings'
useTags(['Positive'],()=>{
    describe('Settings Page - Positive',()=>{
        it('Modify Profile URL',()=>{
            const url = 'https://picsum.photos/200'
            LoginPage.visit()
            LoginPage.login('naik_atmaram@yahoo.com','test123$')
            UserPage.navigateToSettings()
            SettingsPage.modifySettings({url})
            UserPage.getProfileUrlElement().should('have.attr','src',url)
        })
    })
})
useTags(['Negative'],()=>{
    describe('Settings Page - Negative',()=>{
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
})
