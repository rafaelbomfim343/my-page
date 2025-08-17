import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Rafael",
  lastName: "Bomfim",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "",
  avatar: "/images/avatar.jpg",
  email: "rafael.bomfim@aluno.ufabc.edu.br",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Inglês", "Portugês"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rafaelbomfim343/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rafael-bomfim-431a0623a/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@rafaelbomfim344",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        "Sou o Rafael Bomfim, estudante de Engenharia na UFABC, e aqui compartilho meus projetos e aprendizados nas áreas de dados, tecnologia e gestão. Minha jornada inclui desde a coleta e engenharia de dados até a criação de dashboards claros e eficientes, sempre buscando transformar informações em soluções. Como administrador de sistemas Linux, desenvolvi habilidades técnicas robustas, enquanto minha experiência em liderança de equipes me ensinou a alinhar objetivos técnicos e humanos. Este portfólio reflete minha paixão por resolver problemas complexos e meu compromisso com a evolução constante. Vamos conversar?"
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        company: "RENEA / Odebrecht",
        timeframe: "2020 - 2025",
        role: "Supervisor de Logística",
        achievements: [
          <>
           "Como Supervisor de Logística na RENEA (Odebrecht), fui responsável pela gestão operacional no setor de logística da obra do Rodoanel Mario Covas, combinando liderança de equipe com análise de dados para otimização de processos. Minhas principais responsabilidades incluíam:

    Gestão Integrada: Coordenação de frota veicular e equipe operacional, garantindo o abastecimento contínuo de materiais e o cumprimento de prazos.

    Automação e Análise de Dados:

        Utilização de Python para tratamento de dados e automação de relatórios

        Desenvolvimento de queries em SQL (MySQL/PostgreSQL) para extração e cruzamento de informações

        Criação de dashboards interativos no Power BI e Tableau

        Elaboração de relatórios avançados e planilhas dinâmicas no Excel (incluindo VBA e Power Query)

    Tomada de Decisão: Análise de KPIs logísticos (custos operacionais, produtividade, ociosidade) com apresentação de insights estratégicos à diretoria.

Esta experiência me permitiu desenvolver uma visão 360° da logística em grandes obras, aliando gestão de pessoas com ferramentas de análise de dados para criar soluções eficientes em ambientes de alta pressão."
          </>,
          <>
            "redução de 15% nos custos logísticos através de análise preditiva"
          </>,
                    <>
            "Aumento de 25% na produtividade da equipe após implementação de métricas"
          </>,

        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/renea_infraestrutura_cover.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "California Aços Finos",
        timeframe: "2015 - 2020",
        role: "Motorista Lider de Equipe",
        achievements: [
          <>
           "Na California Aços Finos, atuei como Motorista Líder de Equipe, responsável por coordenar e gerenciar uma equipe de motoristas, garantindo a eficiência operacional e a segurança no transporte de materiais. Minhas principais atribuições incluíam:

    Gestão de Equipe e Rotas: Organização de escalas, planejamento de rotas logísticas e monitoramento em tempo real para otimizar prazos e reduzir custos.

    Análise de Dados e KPIs: Geração de relatórios semanais com indicadores de desempenho (como tempo de entrega, consumo de combustível e ocorrências), utilizando dashboards intuitivos para visualização clara dos dados.

    Tomada de Decisão: Identificação de gargalos operacionais e proposição de soluções baseadas em dados, contribuindo para melhorias contínuas nos processos logísticos.*

Essa experiência reforçou minha capacidade de liderar times sob pressão, alinhar operações a metas estratégicas e transformar dados em ações concretas – habilidades que aplico hoje em projetos de engenharia e análise de dados."
          </>,
          <>
            "Redução de 22% nos custos logísticos através de readequação de rotas"
          </>,
                    <>
            "Criação de sistema de alertas para manutenção preventiva de veículos"
          </>,

        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Experiência Acadêmica",
    institutions: [
      {
        name: "UniversitUniversidade São Judas Tadeu",
        description: <>Engenharia de Computação</>,
      },
      {
        name: "instituto Federal de São paulo - IFSP",
        description: <>Engenharia Eletrônica</>,
      },
            {
        name: "Universidade Federal do ABC - UFABC",
        description: <>Bacharelado em Ciência e Tecnologia BC&T, Engenharia de Energia, Engenharia de Controle e Automação</>,
      },

    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas ",
    skills: [
      {
        title: "AWS DevOPs",
        description: <>certificação AWS Certified Cloud</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/AWS.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/AWS_Cloud-Practitioner.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Inglês",
        description: <>Certificação English Level 1 IFSP</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/certificado.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Social",
  title: "Vida Pessoal e Objetivos ",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Trabalho",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Galleria de Imagens",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
