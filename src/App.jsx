
import { useEffect, useState } from 'react'

const projects = [
  {
    title: 'Sistema de Gestão de Frotas',
    eyebrow: 'Gestão operacional',
    description:
      'Sistema para centralizar veículos, condutores, abastecimentos, manutenções e informações operacionais da frota.',
    tags: ['Veículos', 'Abastecimentos', 'Manutenção', 'Controle operacional'],
    href: 'https://esmerarse.desenvolvimento-daya.chatgpt.site/demos/frotas/',
    mark: 'GF',
    brand: 'Gestão de Frotas',
    subtitle: 'Sistema operacional',
    variant: 'frotas',
  },
  {
    title: 'Sistema para Floricultura',
    eyebrow: 'Gestão para floriculturas',
    description:
      'Aplicação para organizar vendas, clientes, estoque, catálogo, pedidos e entregas, com foco na rotina da floricultura.',
    tags: ['Vendas', 'Estoque', 'Clientes', 'Pedidos e entregas'],
    href: 'https://esmerarse.desenvolvimento-daya.chatgpt.site/demos/floricultura/',
    mark: 'E',
    brand: 'ESMERARSE',
    subtitle: 'Gestão floral',
    variant: 'esmerarse',
  },
  {
    title: 'Operatto',
    eyebrow: 'Gestão para restaurantes',
    description:
      'Sistema de gestão para restaurantes com pedidos, mesas, cozinha, delivery, caixa, estoque, financeiro e indicadores.',
    tags: ['Pedidos', 'Mesas', 'Delivery', 'Caixa e estoque'],
    href: 'https://esmerarse.desenvolvimento-daya.chatgpt.site/demos/operatto/',
    mark: 'S',
    brand: 'OPERATTO',
    subtitle: 'Gestão para restaurantes',
    variant: 'operatto',
  },
]

