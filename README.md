# 💪 MyGym - Landing Page para Academia 🏋️‍♀️

## 📋 Sobre o Projeto

MyGym é uma landing page moderna e responsiva desenvolvida para academias que buscam uma presença digital profissional. O projeto oferece uma interface atrativa e funcional, com recursos interativos como calculadora de IMC, seções de serviços, equipe e depoimentos, proporcionando uma experiência completa para os visitantes.

## ✨ Características

- 🎨 Design moderno e responsivo
- 📱 Compatível com todos os dispositivos (desktop, tablet, mobile)
- 🔍 Otimizado para SEO com meta tags completas
- ⚡ Carregamento rápido com Next.js 15
- 📊 Calculadora de IMC integrada e interativa
- 🕒 Seção de horários de funcionamento
- 👥 Apresentação da equipe com cards personalizados
- 💬 Depoimentos de clientes com carousel
- 📞 Formulário de contato funcional
- 🎯 Seções de serviços e sobre a academia
- 🌟 Animações suaves e transições elegantes

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones
- **ESLint** - Linter para qualidade de código
- **PostCSS** - Processador de CSS

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd MyGym
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

### Scripts Disponíveis

- `npm run dev` - Executa em modo de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa verificação de código

## 📐 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal e metadata SEO
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/
│   ├── Header.tsx         # Cabeçalho com navegação
│   ├── Footer.tsx         # Rodapé com informações
│   ├── ScrollToTopButton.tsx # Botão voltar ao topo
│   └── sections/          # Seções da página
│       ├── Hero.tsx       # Seção principal
│       ├── About.tsx      # Sobre a academia
│       ├── Services.tsx   # Serviços oferecidos
│       ├── Schedule.tsx   # Horários de funcionamento
│       ├── BMICalculator.tsx # Calculadora de IMC
│       ├── Team.tsx       # Equipe de profissionais
│       ├── Testimonials.tsx # Depoimentos
│       └── Contact.tsx    # Formulário de contato
├── types/
│   └── index.ts          # Definições de tipos TypeScript
└── lib/
    └── utils.ts          # Utilitários e helpers
```

## 🎯 Seções da Landing Page

- **Header**: Logo MyGym e menu de navegação responsivo
- **Hero**: Seção principal com chamada para ação
- **Sobre**: Apresentação da academia com imagens e benefícios
- **Serviços**: Cards com os principais serviços oferecidos
- **Horários**: Tabela com horários de funcionamento
- **Calculadora IMC**: Ferramenta interativa para cálculo de IMC
- **Equipe**: Apresentação dos profissionais com fotos e especialidades
- **Depoimentos**: Carousel com opiniões de clientes
- **Contato**: Formulário de contato simplificado
- **Footer**: Informações de contato e redes sociais

## 🔧 Personalização

O projeto foi desenvolvido para ser facilmente personalizável:

1. **Cores e Tema**: Modifique as cores no Tailwind CSS
2. **Conteúdo**: Atualize textos e informações nas seções
3. **Imagens**: Substitua as imagens na pasta `public/images/`
4. **Logo**: Atualize a logo no Header e Footer
5. **Informações de Contato**: Modifique dados no Footer e seção Contact

## 📱 Responsividade

A landing page é totalmente responsiva com breakpoints otimizados:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔍 SEO

O projeto inclui otimizações SEO básicas:
- Meta tags completas (title, description, keywords)
- Open Graph para redes sociais
- Twitter Cards
- Estrutura semântica HTML5
- Idioma configurado para português brasileiro

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

⭐ **MyGym** - Transformando a presença digital de academias com tecnologia moderna e design profissional!
