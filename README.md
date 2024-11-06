# Projeto Classificados


## Estrutura do Projeto


## Pré-requisitos

Se você ainda não tiver o Docker instalado, execute os seguintes comandos:

```bash
sudo apt update
sudo apt install docker.io docker-compose
sudo docker --version
```

## Como Iniciar o Projeto

### Passo 1: Clonar o repositório

```bash
git clone https://github.com/lopesmauro/classificados.git
cd classificados
npm i 
```

### Passo 2: Definir Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto para definir as variáveis de ambiente, como o usuário e a senha do banco de dados. Exemplo:

```env
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB=mydatabase
```

### Psso 3: Criar o arquivo `docker-compose.yml`

Aqui está o conteúdo do arquivo docker-compose.yml:

```yaml
version: '3.8'

services:
  database:
    image: postgres:13
    container_name: my_postgres_container
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-postgres}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-postgres}
      POSTGRES_DB: ${POSTGRES_DB:-mydb}
    ports:
      - "5433:5432"
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata: {}
```

### Passo 4: Iniciar os Contêineres com Docker Compose

```bash
docker-compose up -d
```

### Passo 5: Acessar o Banco de Dados (Opcional)

```bash
psql -h localhost -p 5433 -U myuser -d mydatabase
```

Ou caso queira acessar pelo terminal do conteiner:

```bash
docker exec -it my_postgres_container bash
psql -h localhost -p 5432 -U myuser -d mydatabase
```