const technologies = [
  {
    group: 'Base web & scripts',
    items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PowerShell'],
  },
  {
    group: 'Front-end & Web',
    items: ['React', 'Next.js', 'Vite'],
  },
  {
    group: 'Back-end & Runtime',
    items: ['Node.js', 'npm', 'npx'],
  },
  {
    group: 'Desktop & Containers',
    items: ['Electron', 'Docker', 'Docker Compose'],
  },
  {
    group: 'Deploy & Infraestrutura',
    items: ['Vercel', 'Vercel CLI', 'DNS', 'Registro.br'],
  },
  {
    group: 'Ferramentas',
    items: ['Visual Studio Code', 'Docker Desktop'],
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5M19 5l-8 8M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

function ProjectVisual({ project }) {
  return (
    <div className={`project-visual project-visual--${project.variant}`}>
      <div className="project-mark">{project.mark}</div>
      <div className="project-visual-copy">
        <strong>{project.brand}</strong>
        <span>{project.subtitle}</span>
        {project.variant === 'operatto' ? <small>by ESMERARSE</small> : null}
      </div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [photoAvailable, setPhotoAvailable] = useState(true)

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 820) setMenuOpen(false)
    }

    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Dayane Ferreira - início">
          <span className="brand-mark">DF</span>
          <span className="brand-copy">
            <strong>Dayane Ferreira</strong>
            <small>Engenharia de Software</small>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navegação principal">
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#esmerarse" onClick={closeMenu}>Esmerarse</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#tecnologias" onClick={closeMenu}>Tecnologias</a>
          <a href="#contato" className="nav-cta" onClick={closeMenu}>Contato</a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-grid">
        <div className="hero-content">
  <p className="hero-intro">
    <span className="hero-intro__name">Dayane Ferreira</span>
    <span className="hero-intro__divider"></span>
    <span>Estudante de Engenharia de Software</span>
  </p>

  <h1 className="hero-quote">
    Não quero apenas acompanhar a tecnologia. Quero estar entre quem a constrói.
  </h1>

  <p className="hero-role">
    Estudante de Engenharia de Software e desenvolvedora em formação de sites e sistemas.
  </p>

  <div className="hero-actions">
    <a className="button button--gold" href="#projetos">
      Ver meus projetos <ArrowIcon />
    </a>
    <a className="button button--ghost" href="#esmerarse">
      Conhecer a Esmerarse
    </a>
  </div>
</div>

            <div className="hero-visual" aria-label="Foto profissional de Dayane Ferreira">
              <div className="portrait-frame">
                {photoAvailable ? (
                  <img
                    className="portrait-photo"
                    src="/dayane.jpg"
                    alt="Dayane Ferreira"
                    onError={() => setPhotoAvailable(false)}
                  />
                ) : (
                  <div className="portrait-placeholder">
                    <span className="portrait-initials">DF</span>
                    <small>Adicione sua foto em<br />public/dayane.jpg</small>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="section-heading">
            <p className="eyebrow">Sobre mim</p>
            <h2>Construindo minha trajetória em tecnologia.</h2>
          </div>

          <div className="about-grid">
            <div className="about-lead">
              <p>
                Sou <strong>Dayane Ferreira</strong>, estudante do 2º período de Engenharia
                de Software na UNINTER.
              </p>
            </div>

            <div className="about-copy">
              <p>
                Desenvolvo sites e sistemas utilizando HTML, CSS, JavaScript, React e Node.js,
                além de trabalhar com Docker, PowerShell e Visual Studio Code.
              </p>

              <p>
                Meu aprendizado é orientado principalmente pela prática. Procuro transformar
                conhecimentos adquiridos durante a formação em projetos reais, explorando
                diferentes tipos de sistemas, interfaces e necessidades de negócio.
              </p>

              <p>
                Busco oportunidades de estágio ou atuação como desenvolvedora júnior, nas quais
                eu possa aplicar meus conhecimentos, aprender com profissionais experientes e
                continuar evoluindo. Também estou disponível para projetos freelancer.
              </p>
            </div>
          </div>

          <div className="principles">
            <article>
              <h3>Aprender</h3>
              <p>Estudo contínuo para ampliar minha base técnica e compreender novas possibilidades.</p>
            </article>
            <article>
              <h3>Construir</h3>
              <p>Transformo teoria em interfaces, sistemas e experiências que possam ser testadas.</p>
            </article>
            <article>
              <h3>Evoluir</h3>
              <p>Cada projeto registra uma etapa diferente da minha formação como desenvolvedora.</p>
            </article>
          </div>
        </section>

        <section className="section esmerarse" id="esmerarse">
          <div className="esmerarse-panel">
            <div className="esmerarse-topline">
              <p className="eyebrow">Projeto autoral</p>
              <span className="project-status">Em desenvolvimento</span>
            </div>

            <div className="esmerarse-grid">
              <div>
                <p className="esmerarse-kicker">ESMERARSE</p>
                <h2>Onde aprendizado se transforma em soluções digitais.</h2>
              </div>

              <div className="esmerarse-copy">
                <p>
                  A <strong>Esmerarse</strong> é um projeto autoral em desenvolvimento criado
                  para reunir soluções digitais desenvolvidas por mim e transformar aprendizado
                  técnico em aplicações práticas.
                </p>

                <p>
                  É dentro da Esmerarse que experimento conceitos, desenvolvo sistemas, estudo
                  diferentes necessidades de negócio e aperfeiçoo minhas habilidades em
                  desenvolvimento de software.
                </p>

                <a className="text-link" href="#projetos">
                  Conhecer os sistemas <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects" id="projetos">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Projetos</p>
              <h2>Sistemas desenvolvidos dentro da Esmerarse.</h2>
            </div>
            <p className="section-intro">
              Cada projeto representa uma necessidade diferente e uma etapa da minha evolução
              técnica. As demonstrações utilizam dados fictícios.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <ProjectVisual project={project} />

                <div className="project-main">
                  <p className="project-eyebrow">{project.eyebrow}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir demonstração de ${project.title}`}
                >
                  <span>Abrir demonstração</span>
                  <ExternalIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section technologies" id="tecnologias">
          <div className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Tecnologias e ferramentas</p>
              <h2>O que já utilizo na prática.</h2>
            </div>
            <p className="section-intro">
              Tecnologias, plataformas e ferramentas que já fazem parte do meu processo de
              desenvolvimento, execução, publicação e manutenção de projetos.
            </p>
          </div>

          <div className="tech-grid">
            {technologies.map((technology) => (
              <article className="tech-card" key={technology.group}>
                <p>{technology.group}</p>
                <div>
                  {technology.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section ai-section">
          <div className="ai-grid">
            <div>
              <p className="eyebrow">Inteligência artificial</p>
              <h2>IA como ferramenta de apoio ao desenvolvimento.</h2>
            </div>

            <div className="ai-copy">
              <p>
                Tenho interesse especial em inteligência artificial aplicada ao desenvolvimento
                e utilizo essa tecnologia como apoio no planejamento, na construção, na revisão
                e no aprimoramento dos meus projetos.
              </p>

              <p>
                O objetivo é utilizá-la como ferramenta de pesquisa, análise e apoio à resolução
                de problemas, sem substituir a construção do conhecimento técnico necessário
                para compreender e desenvolver as soluções.
              </p>
            </div>
          </div>
        </section>

        <section className="section evolution">
          <div className="evolution-quote">
            <blockquote>
              Este portfólio não representa um ponto de chegada. Ele registra o processo.
            </blockquote>
          </div>

          <div className="evolution-copy">
            <p className="eyebrow">Evolução</p>
            <h2>Desenvolvimento também é processo.</h2>
            <p>
              Minha formação profissional ainda está em construção. Por isso, cada projeto
              apresentado aqui registra novos desafios, decisões, correções e conhecimentos
              adquiridos. A proposta é que este portfólio evolua junto comigo.
            </p>
          </div>
        </section>

        <section className="section contact" id="contato">
          <div className="contact-panel">
            <p className="eyebrow">Contato</p>
            <h2>Vamos construir algo?</h2>
            <p>
              Estou aberta a oportunidades de estágio, atuação como desenvolvedora júnior e
              projetos freelancer.
            </p>

            <div className="contact-actions">
              <a
                className="button button--gold"
                href="https://wa.me/5581998584084"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp <ArrowIcon />
              </a>

              <a
                className="button button--ghost"
                href="mailto:desenvolvimento.dayaneferreira@gmail.com"
              >
                E-mail
              </a>

              <a
                className="button button--ghost"
                href="https://www.linkedin.com/in/dayane-ferreira-6a4960407/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ExternalIcon />
              </a>
            </div>

            <div className="contact-details">
              <div>
                <small>E-mail</small>
                <a href="mailto:desenvolvimento.dayaneferreira@gmail.com">
                  desenvolvimento.dayaneferreira@gmail.com
                </a>
              </div>
              <div>
                <small>WhatsApp</small>
                <a href="https://wa.me/5581998584084" target="_blank" rel="noreferrer">
                  (81) 99858-4084
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Dayane Ferreira</strong>
          <span>Engenharia de Software · Desenvolvimento</span>
        </div>

        <div className="footer-center">
          <span>Portfólio hospedado em kai.api.br</span>
          <span>ESMERARSE · projeto autoral</span>
        </div>

        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </div>
  )
}
