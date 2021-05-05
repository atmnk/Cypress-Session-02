export function modifySettings(newSettings){
    cy.get('input[placeholder="URL of profile picture"]').clear().type(newSettings.url)
    cy.get('input[placeholder="New Password"]').clear().type("test123$")
    cy.get('.btn-primary').click()
}