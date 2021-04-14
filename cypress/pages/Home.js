export function visit(){
    cy.visit("/")
}
export function navigateToSignIn(){
    cy.contains('Sign in').click()
}