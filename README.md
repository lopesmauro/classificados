# Projeto Classificados
Classificados é uma aplicação para anunciar carros usados, onde os usuários podem cadastrar carros, visualizar os detalhes e buscar anúncios com base em filtros de preço.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Prisma**: ORM moderno para Node.js e TypeScript, utilizado para interagir com o banco de dados.
- **Tailwind CSS**: Framework CSS utilitário para design rápido e responsivo.
- **Zod**: Biblioteca de validação de esquemas para validar e parsear dados de maneira segura e eficiente.
- **Sharp**: Biblioteca para manipulação de imagens, como redimensionamento e otimização.
- **UUID**: Utilizado para gerar identificadores exclusivos universais (UUIDs).

## Estrutura do Projeto
```bash
/classificados
│
├── README.md           # Documentação do projeto
├── docker-compose.yml  # Configuração do Docker Compose
├── next.config.ts      # Configuração do Next.js
├── next-env.d.ts       # Tipagem automática do Next.js
├── node_modules/       # Dependências instaladas (gerenciado pelo npm)
├── package.json        # Dependências e scripts do projeto
├── package-lock.json   # Detalhes de versões exatas das dependências
├── postcss.config.mjs  # Configuração do PostCSS
├── prisma/             # Configuração e esquemas do Prisma
├── public/             # Arquivos públicos e estáticos (imagens, fontes, etc.)
├── src/                # Código-fonte principal do projeto
│   ├── app/            # Diretório principal de páginas e rotas
│   ├── components/     # Componentes reutilizáveis da aplicação
│   ├── styles/         # Arquivos de estilo (Tailwind e outros)
│   ├── hooks/          # Hooks personalizados
│   ├── contexts/       # Provedores de contexto para estado global
├── tailwind.config.ts  # Configuração do Tailwind CSS
└── tsconfig.json       # Configuração do TypeScript
```

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

### Passo 6: Rodar a aplicação

```bash
npm run dev
```

