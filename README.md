# 🎭 Automação com Playwright

![Playwright Tests](https://github.com/CassiaCaris/playwright-ts-automation-framework/actions/workflows/playwright.yml/badge.svg)<br>

Framework de automação de testes desenvolvido com **Playwright** + **TypeScript**, projetado para validar fluxos ***UI (End-to-End)*** e ***API REST***, seguindo boas práticas de Engenharia de Qualidade, integração contínua e arquitetura escalável.

---

## 🚀 Principais Características

✅ Testes End-to-End (UI)
✅ Testes de API REST
✅ Execução Cross-Browser (Chromium, Firefox e WebKit)
✅ Execução paralela dos testes
✅ Execução Cross-Browser
✅ Compatibilidade com Chromium, Firefox, WebKit, Google Chrome e Microsoft Edge
✅ Integração com MongoDB
✅ Ambiente preparado com Docker
✅ GitHub Actions (CI/CD)
✅ Relatórios HTML do Playwright
✅ Evidências automáticas (Screenshots, Vídeos e Traces)
✅ Estrutura baseada em Actions, Clients e Fixtures

---

📌 Recursos do Framework
| Recurso              | Status |
|-----------------------|:------:|
| UI Tests             | ✅ |
| API Tests            | ✅ |
| Execução Paralela    | ✅ |
| Chromium             | ✅ |
| Firefox              | ✅ |
| WebKit               | ✅ |
| Google Chrome        | ✅ |
| Microsoft Edge       | ✅ |
| Docker               | ✅ |
| MongoDB              | ✅ |
| GitHub Actions       | ✅ |
| HTML Report          | ✅ |
| Screenshot           | ✅ |
| Video                | ✅ |
| Trace                | ✅ |

---

## 📖 Sobre o Projeto

Este framework automatiza os principais fluxos da aplicação Linkaí, composta por:

API REST (Node.js)
Frontend Web (React + Vite)
Banco de Dados MongoDB

O objetivo é validar toda a aplicação, desde a interface até a camada de serviços, garantindo qualidade durante todo o ciclo de desenvolvimento.

---

## 🎯 Objetivos

Este projeto demonstra:

* Automação de testes UI
* Automação de APIs
* Framework Playwright com TypeScript
* Engenharia de Qualidade
* CI/CD utilizando GitHub Actions
* Gerenciamento de massa de testes
* Boas práticas de automação

---

## 🧪 Tipos de Testes

### 🖥️ UI Tests (E2E)

Fluxos validados:

* Login
* Cadastro
* Links
* Home
* Social features

### 🔌 API Tests

Validações realizadas:

* Validação de endpoints REST
* Autenticação
* Perfil de usuário
* Requisições e respostas da API

---

## 🌐 Cross Browser Testing

O framework executa automaticamente a suíte de testes nos seguintes navegadores:

| Navegador        | Engine     |
|------------------|------------|
| Chromium         | Chromium   |
| Google Chrome    | Chromium   |
| Microsoft Edge   | Chromium   |
| Firefox          | Gecko      |
| WebKit           | WebKit     |

A validação em múltiplos navegadores garante maior compatibilidade da aplicação e reduz riscos relacionados ao comportamento específico de cada browser.

---

## 🏗️ Arquitetura do Projeto

O framework foi estruturado seguindo separação de responsabilidades:

```text
          UI Tests / API Tests
                   │
                   ▼
               Actions
                   │
                   ▼
               Clients
                   │
                   ▼
            Database Layer
                   │
                   ▼
               Fixtures
                   │
                   ▼
            GitHub Actions
```

---

## 📂 Estrutura do Projeto
```bash
playwright-ts-automation-framework/
│
├── .github/                  # pasta para a execução da automação Automatica no Github Actions
│   └── workflows
│   │   └── playwright.yml
│
├── api-doc/                  # onde se encontra as API's do Projeto usando pelo Bruno
├── apps/                     # onde contém os dados do desenvolvimento da Aplicação
│   ├── api
│   ├── web
│   └── docker-compose.yaml
│
├── doc/                      
├── support/     
│   ├── actions/               
│   ├── clients              # desenvolvimento das informações da API
│   ├── db                   # comandos de Banco de Dados do Mongodb
│   └── fixtures             # massas de teste
│
├── test/                    
│   ├── api                  # onde estão as Specs de API
│   └── ui                   # onde estão as Specs de UI
│
├── package.json  
├── playwright.config.ts     # Configuração do Playwright
└── Readme.md
```

---

## ⚙️ Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| Playwright | Automação UI e API |
| TypeScript | Linguagem principal |
| Node.js    | Runtime |
| MongoDB    | Banco de dados |
| Faker.js   | Massa de dados |
| bcryptjs   | Criptografia   |
| Bruno      | Documentação e testes de API |
| Docker     | Ambiente local |
| GitBub Actions | Integração contínua |

---

## 🧪 Estratégia de Testes

* Geração dinâmica de dados com **Faker.js**
* Setup e Teardown via **MongoDB**
* Testes independentes e isolados
* Reutilização através de Actions
* Separação entre UI e API
* Execução Paralela
* Execução Cross-Browser
* Evidências automáticas

---

### ▶️ Execução Local

**Instalar dependências**
``` bash
npm install
```

**Inicializar MongoDB**
Na raiz da pasta `/apps`, inicie os serviços de banco de dados:
```bash
docker-compose up -d
```

**Inicializar API (Backend)**
Em um novo terminal, acesse `/apps/api`:
```bash
npm install   # Caso seja a primeira execução
npm run dev
```

**Inicializar Frontend**
Em outro terminal, acesse `linkai/apps/web`:
```bash
npm install   # Caso seja a primeira execução
npm run dev
```
> A aplicação deverá estar disponível em: `http://localhost:3000`

---

**Executar os testes**<br>
| Comando                 | Descrição                                                |
| :---------------------- | :------------------------------------------------------- |
| `npm test`          | Executa todos os testes                                  |
| `npm run test:ui`       | Executa apenas testes UI                                 |
| `npm run test:api`      | Executa apenas testes API                                |
| `npm run test:headed`   | Execução de todos os testes via headless                 |
| `npm run report`        | Abre o relatório HTML                                    |
| `npm run test:chromium` | Executos todos os testes pelo navegador Chromium         |
| `npm run test:firefox`  | Executos todos os testes pelo navegador Firefox          |
| `npm run test:webkit`   | Executos todos os testes pelo navegador Webkit - Safari  |
| `npm run test:edge`     | Executos todos os testes pelo navegador Microsoft Edge   |
| `npm run test:chrome`   | Executos todos os testes pelo navegador Microsoft Google Chrome |


---

## 📊 Relatórios e Evidências

Após cada execução o Playwright gera automaticamente:

* HTML Report
* Screenshots
* Vídeos
* Traces

### Estrutura da pasta
![Estrutura Pasta](doc/pastaRelatorio.png)

---

### Abrindo relatório
```bash
npx playwright show-report
```

---

### Relatório HTML
![Relatório](doc/Relatorio_Screenshot_video.png)

---

### Detalhes do Caso de Teste
![Detalhe do Caso de teste com screenshot](doc/DetalheRelatorio.png)

---

### Screenshot + Video
![Detalhe do Caso de teste com screenshot + video](doc/DetalheRelatorioScreenshoteVideo.png)

---

## 🚀 Integração Contínua (GitHub Actions)

A pipeline executa automaticamente:

* Checkout do código
* Instalação das dependências
* Inicialização do MongoDB
* Inicialização da API
* Inicialização do Frontend
* Instalação dos browsers
* Execução da suíte em:
  - Chromium
  - Firefox
  - WebKit
  - Google Chrome
  - Microsoft Edge
* Geração do relatório HTML
* Publicação do Artifact

---

### Fluxo da Popeline (GitHub Actions)

```text
                  GitHub Actions
                        │
                        ▼
             Playwright Test Runner
                        │
      ┌────────┬────────┬────────┬──────────────┬──────────────┐
      │        │        │        │              │
      ▼        ▼        ▼        ▼              ▼
  Chromium   Firefox  WebKit  Google Chrome  Microsoft Edge
      └────────┴────────┴────────┴──────────────┴──────────────┘
                        │
                        ▼
      HTML Report + Screenshots + Videos + Traces
```

---

### Visualizar Relatórios da Pipeline

1. Abra Actions
2. Selecione uma execução
3. Clique no Job test
4. Faça download do playwright-report
5. Extraia o ZIP
6. Abra ***playwright-report/index.html***

---

### Consultando o Histórico da execução automatica 

Acesse:

```text
GitHub > Actions > Playwright Tests
```

Nessa área é possível acompanhar:

- Histórico das execuções
- Tempo de execução
- Logs completos
- Status da pipeline
- Relatórios publicados

---

## 📊 O que este projeto demonstra

* Playwright + TypeScript
* Testes UI e API
* Cross Browser Testing
* Execução Paralela
* Docker
* Integração com MongoDB
* GitHub Actions
* CI/CD
* HTML Reports
* Screenshots
* Vídeos
* Traces
* Arquitetura Escalável
* Boas práticas de Engenharia de Qualidade

---

## 🚧 Roadmap

Próximas evoluções:

* Visual Testing
* Dashboards de métricas
* Integração com Azure DevOps
* IA aplicada à automação de testes
* Agentic Testing
* Self-Healing Tests

---

## 👩‍💻 Autora

Cassia Caris

Especialista em Qualidade de Software, Automação de Testes e Engenharia de Qualidade.