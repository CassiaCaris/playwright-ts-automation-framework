# Linkaí - Jornada de Estudos em Automação com Playwright

## 📖 Sobre o Projeto

Este repositório documenta minha jornada de estudos em automação de testes utilizando **Playwright** e **TypeScript**, aplicada ao projeto **Linkaí**, um gerenciador de links pessoais.

O projeto contempla a integração entre:

* API REST com Node.js
* Banco de dados NoSQL com MongoDB
* Frontend Web
* Suíte de testes automatizados com Playwright

Durante a evolução do curso, foram praticados conceitos de automação E2E, testes de API, estruturação de projeto, boas práticas, gerenciamento de massa de dados e arquitetura de testes.

---

## 🔗 Repositórios da Jornada

A jornada foi organizada em dois repositórios complementares:

| Repositório | Objetivo |
|------------|-----------|
| [linkai](https://github.com/CassiaCaris/jornada_TechQa/tree/main/linkai) | Centraliza anotações, documentação, evolução dos módulos e aprendizados adquiridos durante o curso |
| [linkai_playwright](https://github.com/CassiaCaris/linkai_playwright) | Implementação prática da automação, contendo testes E2E, testes de API, integração com MongoDB, massa de testes, Feature-Based Actions e demais artefatos do projeto |

---

## 🎯 Objetivo da Jornada

O objetivo deste repositório é centralizar os estudos, anotações e aprendizados adquiridos durante o curso, registrando a evolução prática na construção de uma suíte de testes automatizados.

Durante a jornada foram desenvolvidos conhecimentos em:

* Automação E2E com Playwright
* TypeScript aplicado à automação de testes
* Testes de API
* Estruturação de projetos de automação
* Page Objects
* Feature-Based Actions
* Componentização de elementos
* Externalização de massa de testes
* Data Driven Testing
* Integração com MongoDB
* Geração dinâmica de dados com Faker.js
* Criptografia de senhas com bcryptjs
* Consumo de APIs REST
* Uso do Bruno para apoio nos testes de API
* Boas práticas de automação

---

## 📐 Arquitetura e Padrões Aplicados

Durante a evolução do projeto foram aplicados os seguintes padrões e práticas:

* Page Object Model
* Feature-Based Actions
* Componentização de elementos reutilizáveis
* Separação de responsabilidades
* Externalização de massa de testes
* Data Driven Testing
* Tipagem forte com TypeScript
* Preparação e limpeza de massa via MongoDB
* Camada de serviços para consumo de API
* Testes independentes
* Geração de evidências com screenshots, vídeos e relatórios

Esses padrões ajudam a reduzir o acoplamento dos testes, melhorar a legibilidade e aumentar a manutenibilidade da suíte de automação.

---

## 📚 Conteúdo Abordado

### Módulo 05 - Iniciando com Playwright

* Primeiros passos com Playwright
* Git e GitHub
* Testes sincronizados com o código
* Test Generator
* Cobertura de testes

### Módulo 06 - Estrutura, Reuso e Massa de Testes

#### Page Objects

* Reúso de código com Page Objects
* Organização inicial dos testes

#### Components

* Page Objects e componentes
* Reutilização de elementos comuns da aplicação

#### Interfaces

* Criação de interfaces para tipagem das massas de teste

#### Massa de Testes

* Externalização da massa de teste
* Ajustes e correções na massa de testes

#### Faker.js

* Geração dinâmica de dados para os cenários automatizados

### Módulo 07 - Boas Práticas e Integração

#### Melhorando a Legibilidade

* Separação dos dados do formulário de cadastro
* Criação de funções específicas para preenchimento e submissão

#### Validação de Atributos

* Validação de atributos HTML dos elementos
* Refatoração das validações para manter o padrão arquitetural

#### Massa de Testes com Novas Propriedades

* Validação de campos com preenchimentos incorretos
* Validação de divergência de informações nos formulários

#### Separação de Interfaces

* Separação entre massas de login e cadastro
* Criação de interfaces específicas, como `UserLogin` e `UserSignup`

#### O que Nunca Fazer com Page Objects

* Refatoração de validações para evitar acoplamento direto nos testes
* Centralização de elementos e ações dentro das camadas corretas

Exemplo de código refatorado para seguir o padrão de Page Objects:

```ts
const email = page.getByPlaceholder('Seu melhor e-mail para receber novidades!')
await expect(email).toHaveAttribute('type', 'email')
```

#### Conectando Testes ao Banco de Dados

* Instalação da dependência do MongoDB
* Conexão dos testes automatizados com o banco de dados

#### Testes Independentes

* Preparação e limpeza de massa diretamente no MongoDB
* Garantia de independência entre os testes

#### Boas Práticas e Custom Actions

* Evolução do Page Object tradicional para uma abordagem baseada em funcionalidades
* Aplicação do padrão Feature-Based Actions

### Módulo 08 - Testes Finais, Recursos Extras e Encerramento

* Cadastros com arrays e loops
* Testes de cadastro de redes sociais
* Consumo da API
* Uso do Bruno para apoio nos testes de API
* Construção da camada de serviços
* Configuração de actions para API
* Ajustes para nova versão da aplicação
* Configuração de URL base
* Execução de regressão pela CLI
* Geração de screenshots
* Geração de evidências em vídeo
* Encerramento da jornada

---

## 📈 Status da Jornada

| Módulo                                                                   | Status        |
| :----------------------------------------------------------------------- | :------------ |
| Módulo 05 - Iniciando com Playwright                                     | ✅ Concluído |
| Módulo 06 - Estrutura, Reuso e Massa de Testes                           | ✅ Concluído |
| Módulo 07 - Boas Práticas e Integrações                                  | ✅ Concluído |
| Módulo 08 - Testes finais, recursos extras, configurações e encerramento | ✅ Concluído |

---

## 📁 Estrutura dos Repositórios

A jornada foi organizada em dois repositórios:

### Repositório de Estudos

Este repositório centraliza a documentação, anotações, aprendizados e evolução dos módulos do curso.

### Repositório Prático

O desenvolvimento da automação está concentrado no repositório abaixo:

👉 [linkai_playwright](https://github.com/CassiaCaris/linkai_playwright)

Neste repositório encontram-se:

- Testes E2E com Playwright
- Testes de API
- Feature-Based Actions
- Integração com MongoDB
- Massa de testes
- Camada de serviços
- Coleções Bruno
- Relatórios e evidências de execução

---

## 📁 Estrutura do Projeto Prático

```bash
linkai/
├── apps/                    
│   ├── api/                   # Onde se enccontra o desenvolvimento das API
│   │   ├── config/
│   │   ├── .../
│   │   ├── .env
│   │   └── package.json
│   ├── web/                   # Onde se enccontra o desenvolvimento das Web
│   │   ├── dist/
│   │   └── package.json
│   └── docker-compose.yaml
│
├── doc/                        # Documentação e imagens de apoio
│
├── playwright-project/         # Onde foi desenvolvido o projeto prático
│
└── README.md
```

---

## 🚀 Como Executar o Projeto

### 1. Preparar o Banco de Dados com Docker

O Docker é utilizado para subir o **MongoDB** e o **Mongo Express**.

Na pasta da aplicação, execute:

```bash
docker compose up -d
```

Acesso ao Mongo Express:

```bash
http://localhost:17017
```

Credenciais:

```bash
Usuário: dba
Senha: dba
```

---

### 2. Iniciar a API

Acesse a pasta da API:

```bash
cd apps/api
```

Instale as dependências:

```bash
npm install
```

Execute o backend:

```bash
npm run dev
```

> Verifique o arquivo `.env` para garantir que a conexão com o banco esteja configurada corretamente.

---

### 3. Iniciar o Frontend

Acesse a pasta do frontend:

```bash
cd apps/web
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

Acesse:

```bash
http://localhost:3000
```

---

### 4. Executar os Testes Automatizados

Acesse o repositório prático:

```bash
cd linkai_playwright
```

Instale as dependências:

```bash
npm install
```

Execute todos os testes:

```bash
npx playwright test
```

---

## 🧪 Comandos Úteis

### Docker

| Comando                | Descrição                                    |
| :--------------------- | :------------------------------------------- |
| `docker ps`            | Lista os containers em execução              |
| `docker ps -a`         | Lista todos os containers, incluindo parados |
| `docker compose up -d` | Sobe os serviços em segundo plano            |
| `docker compose stop`  | Para os serviços sem removê-los              |

### Playwright

| Comando                                              | Descrição                                    |
| :--------------------------------------------------- | :------------------------------------------- |
| `npx playwright test`                                | Executa todos os testes em modo headless     |
| `npx playwright test --headed`                       | Executa os testes exibindo o navegador       |
| `npx playwright test --ui`                           | Abre a interface interativa do Playwright    |
| `npx playwright test --debug`                        | Abre o inspetor do Playwright para depuração |
| `npx playwright show-report`                         | Abre o último relatório de testes gerado     |
| `npx playwright codegen http://localhost:3000/login` | Abre o navegador com o gerador de testes     |

---

## ✅ Conhecimentos Consolidados

Ao final dos módulos estudados foram praticados:

* Configuração inicial do Playwright
* Criação de testes E2E
* Sincronização de testes
* Uso do Test Generator
* Aplicação do Page Object Model
* Componentização de elementos
* Gerenciamento de massa de testes
* Geração de dados dinâmicos com Faker.js
* Integração com MongoDB
* Preparação e limpeza de massa de testes
* Criptografia de senhas com bcryptjs
* Testes independentes
* Automação de API
* Consumo de endpoints REST
* Construção de camada de serviços
* Arquitetura baseada em Feature-Based Actions
* Geração de evidências com screenshots, vídeos e relatórios

---

## 📌 Observação

Este projeto representa minha evolução prática durante os estudos em automação de testes.

Ele não tem como objetivo ser um framework corporativo finalizado, mas sim um registro da minha aprendizagem, experimentação e aplicação de boas práticas em automação Web e API.

---

## 🔗 Referências

* [Guia de Instalação do Docker com WSL2](https://dev.to/papitofernando/instalando-o-docker-no-windows-10-home-ou-professional-com-wsl-2-26m3)
* [Site Oficial do Docker](https://www.docker.com/)
* [Documentação Node.js](https://nodejs.org/)
* [Documentação Playwright](https://playwright.dev/)
* [Documentação Faker.js](https://fakerjs.dev/)
* [Documentação MongoDB Node.js Driver](https://www.npmjs.com/package/mongodb)
* [Documentação MongoDB](https://www.mongodb.com/)
* [Documentação bcryptjs](https://www.npmjs.com/package/bcryptjs)
* [Bruno](https://www.usebruno.com/)
