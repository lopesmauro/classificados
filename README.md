# 🚗 Projeto Classificados
Classificados é uma aplicação para anunciar carros usados, onde os usuários podem cadastrar carros, visualizar os detalhes e buscar anúncios com base em filtros de preço.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Prisma**: ORM moderno para Node.js e TypeScript, utilizado para interagir com o banco de dados.
- **Tailwind CSS**: Framework CSS utilitário para design rápido e responsivo.
- **Zod**: Biblioteca de validação de esquemas para validar e parsear dados de maneira segura e eficiente.
- **Sharp**: Biblioteca para manipulação de imagens, como redimensionamento e otimização.
- **UUID**: Utilizado para gerar identificadores exclusivos universais (UUIDs).

## RFs (Requisitos funcionais)

- [ ] O usuário deve poder criar uma conta com nome, e-mail, senha e telefone de contato.
- [ ] O usuário deve poder fazer login e permanecer autenticado na plataforma.
- [ ] O usuário pode cadastrar anúncios de carros, incluindo fotos, descrição, ano, quilometragem e preço.
- [ ] O usuário pode editar detalhes do seu anúncio a qualquer momento.
- [ ] O usuário pode desativar temporariamente um anúncio sem precisar excluí-lo.
- [ ] O usuário pode excluir um anúncio permanentemente.
- [ ] O usuário pode visualizar a lista de carros anunciados por outros usuários.
- [ ] O usuário pode acessar uma página detalhada de um carro específico.
- [ ] O usuário pode buscar carros por filtros como preço, marca, modelo, ano, cidade e quilometragem.
- [ ] O usuário pode favoritar anúncios para acessar mais tarde.
- [ ] O usuário pode entrar em contato com o vendedor via chat integrado ou WhatsApp.
- [ ] O usuário pode avaliar vendedores após uma negociação concluída.
- [ ] O usuário pode visualizar a reputação de um vendedor antes de entrar em contato.
- [ ] O usuário pode marcar um carro como "vendido", removendo-o das buscas, mas mantendo o histórico de vendas.
- [ ] O sistema pode recomendar anúncios baseados no histórico de buscas e interesses do usuário.

## RNs (Regras de negocio)

- [ ] O e-mail do usuário deve ser único e verificado antes do primeiro login.
- [ ] O telefone de contato deve ser válido para permitir negociações via WhatsApp.
- [ ] Apenas o dono do anúncio pode editá-lo, desativá-lo ou excluí-lo.
- [ ] Anúncios não podem ter um preço abaixo de R$ 1.000,00 (para evitar fraudes).
- [ ] Um usuário não pode favoritar o próprio anúncio.
- [ ] O chat integrado entre vendedor e comprador deve ser salvo para referência futura.
- [ ] Um anúncio inativo por mais de 90 dias deve ser arquivado automaticamente.
- [ ] Um vendedor com muitas avaliações negativas pode ter seus anúncios suspensos.
- [ ] Apenas usuários autenticados podem visualizar os contatos dos vendedores.

## RNFs (Requisitos nao funcionais)

- [ ] As senhas dos usuários devem ser armazenadas de forma segura com hashing e salting.
- [ ] O sistema deve utilizar PostgreSQL como banco de dados principal.
- [ ] O armazenamento de imagens deve ser otimizado com a biblioteca Sharp.
- [ ] O sistema deve suportar paginação de anúncios, carregando 20 itens por vez.
- [ ] Deve utilizar JWT (JSON Web Token) para autenticação segura.
- [ ] O front-end deve ser responsivo e adaptável para dispositivos móveis.
- [ ] O histórico de buscas do usuário deve ser armazenado para melhorar sugestões futuras.
- [ ] O sistema deve registrar logs de acesso e atividades suspeitas para segurança.


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
│   ├── utils/          # Funções utilitárias reutilizáveis em várias partes da aplicação
│   ├── services/       # Lógica de negócios e interações com APIs ou fontes externas de dados
│   └── contexts/       # Provedores de contexto para estado global
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

