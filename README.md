# Loan Dashboard 🤑

Front end da aplicação feito em **React** onde você pode ver os seus "empréstimos", "pagar" parcelas e simular novos "empréstimos".

você pode checar o resultado do projeto [aqui](https://loans.jucielly.dev/)

## Como usar a aplicação:

1. Clone esse repositório
2. `npm install` **no terminal**: para baixar todas as dependências.
3. `npm start` **no terminal**: para iniciar um server local para desenvolvimento.

## Estrutura do projeto:

- `/components`: Todos os componentes seguindo o método [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/).
- `/providers`: Contexts e lógica de negócio.
- `/services`: Endpoints da api.
- `/styles`: Estilização global e tema.
- `/utils`: Funções úteis.
- `App.js`: Onde os Providers principais são chamados assim como a página de componente principal.
- `index.js`: React entry point.

## Api usada no projeto:

Fiz um mock para simular uma api de empréstimos, você pode consultar [aqui](https://run.mocky.io/v3/b6fbe4d1-ea8c-44ac-807a-10060c792069)

## Scripts disponíveis:

- `start`: Inicia um server local para desenvolvimento.
- `build`: Gera o bundle para a versão de produção.
- `lint`: Verifica todos os erros de lint.
- `lint-fix`: Resolve alguns erros de lint.
- `deploy`: Faz o deploy com firebase. 


## Melhorias a fazer:

- Melhorias nos design tokens do tema
- criar uma api de fato.