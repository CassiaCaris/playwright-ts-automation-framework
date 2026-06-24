# 🎭 Automação com Playwright
---

## 📖 Sobre o Projeto

Este projeto contém a suíte de testes automatizados da aplicação Linkaí, um gerenciador de links pessoais que integra:

API REST (Node.js)
Banco de dados NoSQL (MongoDB)
Frontend Web (React + Vite)

O objetivo do framework é validar de ponta a ponta os fluxos críticos da aplicação, garantindo qualidade tanto na camada de UI (E2E) quanto na camada de API.

---

## 🧪 Escopo de Automação

O projeto cobre:

* Testes End-to-End (UI)
* Testes de API REST
* Validação de fluxos críticos de usuário
* Gerenciamento de massa de dados para isolamento de testes
* Setup e teardown via MongoDB

---

## 🧠 Abordagem e Arquitetura

A arquitetura evoluiu de um modelo baseado em Page Objects para uma abordagem orientada a funcionalidades (Feature-Based Actions), permitindo:

* Maior reutilização de regras de negócio
* Melhor organização por domínio
* Redução de duplicação de código
* Facilidade de manutenção e escalabilidade

---

## ⚙️ Tecnologias e Ferramentas

* Playwright
* TypeScript
* Node.js
* MongoDB
* Faker.js
* bcryptjs
* Bruno (API testing & documentation)

---

## 🧪 Estratégia de Dados

* Geração dinâmica de dados com **Faker.js**
* Criptografia de senhas com **bcryptjs**
* Setup e teardown direto no **MongoDB**
* Garantia de isolamento entre execuções
* Independência total dos cenários

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
├── doc/                      # onde se encontra as imagens do Readme
├── e2e/                      # onde estão as Stec de UI/API
│   ├── api                       # onde estão as Stec de API
│   │   └── profile.ts
│   ├── ui                       # onde estão as Stec de UI
│   │   ├── home.spec.ts
│   │   ├── link.spec.ts
│   │   ├── login.spec.ts
│   │   ├── signup.spec.ts
│   │   └── social.spec.ts
├── node_modules/            # onde se encontram as informações da instalação do projeto "fica no local"
├── playwright-report/       # onde se encontram as informações dos screenshot e video da execução
│   ├── data/                # onde ficam as imagens e videos
│   └── index.html         
├── support/     
│   ├── actions/             # onde se encontram o desenvolvimento dos elementos  
│   │   ├── components       # onde se encontram o desenvolvimento dos elementos utilizados por todas as telas
│   │   └── *.ts             # onde se encontram o desenvolvimento dos elementos das telas
│   ├── api              # onde se encontram o desenvolvimento da API
│   ├── db               # onde se encontram o desenvolvimento dos comandos de Banco de Dados do Mongodb
│   └── fixtures             # onde se encontram as massas de teste
├── test-results             # Evidências de falhas
├── .gitignore             
├── package-lock.json  
├── package.json  
├── playwright.config.ts     # Configuração do Playwright
└── Readme.md
```

---

### ▶️ Como Executar o Projeto

1. **Instalar dependências**
``` bash
npm install
```

2. **Instalar browsers do Playwright**
``` bash
npx playwright install
```

3. **Executar todos os testes**
``` bash
npx playwright test
```

4. **Executar testes em modo UI**
``` bash
npx playwright test --ui
```

5. **Visualizar relatório**
``` bash
npx playwright show-report
```

---

## 📊 Relatórios de Teste

O framework gera automaticamente:

* HTML Report do Playwright
* Evidências de execução (screenshots em falhas)
* Trace Viewer para debugging

---

## 🔄 CI/CD

Os testes podem ser executados automaticamente via GitHub Actions, garantindo validação contínua do código a cada push ou pull request.

---

## 🧩 Conceitos Aplicados

* Automação E2E
* Automação de API
* Data Driven Testing
* Feature-Based Architecture
* Test Data Management
* Integração com banco de dados
* Consumo de APIs REST

---

## 🚧 Status do Projeto

Projeto em constante evolução e manutenção contínua.