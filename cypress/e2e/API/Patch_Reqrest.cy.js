/// <reference types="cypress" />

describe('Patch Reqres', () => {

    it('Validar UPDATE retornando 200', () => {

        const dados = {
            "name": "morpheus",
            "job": "zion resident"
        }

        cy.request({
            method: 'PATCH',
            url:'https://reqres.in/api/users/2',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))           
        })      
    })
})