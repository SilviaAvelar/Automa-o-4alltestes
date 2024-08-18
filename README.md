Testes Automatizados Cypress
Este projeto contém uma suíte de testes automatizados usando Cypress, focada na validação de navegação de páginas e funcionalidade de cadastro em dois sites distintos: "4All Tests" e "Aprendendo Testar".

Estrutura de Testes
1. Testes de Navegação - 4All Tests
validar acesso a pagina Home: Verifica se a página inicial do site "4All Tests" carrega corretamente.
validar acesso a pagina Ferramentas: Testa a navegação para a página de Ferramentas.
validar acesso a pagina Eventos: Testa a navegação para a página de Eventos.
validar acesso a pagina Vagas: Testa a navegação para a página de Vagas.
validar acesso a pagina Comunidades: Testa a navegação para a página de Comunidades.
validar acesso a pagina Cursos: Testa a navegação para a página de Cursos.
validar acesso a pagina Referencias: Testa a navegação para a página de Referências.

2. Testes de Funcionalidade de Cadastro - Aprendendo Testar
validar login realizado com sucesso: Valida o login bem-sucedido com as credenciais fornecidas.
validar apagar usuario: Valida a exclusão de um usuário cadastrado.
validar cadastro sem informar usuário: Verifica se o sistema impede o cadastro quando o campo de usuário não é preenchido.
validar cadastro sem informar senha: Verifica se o sistema impede o cadastro quando o campo de senha não é preenchido.
validar cadastro sem informar nome: Verifica se o sistema impede o cadastro quando o campo de nome não é preenchido.

Testes de API com Cypress e Reqres
Este repositório contém uma suíte de testes automatizados usando o Cypress para validar diversas operações na API pública Reqres.
A suíte inclui testes para os métodos HTTP GET, POST, PUT, PATCH e DELETE, garantindo que as respostas da API estejam de acordo com os códigos de status esperados e que os dados retornados estejam corretos.

1. Estrutura dos Testes
DELETE Reqres:
Valida a exclusão de um usuário específico, verificando o retorno do status 204 No Content.

GET Reqres:
Validação de listagem de usuários (status 200).
Validação do corpo da resposta da listagem de usuários.
Verificação de erro ao tentar listar usuários sem especificar a página (status 400).
Validação de um usuário específico (status 200).
Verificação de erro ao tentar acessar um usuário sem ID (status 400).
Validação de erro ao tentar acessar um usuário inexistente (status 404).

PATCH Reqres:
Testa a atualização parcial de um usuário existente, verificando o status de sucesso 200 e o conteúdo atualizado.

POST Reqres:
Criação de um novo usuário, validando o retorno do status 201 Created.
Verificação de erro ao tentar criar um usuário sem enviar o corpo da requisição (status 400).
Validação de registro com sucesso, incluindo a verificação de token de autenticação.
Validação de tentativa de registro sem todos os dados necessários, esperando um status 400.
Testes de login, tanto com credenciais válidas (status 200) quanto inválidas (status 400).

PUT Reqres:
Validação da atualização completa de um usuário, verificando o status 200 e o corpo da resposta.
