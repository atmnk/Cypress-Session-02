export function modifySettings(newSettings){
    if(newSettings.url){
        cy.get('input[placeholder="URL of profile picture"]').clear().type(newSettings.url)
    }
    if (newSettings.email) {
        cy.get('input[placeholder="Email"]').clear().type(newSettings.email)
    }

    if (newSettings.username) {
        cy.get('input[placeholder="Username"]').clear().type(newSettings.username)
    }
    
    cy.get('input[placeholder="New Password"]').clear().type("test123$")
    //PUT 'https://tw-cypress-be.herokuapp.com/api/user'
    cy.get('.btn-primary').click()
}
export function verifyMessage(message){
    cy.contains(message)
}