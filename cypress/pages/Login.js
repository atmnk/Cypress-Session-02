export function visit(){
    cy.visit("/login")
}
export function login(email,password){
    cy.get('input[placeholder="Email"]').type(email)
    cy.get('input[placeholder="Password"]').type(password)
    cy.get('.btn-primary').click()
    cy.contains('Popular Tags')
}