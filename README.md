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
├── tests/                 # Testes E2E e API
├── pages/                 # Abstrações de páginas (UI)
├── features/              # Actions baseadas em funcionalidades
├── services/             # Camada de API
├── utils/                # Utilitários gerais
├── data/                 # Massa de dados
├── config/               # Configurações do framework
├── playwright.config.ts  # Configuração do Playwright
└── package.json
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