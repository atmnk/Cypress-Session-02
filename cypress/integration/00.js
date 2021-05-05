describe('Failing Test',()=>{
    it('Screenshot and Video',()=>{
        cy.visit("/")
        cy.contains("This is very random test")
    })
})