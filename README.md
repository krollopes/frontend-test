 # 🛍️ Fake Store - Frontend Application

Este é um projeto frontend simples criado com **Next.js** que consome a API pública do [Fake Store API](https://fakestoreapi.in/). A aplicação exibe uma lista de produtos, com funcionalidades de pesquisa e filtragem, além de permitir o detalhamento de cada produto ao clicar sobre ele. Foi implementada uma interface responsiva, utilizando **Styled Components** para estilização e **React Context API** para gerenciamento do carrinho de compras.

## Funcionalidades 🎯

- **Exibição de Produtos**: A página inicial exibe uma lista de produtos, incluindo imagem, nome, preço e descrição.
- **Pesquisa**: Uma barra de pesquisa permite ao usuário buscar produtos pelo nome.
- **Filtragem por Categoria**: Dropdown para filtrar os produtos de acordo com a categoria.
- **Detalhamento de Produto**: Ao clicar em um produto, o usuário é redirecionado para a página de detalhes com mais informações.
- **Carrinho de Compras**: Adicione produtos ao carrinho e mantenha o estado do carrinho entre as páginas.
- **Responsividade**: O layout foi desenvolvido para ser responsivo e oferecer uma boa experiência de usuário em dispositivos móveis.

## Tecnologias Utilizadas 🖥️

- **Next.js**: Framework React para renderização no lado do servidor (SSR/SSG).
- **Styled Components**: Para estilização modular e escalável.
- **React Context API**: Para gerenciar o estado global do carrinho de compras.
- **Jest e React Testing Library**: Para testes unitários e de integração.
- **Axios**: Para realizar chamadas HTTP para a Fake Store API.

## Funcionalidades Adicionais (Bônus) 🎁

- **Paginação**: Paginação implementada para navegar pelos produtos.
- **Botão "Adicionar ao Carrinho"**: Produtos podem ser adicionados ao carrinho de compras.

## Como Rodar o Projeto 🚀

### Pré-requisitos

1. **Node.js** e **npm** instalados em sua máquina. Caso não tenha, você pode instalar o Node.js [aqui](https://nodejs.org/).
2. Um editor de código como [VSCode](https://code.visualstudio.com/).

### Passos para Instalar e Rodar o Projeto

1. Clone o repositório:
  ```bash
  git clone https://github.com/usuario/fake-store.git
  ```
2. Navegue até o diretório do projeto:
  ```bash
  cd fake-store
  ```
3. Instale as dependências:
  ```bash
  npm install
  ```
4. Execute o servidor de desenvolvimento:
  ```bash
  npm run dev
  ```
5. Acesse o projeto em seu navegador:
  ```bash
  http://localhost:3000
  ```

## Testes 🧑‍💻

Este projeto inclui testes unitários e de integração, utilizando o Jest e a React Testing Library. Para rodar os testes, execute o comando:
```bash
npm run test
```

## Estrutura de Pastas 🗂️

```plaintext
frontend-test/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── products/
│   │       └── [id]/
│   │           ├── ProductDetails.styles.ts
│   │           └── page.tsx
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.styles.ts
│   │   │   ├── Footer.test.tsx
│   │   │   └── Footer.tsx
│   │   ├── Header/
│   │   │   ├── Header.styles.ts
│   │   │   ├── Header.test.tsx
│   │   │   └── Header.tsx
│   │   ├── Pagination/
│   │   │   ├── Pagination.styles.ts
│   │   │   └── Pagination.tsx
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.styles.ts
│   │   │   ├── ProductCard.test.tsx
│   │   │   └── ProductCard.tsx
│   │   ├── ProductList/
│   │   │   ├── ProductList.styles.ts
│   │   │   ├── ProductList.test.tsx
│   │   │   └── ProductList.tsx
│   │   ├── SearchAndFilter/
│   │   │   ├── SearchAndFilter.styles.ts
│   │   │   ├── SearchAndFilter.test.tsx
│   │   │   └── SearchAndFilter.tsx
│   │   ├── Spinner/
│   │   │   ├── Spinner.styles.ts
│   │   │   ├── Spinner.test.tsx
│   │   │   └── Spinner.tsx
│   ├── contexts/
│   │   ├── CartContext.tsx
│   │   ├── ProductContext.test.tsx
│   │   └── ProductContext.tsx
│   ├── services/
│   │   ├── api.ts
│   │   ├── ProductService.test.tsx
│   │   └── products.ts
│   └── styles/
│       ├── global.ts
│       └── theme.ts
```

## Link da Aplicação 🌐

A aplicação está hospedada na [Vercel](https://vercel.com/) e pode ser acessada aqui.

## Contribuindo 🤝

Se você gostaria de contribuir para este projeto, por favor, siga os seguintes passos:

1. Faça um **fork** deste repositório.
2. Crie uma branch para sua modificação: `git checkout -b minha-modificacao`.
3. Faça suas alterações e adicione os arquivos: `git add .`.
4. Faça um **commit** com uma mensagem clara sobre a alteração: `git commit -m 'Adiciona nova funcionalidade X'`.
5. Envie a branch para o repositório remoto: `git push origin minha-modificacao`.
6. Abra um **pull request**.

## Licença 📜

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.