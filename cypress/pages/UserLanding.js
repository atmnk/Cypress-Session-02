export function navigateToSettings(){
    cy.contains("Settings").click()
}
export function verifyProfileImageUrl(url){
    cy.get('.user-pic').should('have.attr', 'src', url)
}