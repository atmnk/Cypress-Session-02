export function navigateToSettings(){
    cy.contains("Settings").click()
}
export function getProfileUrlElement(){
    return cy.get('.user-pic')
}
export function getProfileUrlElementSrcValue(){
    return cy.get('.user-pic').invoke('attr','src').then(val=>{
        return cy.wrap(val)
    })
}
