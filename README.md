![Logo do projeto](./public/img/formPrint.png)

# Form Validation
Uma aplicação que valida e coleta dados de um formulário, incluindo campos obrigatórios e controle de entradas.

## 🔨 Nova Funcionalidade
O projeto de validação de formulário foi atualizado para integrar uma chamada a uma API externa, o que permite validar as informações dos usuários, como nome, e-mail e senha, em tempo real. Faz uma requisição POST para a API jsonplaceholder.typicode.com/users, e os dados fornecidos pelo usuário são comparados com os retornados pela API. Se houver discrepâncias nas informações, o formulário exibe mensagens de erro específicas e orienta o usuário a corrigir os dados antes de permitir o envio.

## 🔥 Introdução
* Validação de senha com mínimo de 6 caracteres.

* Verificação de campos obrigatórios, dando feedback ao usuário em caso de erro de preenchimento.

### 🔨 Guia de instalação
Instalação:

    1.Clone o repositório.

    2.Execute npm install para instalar as dependências.

Passo a Passo para Rodar:

    Execute npm start para iniciar o servidor de desenvolvimento.
    
    Acesse http://localhost:3000 no navegador para utilizar a aplicação.

## 📦 Tecnologias usadas:
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)<br>
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)<br>
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 👷 Autores

* **Ingrid Souza** - *Front-End* - [GitHub](https://github.com/IngridsSilveira)