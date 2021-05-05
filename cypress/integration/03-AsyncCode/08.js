import * as LoginPage from '../../pages/Login'
import * as UserPage from '../../pages/User'
import * as SettingsPage from '../../pages/Settings'
describe('Change Profile',()=>{
    it('Modify Profile URL',()=>{
        const url = 'https://picsum.photos/200'
        LoginPage.visit()
        LoginPage.login('naik_atmaram@yahoo.com','test123$')
        UserPage.navigateToSettings()
        SettingsPage.modifySettings({url})
        UserPage.getProfileUrlElementSrcValue().then(val=>{
            expect(val).to.equal(url)
        })
    })
})