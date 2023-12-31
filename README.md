# Nohtz App - Frontend

Bem-vindo ao Nohtz App, uma aplicação frontend desenvolvida em [Angular](https://angular.dev/) que oferece uma interface intuitiva para gerenciar notas de forma eficiente. Este projeto proporciona uma experiência completa de uma plataforma de organização de anotações, permitindo a criação, visualização, edição e exclusão de notas, além de recursos de criação e autenticação de usuários.

## Principais Recursos e Tecnologias Utilizadas

- [Angular](https://angular.dev/): Framework utilizado para o desenvolvimento do frontend da aplicação.
- [ng-bootstrap](https://ng-bootstrap.github.io/#/home): Biblioteca que oferece componentes Bootstrap recriados para Angular.
- [Bootstrap Icons](https://icons.getbootstrap.com/): Conjunto de ícones que complementam a interface da aplicação.
- [Sass](https://sass-lang.com/): Utilizado para estilização, oferecendo maior flexibilidade na criação de estilos.
- [Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins): Fonte utilizada para uma experiência de leitura agradável e moderna.

## Estrutura do Projeto

### A estrutura do projeto é organizada em diferentes módulos e componentes:

- Pasta Core: Contém guards, interceptors e services relacionadas à autenticação, incluindo o componente de login.
- Pasta Módulos: Com módulos separados para gerenciamento de notas e usuários, contendo componentes específicos, serviços e modelos.
- Pasta Shared: Componentes compartilhados, como o footer, header e um componente de loading para indicar processos de carregamento.

## Funcionalidades Principais

- Criação de Usuários: Permite a criação de novos usuários na aplicação.
- Autenticação de Usuários: Implementa um sistema de login que gera tokens de autenticação para os usuários.
- Gerenciamento de Notas: Permite listar, criar, editar e excluir notas, exibindo informações como data, título e corpo da nota.
- Marcação de Deadline: Destaca notas cuja data de vencimento é igual ou anterior ao dia atual, apresentando-as em vermelho.
- Marcação de Conclusão: Inclui uma opção de checkbox em cada nota, permitindo marcar as tarefas como concluídas e salvando essa informação no banco de dados.

  ![frontend-gif](https://github.com/matheuskiyoshi/Nohtz/assets/26641380/8dd53f43-0d3f-4b50-a752-080a143047d2)

## Implantação em produção

- Front end: Github Pages - https://matheuskiyoshi.github.io/Nohtz

## Executando o Projeto

### Para executar este projeto localmente, siga as instruções abaixo:

```bash
# Clone este repositório
# HTTPS
$ git clone https://github.com/matheuskiyoshi/Nohtz.git

# Acesse a pasta do projeto no terminal
$ cd ./Nohtz

# Instale as dependências
$ npm install

# Para executar o projeto
$ ng serve

# O servidor iniciará na porta:4200 - acesse <http://localhost:4200/>
```
