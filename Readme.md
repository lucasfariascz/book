## API Book

### Rotas

- (/books/list/): Lista todos os livros que estão cadastrados no banco - Tipo da Rota: GET
- (/books/:id): Busca apenas um elemento no banco de dados passando o ID via parametro na rota e retorna caso o encontre - Tipo da Rota: GET
- (/books/delete/:id): Delete elemento do banco de dados passando ID via paramentro na rota - Tipo da Rota: DELETE
- (/books/update/:id): Atualiza elemento especifico no banco de dados passando o ID via parametro e com as informações (name, SBN, description, author, invetory) - Tipo da Rota: UPDATE
- (/books): Rota para inserir um elemento no banco de dados passando (name, SBN, description, author, invetory) - Tipo de Rota: POST
- (/books/list-name): Lista apenas os nomes dos livros em estoque. Podendo passar uma paginação via QUERY (?paginate=5) no qual, vai retorna apenas os livros que tem no inventario acima do valor definido na paginação.

### Docker

- Todo o projeto está rodando em Docker.
- Versão do docker 20.10.6
- Versão do docker-compose 1.29.2

#### Executar Projeto

Instalar as dependencias do projeto
```bash
npm install
ou 
yarn
```
Comando para executar o projeto em docker que vai está rodando o Banco de dados Postgres e Aplicação Book
```bash
docker-compose up -d
```
Rodar a migration para criar a tabela book no banco
```bash
npm run typeorm migration:run
ou 
yarn typeorm migration:run
```
Obs: Caso esteja usando Windows e de problema para rodar aplicação use esse link para resolver o problema: https://www.programmersought.com/article/48267850072/

- Apenas para resolver o problema de compartilhamento de arquivo, selecionando um local para o compartilhamento. 