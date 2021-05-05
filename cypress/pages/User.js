export function navigateToSettings(){
    cy.contains("Settings").click()
}
export function getProfileUrlElement(){
    return cy.get('.user-pic')
}
