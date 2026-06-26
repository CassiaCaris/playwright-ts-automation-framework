import fs from 'fs';
import path from 'path';
import { frameworkEvolution } from './framework-evolution';

const readmePath = path.resolve(process.cwd(), 'README.md');

function gerarBarra(progresso: number): string {
  const total = 10;
  const preenchido = Math.round((progresso / 100) * total);
  const vazio = total - preenchido;

  return '█'.repeat(preenchido) + '░'.repeat(vazio);
}

const conteudoGerado = `
### 📊 Maturidade atual do Framework

> Atualizado automaticamente em: **${frameworkEvolution.ultimaAtualizacao}**  
> Versão atual: **${frameworkEvolution.versaoAtual}**

| Funcionalidade | Evolução | Status |
|---|---|---|
${frameworkEvolution.funcionalidades
  .map(
    item =>
      `| ${item.nome} | ${gerarBarra(item.progresso)} ${item.progresso}% | ${item.status} |`
  )
  .join('\n')}

`;

const readme = fs.readFileSync(readmePath, 'utf8');

const novoReadme = readme.replace(
  /<!-- framework-evolution:start -->([\s\S]*?)<!-- framework-evolution:end -->/,
  `<!-- framework-evolution:start -->\n${conteudoGerado}\n<!-- framework-evolution:end -->`
);

fs.writeFileSync(readmePath, novoReadme);

console.log('README atualizado com a evolução do framework.')