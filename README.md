<h1 align="center">
  Cadastro Estudantes 
</h1>

<p align="center">
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Pré-requesitos">Pré-requesitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Executar Projeto">Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Aluno">Aluno</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Professor">Professor</a>
</p>

<p align="center">
  <img src="https://github.com/Arthur-SD15/PTAS-2-Cadastro-Pessoas/raw/main/logo_ifms.png" width="300px">
</p>

## 💻 Projeto

Este projeto foi desenvolvido no Instituto Federal Campus Nova Andradina, como parte da disciplina de Programação e Tecnologias para Aplicações Cliente. O objetivo era criar um formulário de cadastro, no meu caso personalizei com o tema de cadastro de estudantes, para que então fosse capaz de renderizar os estudantes cadastrados com o auxílio do arquivo db.json.

O código consiste em duas partes principais. A primeira parte é o arquivo "Page.js", que se encontra na pasta src/app, ela é responsável por buscar os dados dos alunos cadastrados através da API utilizando o fetch. Em seguida, ele renderiza os dados dos alunos em cards na página principal.

A segunda parte é o arquivo "Page.js", que se encontra na pasta cadastro, ela permite aos usuários preencher um formulário de cadastro com informações como nome, número de inscrição, curso e uma foto de identificação opcional. Quando o formulário é enviado, o código utiliza o fetch novamente para enviar os dados do aluno para a API e cadastrar o aluno no db.json.

O fetch é uma função JavaScript que permite fazer requisições HTTP assíncronas para recuperar dados de uma API. Nesse projeto, o fetch foi utilizado para obter os dados dos alunos cadastrados e também para enviar os dados do aluno para a API durante o cadastro. Ele é uma ferramenta importante no desenvolvimento de aplicações cliente, pois permite a comunicação com servidores e o consumo de dados de forma assíncrona.

No geral, esse projeto exemplifica como utilizar o fetch para realizar requisições HTTP e como integrar um formulário de cadastro de estudantes a uma API, permitindo a criação, listagem e exibição dos alunos cadastrados.

## 📝 Pré-requesitos

Antes de baixar o projeto você vai precisar ter instalado na sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [JSON Server](https://www.npmjs.com/package/json-server)
```bash
# Instalar JSON Server
$ npm install -g json-server
```

## 🗂 Executar Projeto

```bash
# Clonar Projeto.
$ git clone https://github.com/Arthur-SD15/PTAC-3-Cadastro-Estudantes.git

# Entrar na pasta atividade.
$ cd atividade

# Baixar as dependencias.
$ npm install

# Executar.
$ npm run dev

# Novo cmd.
# Iniciar servidor.
$ json-server --watch db.json --port 3003

 ```

## 🧑 Aluno

- Arthur Silva Dantas

## 🧑‍🏫 Professor

- Marcelino Vitor - Programação e Tecnologias para Aplicações Cliente
