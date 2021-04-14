export function modifySettings(settings){
    if (settings.url && settings.url.length>0){
        cy.get('input[placeholder="URL of profile picture"]').clear().type(settings.url)
    }
    cy.contains("Update Settings").click()
}