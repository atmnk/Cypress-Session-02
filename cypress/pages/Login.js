export function login(email,password){
    cy.get('input[placeholder="Email"]')
        .clear()
        .type(email)

    cy.get('input[placeholder="Password"]')
        .clear()
        .type(password)

    cy.get('button').click()
}

export function loginWithToken(token){
   localStorage.setItem('jwt',token)
    cy.visit("/")
}