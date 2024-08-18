/// <reference types="cypress" />

describe('Post Reqres', () => {

    it('Validar Create retornando 201', () => {

        const dados = {
            "name": "morpheus",
            "job": "leader"
        }

        cy.request({
            // payload
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(201)
        })
    })

    it('Validar Create sem enviar o body retornando 400', () => {

        const dados = {
            "name": "morpheus",
            "job": "leader"
        }

        cy.request({
            // payload
            method: 'POST',
            url: 'https://reqres.in/api/users',
           // body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400)
        })
    })

    it('Validar Token Register - successful retornando 200', () => {

        const dados = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }

        cy.request({
            // payload
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            // Validação de token
            let retorno = response.body
            expect(retorno.token).to.equal("QpwL5tke4Pnpja7X4")
        })
    })

    it('Validar Register - successful retornando 200', () => {

        const dados = {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }

        cy.request({
            // payload
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            // Validação de status code
            expect(response.status).to.equal(200)

            // Validação de body
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))
        })
    })

    it('Validar Register - unsuccessful retornando 400', () => {

        const dados = {
            "email": "sydney@fife"
        }

        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/register',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)           
        })      
    })

    it('Validar Login - successful retornando 200', () => {

        const dados = {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }

        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/login',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(200)
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 3))
            expect(retorno.token).to.eq('QpwL5tke4Pnpja7X4')
        })      
    })

    it('Validar Login - unsuccessful retornando 400', () => {

        const dados = {
            "email": "peter@klaven"
        }
        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/login',
            body: dados,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)           
        })      
    })    
})