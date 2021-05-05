export function visit(){
    cy.visit("/")
}
export function navigateToSignIn(){
    cy.contains('Sign in').click()
}
export function verifyGlobalFeed(data){
    data.forEach(item=>{
        cy.contains(item.title)
    })
}