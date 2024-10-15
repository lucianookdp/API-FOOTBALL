
# API-FOOTBALL

Este projeto utiliza a **API-Football** para fornecer dados de futebol em tempo real. Para utilizar corretamente o projeto, siga as instruções abaixo.

## Pré-requisitos

- **Node.js** e **npm** instalados. [Instalar Node.js](https://nodejs.org/)
- Uma conta na [API-Football](https://www.api-football.com/) para obter sua **API Key**.

## Passos para utilizar o projeto

### 1. Clone o repositório

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd API-PROJETO-REACT
```

### 2. Instale as dependências

Com o terminal aberto no diretório do projeto, instale todas as dependências necessárias:

```bash
npm install
```

### 3. Troque a API Key

Para utilizar a API, você precisa substituir a **API Key** no arquivo `api.js`. Siga os passos abaixo:

1. Abra o arquivo `src/api/api.js`.
2. Substitua `"SUA API KEY AQUI"` pela sua chave de API obtida no site [API-Football](https://www.api-football.com/).

Exemplo:

```javascript
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'SUA API KEY AQUI',
    'X-RapidAPI-Host': 'v3.football.api-sports.io'
  }
};
```

### 4. Inicie a aplicação

Para rodar o projeto localmente, utilize o seguinte comando:

```bash
npm start
```

O projeto será executado no endereço `http://localhost:3000/`.

### 5. Build para produção

Se você quiser gerar uma versão otimizada para produção, execute o comando:

```bash
npm run build
```

### 6. Executando testes

Se desejar rodar os testes (caso existam), execute:

```bash
npm test
```

---

### Observações

- Lembre-se de **não compartilhar sua chave de API** publicamente. Mantenha-a segura e restrita.
- Verifique a documentação da [API-Football](https://www.api-football.com/documentation-v3) para entender melhor as rotas e dados que podem ser utilizados no projeto.
