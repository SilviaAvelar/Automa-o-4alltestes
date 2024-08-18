/// <reference types="cypress" />

describe('Get Reqres', () => {

    it('Validar List Users retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })

    it('Validar body retornado no List Users', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
            failOnStatusCode: false
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
    })

    it('Validar List Users sem informar nenhuma pagina retornando 400', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
        })
    })

    it('Validar Single User retornando 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })

    it('Validar body retornado no Single User', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            failOnStatusCode: false
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
    })

    it('Validar Single User sem informar id retornando 400', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
        })
    })

    it('Validar Single user not found retornando 404', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/23',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(404)
        })
    })
})