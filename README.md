# 🎭 Automação com Playwright
---

## 📖 Sobre o Projeto

Este projeto contém a suíte de testes automatizados da aplicação Linkaí, um gerenciador de links pessoais que integra:

* API REST (Node.js)
* Banco de dados NoSQL (MongoDB)
* Frontend Web (React + Vite)

O objetivo do framework é validar de ponta a ponta os fluxos críticos da aplicação, garantindo qualidade tanto na camada de **UI (E2E)** quanto na camada de **API**.

---

## 🎯 Objetivo

Garantir a qualidade da aplicação através de:

* Testes automatizados de interface (UI)
* Testes automatizados de API REST
* Validação de fluxos críticos do usuário
* Isolamento e controle de dados de teste
* Execução confiável e reprodutível

---

## 🧪 Tipos de Testes

O projeto está dividido em dois principais tipos de automação:

### 🖥️ UI Tests (E2E)

Testes de interface simulando comportamento real do usuário:

* Login
* Cadastro
* Links
* Home
* Social features

### 🔌 API Tests

Testes diretos na camada de serviços:

* Validação de endpoints
* Autenticação
* Perfil de usuário
* Requisições e respostas da API

---

## 🏗️ Arquitetura do Projeto

O framework foi estruturado para separar responsabilidades entre testes e camadas de suporte:

* Testes organizados por tipo (UI e API)
* Actions reutilizáveis para fluxos de negócio
* Camada de serviços para consumo da API
* Camada de banco de dados para setup e teardown
* Fixtures para massa de dados de teste

---

## 📂 Estrutura do Projeto
```bash
playwright-ts-automation-framework/
│
├── api-doc/                  # onde se encontra as API's do Projeto usando pelo Bruno
├── apps/                     # onde contém os dados do desenvolvimento da Aplicação
│   ├── api
│   ├── web
│   └── docker-compose.yaml
├── doc/                      
├── node_modules/             # versões da instalação "fica no local"
├── playwright-report/        # screenshot e video da execução do relatorio "fica no local"
│   ├── data/                
│   └── index.html         
├── support/     
│   ├── actions/               
│   │   ├── components       # informações dos elementos utilizados por todas as telas
│   │   └── *.ts             # informações dos elementos das telas
│   ├── clients              # desenvolvimento das informações da API
│   ├── db                   # comandos de Banco de Dados do Mongodb
│   └── fixtures             # massas de teste
├── test/                    
│   ├── api                  # onde estão as Stec de API
│   │   └── profile.ts
│   ├── ui                   # onde estão as Stec de UI
│   │   ├── home.spec.ts
│   │   ├── link.spec.ts
│   │   ├── login.spec.ts
│   │   ├── signup.spec.ts
│   │   └── social.spec.ts
├── test-results             # Evidências de falhas "fica no local"
├── .gitignore             
├── package-lock.json  
├── package.json  
├── playwright.config.ts     # Configuração do Playwright
└── Readme.md
```

---

## ⚙️ Tecnologias Utilizadas

* Playwright
* TypeScript
* Node.js
* MongoDB
* Faker.js
* bcryptjs
* Bruno (API testing & documentation)

---

## 🧪 Estratégia de Testes

* Geração dinâmica de dados com **Faker.js**
* Criação e limpeza de dados via **MongoDB**
* Testes independentes e isolados
* Uso de actions para reutilização de fluxos
* Separação entre UI e API tests

---

### ▶️ Como Executar o Projeto

**Instalar dependências**
``` bash
npm install
```

**Inicializar o Banco de Dados (Docker)**
Na raiz da pasta `/apps`, inicie os serviços de banco de dados:
```bash
docker-compose up -d
```

**Inicializar a API (Backend)**
Em um novo terminal, acesse `/apps/api`:
```bash
npm install   # Caso seja a primeira execução
npm run dev
```

**Inicializar a Aplicação Web App (Frontend)**
Em outro terminal, acesse `linkai/apps/web`:
```bash
npm install   # Caso seja a primeira execução
npm run dev
```
> A aplicação deverá estar disponível em: `http://localhost:3000`

---

**Executar todos os testes**<br>
Em outro terminal, pode realizar a execução do playwright por um dos comandos na tabela:

| Comando                                              | Descrição                                    |
| :--------------------------------------------------- | :------------------------------------------- |
| `npx playwright test`                                | Executa todos os testes em modo headless     |
| `npx playwright test --headed`                       | Executa os testes exibindo o navegador       |
| `npx playwright test --ui`                           | Abre a interface interativa do Playwright    |
| `npx playwright test --debug`                        | Abre o inspetor do Playwright para depuração |
| `npx playwright show-report`                         | Abre o último relatório de testes gerado     |
| `npx playwright codegen http://localhost:3000/login` | Abre o navegador com o gerador de testes     |

*Onde encontrar as informações do Relatório*<br>
Após a execução será gerado o relatório na pasta *\playwright-report*.<br>
![Pasta do relatório somente com os Screenshot](doc/pastaRelatorio.png)

**Visualizar relatório**<br>
Após a execução do comando para executar a automação via headless é disponibilizado um comando para abrir o relatorio:
![Execução no terminal na pasta do projeto](doc/execuçãoHedless.png)
```bash
npx playwright show-report
```

*Apresentação do Relatório*
![Relatório somente com Screenshot e Video](doc/Relatorio_Screenshot_video.png)

Ao clicar no caso de teste
![Detalhe do Caso de teste com screenshot](doc/DetalheRelatorio.png)
![Detalhe do Caso de teste com screenshot + video](doc/DetalheRelatorioScreenshoteVideo.png)

---

## 📊 O que este projeto demonstra

* Automação de testes UI e API
* Estruturação de framework com Playwright
* Separação de responsabilidades
* Boas práticas de QA Automation
* Controle de dados de teste com banco de dados
* Reutilização de fluxos via actions

---

## 🚧 Status do Projeto

Projeto em evolução contínua para aprimoramento de arquitetura e cobertura de testes..