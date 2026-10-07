# Dra. Vânia Medeiros — Website Institucional

Site pessoal premium desenvolvido em estrita conformidade com as instruções do briefing (`06/10/2026`).

---

## 1. Visão Geral da Arquitetura

- **Marca:** Exclusivamente pessoal — **Dra. Vânia Medeiros** (sem associação indevida a marcas ou clínicas de terceiros).
- **Atendimento:** Águas Claras Shopping, Av. das Araucárias, 1835, 5º andar, sala 566, Águas Claras, Brasília/DF.
- **Identidade Visual:** Tokens neutros provisórios (pesos visuais normalizados 60:40:10 / 54.55% base, 36.36% secundária, 9.09% destaque).
- **Tipografia:** Serifada editorial Georgia para títulos e `system-ui` para texto corrido.
- **Responsividade:** Matriz completa de adaptação para celular (320–767px), tablet (768–1199px) e computador (1200px+).
- **Acessibilidade:** Toque mínimo de 44×44px, foco por teclado visível, `prefers-reduced-motion` respeitado, sem dependência de hover.

---

## 2. Rotas Implementadas

| Rota | Página | Status |
| :--- | :--- | :--- |
| `/` | Início (Abertura editorial, manifesto, índice, autoridade, FAQ, contato) | Publicado |
| `/sobre/` | Sobre a Dra. Vânia (sem biografia inventada, com dados factuais) | Publicado |
| `/tratamentos/` | Visão Geral dos Tratamentos (4 faixas amplas numeradas) | Publicado |
| `/tratamentos/fios-de-pdo-plla/` | Procedimento Fios de PDO/PLLA com perguntas da avaliação | Publicado |
| `/tratamentos/full-face/` | Procedimento Full Face com reflexão de planejamento | Publicado |
| `/tratamentos/lipo-de-papada-hd/` | Procedimento Lipo de Papada HD | Publicado |
| `/tratamentos/preenchimento-facial/` | Procedimento Preenchimento Facial | Publicado |
| `/experiencia-de-atendimento/` | Experiência de Atendimento (passo a passo de preparação) | Publicado |
| `/perguntas-frequentes/` | Perguntas Frequentes (3 temas em `<details>` nativos) | Publicado |
| `/contato/` | Contato e Localização (WhatsApp + endereço + link Google Maps) | Publicado |
| `/privacidade/` | Política de Privacidade (específica e factual) | Publicado |
| `/resultados/` | Resultados e Registros (Módulo condicional mantido desabilitado) | Condicional (`resultsEnabled: false`) |
| `/404.html` | Página de erro 404 personalizada com retorno ao início | Publicado |

---

## 3. Dados Editáveis do Projeto

Os dados estão centralizados em arquivos editáveis:
- `dados/entidade.json` e `src/data/siteData.ts`: Entidade, endereço e redes.
- `dados/configuracao.json`: Flags de ativação de módulos e pesos de cores.
- `dados/contato.json`: WhatsApp e URLs parametrizadas por interesse.
- `dados/rotas.json`: Metadados por rota (title, description, condições).

---

## 4. Mídias e Assets

- **Retrato Principal:** `public/midias/retratos/retrato-principal.png` (455×549px, hash SHA-256 verificado com o original: `fbbab14a0bb18b28eceb8ce25a7caf6bc3772ac8f686e470a4c571c95d3aa6b7`).
- **Favicon Vetorial Provisório:** SVG neutro `public/icons/favicon.svg` transcrito da especificação e rasterizados em 512, 192, 180, 96 e 32px (`favicon.ico`).
- **Mídias não autorizadas ou desabilitadas:** Casos clínicos não liberados e cards antigos permanecem fora da distribuição pública, conforme especificação.

---

## 5. Comandos de Execução

```bash
# Instalação das dependências
npm install

# Desenvolvimento local
npm run dev

# Verificação de tipos / lint
npm run lint

# Build de produção
npm run build
```

---

## 6. Pendências Factuais para Publicação Oficial

1. **Validação da paleta definitiva:** Coletar prints/cores institucionais do Instagram `@dravaniamedeiros` para substituir a paleta neutra provisória nos tokens CSS.
2. **Autorizações de casos clínicos:** Assim que a Dra. Vânia validar autoria e autorizações dos comparativos, alternar `resultsEnabled: true` em `dados/configuracao.json`.
3. **Credenciais acadêmicas:** Confirmar número definitivo de registro do conselho e pós-graduações antes de publicar a seção de formação na página Sobre.
4. **Domínio definitivo:** Configurar URL canônica e sitemap final no `robots.txt` para indexação pelos mecanismos de busca.
