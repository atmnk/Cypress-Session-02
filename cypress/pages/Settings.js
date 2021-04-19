export function modifySettings(settings){
    if (settings.url){
        cy.get('input[placeholder="URL of profile picture"]').clear().type(settings.url)
    }
    if (settings.email){
        cy.get('input[placeholder="Email"]').clear().type(settings.email)
    }
    if (settings.username){
        cy.get('input[placeholder="Username"]').clear().type(settings.username)
    }
    cy.contains("Update Settings").click()
}

export function verifyErrorOnPage(error){
    cy.contains(error)
}

export function getUsername(){
    return cy.get('input[placeholder="Username"]')
        .invoke('val').then(value=>{
            return cy.wrap(value)
        })
}