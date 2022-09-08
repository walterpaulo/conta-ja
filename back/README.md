# Conta JA
Contas a pagar, despesas.

* API (Application Programming Interface);
  - CRUD (Create, Read, Update and Delete);
  - Filtro e ordena por coluna;


### Iniciar
Abre o terminal e digite o comando:

```s
json-server --watch db.json -p 3000
```


### Instalação

```s
npm install -g json-server
```
### Formato do arquivo db.json
Cria um arquivo .json, db.json, coloque o nome tabela em formato Json:

```s
{
  "Contas": [
    {
      "name": "Queijo",
      "price": "20",
      "status": true,
      "dataCriacao": "2022-09-07T18:34:22.889Z",
      "id": 1,
      "dataPagamento": "2022-09-07T18:34:31.485Z"
    },
    {
      "name": "Teclado",
      "price": "110",
      "status": true,
      "dataCriacao": "2022-09-07T18:35:34.109Z",
      "id": 2,
      "dataPagamento": "2022-09-07T18:35:47.467Z"
    }
  ]
}

```

![api Json serve](./img/API-WALTER%20PAULO%20-%20%23api.png)