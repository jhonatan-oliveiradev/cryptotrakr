<div align="center">
<h1 align="center">💱CryptoTrakr.<br> made with React and Typescript. ⚛</h1>
<img src="./src/assets/logo.svg" alt="logo" style="width: 200px;" />
</div>

&nbsp;

<p align="center">
  <a href="#Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#License">License</a>
</p>

<p align="center">
 <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=04D361&labelColor=281F3D" alt="License" />
  <img src="https://img.shields.io/github/repo-size/jhonatan-oliveiradev/cryptotrakr?label=forks&message=MIT&color=04D361&labelColor=281F3D" alt="Forks" />
  <img src="https://img.shields.io/github/stars/jhonatan-oliveiradev/cryptotrakr?label=stars&message=MIT&color=04D361&labelColor=14061f" alt="Stars" />
</p>
&nbsp;
&nbsp;
&nbsp;

![Cover (2)](./public/preview.png)

&nbsp;

## 📖 Sobre o projeto

O projeto **CryptoTrakr** é uma aplicação web desenvolvida com React.js e Typescript, que tem como objetivo mostrar o valor atual de algumas criptomoedas em tempo real. Além disso, você pode navegar entre as moedas para ver os detalhes de cada uma, também é possível pesquisar uma moeda específica.

## 💻 Tecnologias utilizadas no projeto

- [React.js](https://reactjs.org) (v18)
- [Vite.js](https://vitejs.dev) (v3)
- [TypeScript](https://www.typescriptlang.org) (v5)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [React Router Dom](https://reactrouter.com/en/main)

## 🌿 Branches

- `main` projeto finalizado.

## 🎨 Protótipo do projeto

## 📝 Licença

Este projeto está sob a licença MIT. Consulte a [LICENÇA](./LICENSE) para obter mais informações.


## 🗄️ Estrutura de pastas

O projeto está estruturado da seguinte forma:

- 📁 `public`
- 📁 `src`
  - 📁 `assets`
  - 📁 `pages`
    - 📁 `Detail`
    - 📁 `Home`
  - 📁 `NotFound`
  - 📁 `components`
  - 📁 `Footer`
  - 📁 `Header`
  - 📁 `layout`
  - 📁 `Loader`
  - ⚛️ `App.tsx`
  - ⚛️ `main.tsx`
  - ⚛️ `routes.tsx`

## 🛠️ Instruções de execução

Siga as instruções abaixo para rodar o projeto em seu ambiente local:



1. Certifique-se de ter o Node.js instalado em seu computador. Você pode baixar a versão mais recente do Node.js em https://nodejs.org.

2. Clone este repositório em seu computador ou faça o download do código fonte.

3. Abra o terminal e navegue até o diretório raiz do projeto.

4. Instale as dependências do projeto executando o seguinte comando:

```bash
  npm install
```

5. Após a conclusão da instalação das dependências, inicie o servidor de desenvolvimento local com o comando:

```bash
  npm run dev
```

6. O servidor local será iniciado e você poderá acessar o projeto no seu navegador através do seguinte endereço:

```bash
  http://localhost:5173
```

Caso a porta 5173 estiver em uso, automaticamente o Vite.js irá subir na próxima porta livre da máquina.

Se deseja alterar a porta padrão na qual a aplicação tentará subir, você pode modificar a porta no arquivo `vite.config.js`.

Agora você está pronto para explorar o projeto em seu ambiente local!

<hr>

# Feature: página de detalhes de moeda

## Requisitos

- [x] Deve ser possível navegar para a página de detalhes de uma moeda ao clicar em uma moeda na página inicial.
- [x] Deve ser possível navegar para a página de detalhes de uma moeda ao acessar a URL `/detail/:id`.
- [x] Deve ser possível ver o nome da moeda, o símbolo e o preço atual da moeda na página de detalhes.
- [x] Deve ser possível ver a variação real de preço da moeda na página de detalhes.
- [x] Deve ser possível ver um loader enquanto os dados da moeda estão sendo carregados.
- [x] Deve ser possível retornar à página inicial.

![Cover (2)](./public/feature.png)

<hr>

Feito com 💜 por [Jhonatan Oliveira](https://jhonatanoliveira.com).
