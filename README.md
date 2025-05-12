# Teach - Landing Page

Uma moderna landing page para uma plataforma educacional que conecta professores e estudantes de todo o mundo, facilitando o ensino e o aprendizado online.

### 🌞 Preview do Projeto

![Preview do Projeto - Desktop](/public/desktop.png)

## ✨ Funcionalidades

- 🎯 **Design Moderno e Responsivo**: Interface elegante e otimizada para todos os dispositivos
- 🌍 **Foco Internacional**: Conecta professores e estudantes de diferentes países
- 📱 **Aplicativo All-in-one**: Apresenta uma solução completa para educação online
- 💻 **Componentes Interativos**: Animações suaves e elementos interativos usando Framer Motion
- 📊 **Métricas Impressionantes**: Exibe estatísticas sobre o alcance global da plataforma
- 👨‍👩‍👧‍👦 **Depoimentos de Usuários**: Showcases de experiências reais de estudantes e professores
- 📝 **Formulário de Contato**: Facilita a captura de leads interessados na plataforma

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React moderno com suporte a SSR e rotas inteligentes
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset tipado de JavaScript
- **TailwindCSS** - Framework CSS utility-first para estilização rápida
- **Framer Motion** - Biblioteca para animações fluidas e interativas
- **Shadcn UI** - Componentes reutilizáveis estilizáveis com Tailwind
- **Embla Carousel** - Carrossel moderno e flexível para exibição de conteúdo
- **Radix UI** - Primitivos de interface de usuário acessíveis e sem estilo

## 📋 Pré-requisitos

- Node.js 18.17.0 ou superior
- npm, yarn, pnpm ou bun

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/landing-page-teach.git
cd landing-page-teach
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 🏗️ Estrutura do Projeto

```
landing-page-teach/
├── src/
│   ├── app/                 # Rotas e páginas da aplicação
│   ├── components/          # Componentes reutilizáveis
│   ├── lib/                 # Funções utilitárias
│   ├── types/               # Definições de tipos TypeScript
│   └── utils/               # Utilitários adicionais
├── public/                  # Arquivos estáticos (imagens, ícones)
└── components.json          # Configuração do Shadcn UI
```

## 📱 Recursos de Acessibilidade

- Design responsivo adaptado para todos os tamanhos de tela
- HTML semântico para melhor acessibilidade
- Componentes interativos com suporte a navegação por teclado
- Contrastes adequados para melhor legibilidade

## 🌐 Deployment

A aplicação pode ser facilmente implantada na [Vercel](https://vercel.com) ou qualquer outra plataforma que suporte Next.js.

```bash
npm run build
# ou
yarn build
# ou
pnpm build
# ou
bun build
```

## ⚠️ Solução de Problemas no Deploy

Se você encontrar problemas de compatibilidade durante o deploy, especialmente relacionados ao React 19 e seus peers:

### Erro de Dependências

O projeto usa React 19 (versão RC), o que pode causar conflitos com alguns pacotes:

```
npm error Conflicting peer dependency: react@19.1.0
npm error node_modules/react
npm error   peer react@">= 16" from @tabler/icons-react@3.31.0
```

### Soluções:

1. **Use a flag --legacy-peer-deps**:

   - Adicione ao seu script de build: `npm install --legacy-peer-deps && npm run build`
   - Ou crie um arquivo `.npmrc` com: `legacy-peer-deps=true`

2. **Configure o Vercel**:

   - Crie um arquivo `vercel.json` com:

   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "package.json",
         "use": "@vercel/next",
         "config": {
           "installCommand": "npm install --legacy-peer-deps"
         }
       }
     ]
   }
   ```

3. **Atualize as Overrides**:
   - Adicione ao seu package.json:
   ```json
   "overrides": {
     "@tabler/icons-react": {
       "react": "19.0.0-rc-66855b96-20241106"
     }
   },
   "resolutions": {
     "react": "19.0.0-rc-66855b96-20241106",
     "react-dom": "19.0.0-rc-66855b96-20241106"
   }
   ```

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Quilion Oliveira**

- Github: [QuiLion7](https://github.com/QuiLion7)
- LinkedIn: [quilion7](https://www.linkedin.com/in/quilion7/)
