describe('Funcionalidade Cadastro Aprendendo Testar', () => {

  it('validar login realizado com sucesso', () => {
    
    // Acessar a página
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    
    // Preencher os campos
    cy.get(':nth-child(2) > td > input').type('avelar.silvia@yahoo.com')
    cy.get(':nth-child(4) > td > input').type('123456')
    cy.get(':nth-child(6) > td > input').type('Silvia Avelar')

    // Clicar no botão enviar
    cy.get('td > .btn').click()

    // Verificar se o cadastro foi realizado com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'Silvia Avelar')
  })

  it('validar apagar usuario', () => {
    
    // Acessar a página
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    // Verificar se o cadastro foi realizado com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', 'Silvia Avelar')
    
    // Apagar o usuário
    cy.get(':nth-child(2) > :nth-child(5)').click()

    // Acessar novamente a página
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')

    // Verificar se foi excluído com sucesso
    cy.get('tbody > :nth-child(2) > :nth-child(2)').should('not.contain', 'Silvia Avelar');
    
  })

  it('validar cadastro sem informar usuário', () => {
    
    // Acessar a página
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    
    // Preencher os campos
    cy.get(':nth-child(4) > td > input').type('123456')
    cy.get(':nth-child(6) > td > input').type('Silvia Avelar')

    // Clicar no botão enviar
    cy.get('td > .btn').click()

    // Verificar se o campo de entrada ainda está marcado como obrigatório
    cy.get('input[name="form_usuario"]').should('have.attr', 'required')
  })
  
  it('validar cadastro sem informar senha', () => {
    
    // Acessar a página
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    
    // Preencher os campos
    cy.get(':nth-child(2) > td > input').type('avelar.silvia@yahoo.com')
    cy.get(':nth-child(6) > td > input').type('Silvia Avelar')

    // Clicar no botão enviar
    cy.get('td > .btn').click()

    // Verificar se o campo de entrada ainda está marcado como obrigatório
    cy.get('input[name="form_senha"]').should('have.attr', 'required')
  })

  it('validar cadastro sem informar nome', () => {
    
    // Acessar a página
    cy.visit('http://aprendendotestar.com.br/treinar-automacao.php')
    
    // Preencher os campos
    cy.get(':nth-child(2) > td > input').type('avelar.silvia@yahoo.com')
    cy.get(':nth-child(4) > td > input').type('123456')

    // Clicar no botão enviar
    cy.get('td > .btn').click()

    // Verificar se o campo de entrada ainda está marcado como obrigatório
    cy.get(':nth-child(7) > td').should('have.text', 'Existem campos em branco.')
  })
})