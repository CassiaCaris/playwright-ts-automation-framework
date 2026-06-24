# 🎭 Automação com Playwright

![Playwright Tests](https://github.com/CassiaCaris/playwright-ts-automation-framework/actions/workflows/playwright.yml/badge.svg)

---

## 📖 Sobre o Projeto

Framework de automação de testes desenvolvido com **Playwright + TypeScript**, projetado para validar fluxos End-to-End (UI) e serviços REST (API) da aplicação Linkaí.

O projeto foi construído seguindo boas práticas de automação, separação de responsabilidades e integração contínua, permitindo a execução local e automatizada através do GitHub Actions.

---

## 🚀 Principais Características

* Testes UI (End-to-End)
* Testes API REST
* Integração com MongoDB
* Geração dinâmica de dados com Faker.js
* Evidências automáticas (Screenshots, Vídeos e Traces)
* Integração contínua com GitHub Actions
* Estrutura escalável baseada em Actions e Fixtures
* Relatórios HTML do Playwright

---

## 🎯 Objetivo

Este framework foi criado para demonstrar:

* Automação de testes de interface
* Automação de testes de API
* Arquitetura de framework Playwright
* Integração contínua (CI/CD)
* Gerenciamento de massa de dados
* Boas práticas de QA Automation

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

* Validação de endpoints
* Autenticação
* Perfil de usuário
* Requisições e respostas da API

---

## 🏗️ Arquitetura do Projeto

O framework foi estruturado seguindo o princípio de separação de responsabilidades:

* UI Tests
* API Tests
* Actions
* Clients
* Database Layer
* Fixtures
* CI/CD

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
│
├── apps/                     # onde contém os dados do desenvolvimento da Aplicação
│   ├── api
│   ├── web
│   └── docker-compose.yaml
│
├── doc/                      
│
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
| GitBub Actions | Integração contínua |

---

## 🧪 Estratégia de Testes

* Geração dinâmica de dados com **Faker.js**
* Criação e limpeza de dados via **MongoDB**
* Testes independentes e isolados
* Uso de actions para reutilização de fluxos
* Separação entre UI e API tests
* Evidências automáticas

---

### ▶️ Execução Local

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

**Executar os testes**<br>
| Comando               | Descrição                                |
| :-------------------- | :--------------------------------------- |
| `npm test`            | Executa todos os testes                  |
| `npm run test:ui`     | Executa apenas testes UI                 |
| `npm run test:api`    | Executa apenas testes API                |
| `npm run test:headed` | Execução de todos os testes via headless |
| `npm run report`      | Abre o relatório HTML                    |

---

## 📊 Relatórios e Evidências

O framework gera automaticamente:

* Screenshots
* Vídeos
* Traces
* Relatório HTML

Abrir relatório:
```bash
npx playwright show-report
```

**Exemplo de Evidências**
* Screenshot em falhas
* Vídeo da execução
* Trace para depuração
* Histórico detalhado dos passos

---

## 🚀 Integração Contínua (GitHub Actions)

O projeto possui execução automatizada utilizando GitHub Actions.

**Quando a Pipeline é Executada**
* Push na branch main
* Pull Request
* Execução manual

**Fluxo da Pipeline**
1. Checkout do código
2. Instalação das dependências
3. Inicialização do MongoDB
4. Inicialização da API
5. Inicialização do Frontend
6. Instalação dos browsers Playwright
7. Execução dos testes
8. Geração do relatório
9. Publicação do relatório

**Executar Manualmente**
```text
GitHub → Actions → Playwright Tests → Run Workflow
```

**Visualizar Relatórios da Pipeline**

Após a execução:

* Acesse Actions
* Abra a execução desejada
* Clique no Job "test"
* Baixe o Artifact "playwright-report"

Após extrair o ZIP:

playwright-report/index.html

segue imagem do relatório
![Relatório somente com Screenshot e Video](doc/Relatorio_Screenshot_video.png)

Ao clicar no caso de teste
![Detalhe do Caso de teste com screenshot](doc/DetalheRelatorio.png)
![Detalhe do Caso de teste com screenshot + video](doc/DetalheRelatorioScreenshoteVideo.png)

---

## Consultando o Histórico da execução automatica 

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

* Playwright com TypeScript
* Testes UI e API
* Integração com Banco de Dados
* Geração de Massa de Dados
* Estruturação de Framework
* Evidências Automatizadas
* GitHub Actions
* CI/CD
* Boas práticas de QA Automation
* Arquitetura escalável

---

## 🚧 Roadmap

Próximas evoluções:

* Execução paralela em múltiplos navegadores
* Dashboards de métricas
* Integração com Azure DevOps
* Testes visuais
* Execução distribuída
* IA aplicada à automação de testes

---

## 👩‍💻 Autora

Cassia Caris

Especialista em Qualidade de Software, Automação de Testes e Engenharia de Qualidade.