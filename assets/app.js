import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import htm from "https://esm.sh/htm@3.1.1";
import { marked } from "https://esm.sh/marked@15.0.6";

const html = htm.bind(React.createElement);

marked.setOptions({
  gfm: true,
  breaks: true
});

const docsManifest = [
  {
    id: "installation",
    label: "Installation",
    summary: "Install from Fab or source, enable the plugin, and open DiscordOps in Unreal.",
    file: "installation-guide.md"
  },
  {
    id: "usage",
    label: "Usage",
    summary: "Configure a route, validate it, and send a focused report with the compact panel workflow.",
    file: "quick-start-webhook.md"
  },
  {
    id: "settings",
    label: "Settings",
    summary: "Only the settings that matter most for setup, route validation, and everyday reporting.",
    file: "settings-reference.md"
  }
];

const summaryCards = [
  {
    title: "Installation first",
    body: "Keep the setup path simple: install the plugin, enable it, and open the panel in Unreal."
  },
  {
    title: "Usage that matters",
    body: "The usage guide is centered on the compact workflow: route setup, validation, report fields, and custom destinations."
  },
  {
    title: "Essential settings only",
    body: "Settings Reference now keeps only the options most teams need for setup and daily reporting."
  }
];

const routeSteps = [
  {
    step: "1",
    title: "Installation",
    body: "Start by installing the plugin and confirming that Window > DiscordOps is available."
  },
  {
    step: "2",
    title: "Usage",
    body: "Configure the route, validate it, and send your first report with the compact panel."
  },
  {
    step: "3",
    title: "Settings",
    body: "Keep only the important settings in mind once the base workflow is already working."
  }
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const scrollable = root.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0;
      setProgress(nextProgress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.15, 0.3, 0.5, 0.7]
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

function MarkdownSection({ doc, content, loading, error }) {
  const rendered = useMemo(() => {
    if (!content) {
      return "";
    }

    return marked.parse(content);
  }, [content]);

  return html`
    <section id=${doc.id} className="doc-section">
      <div className="doc-section__intro">
        <span className="section-kicker">${doc.label}</span>
        <h2>${doc.label}</h2>
        <p>${doc.summary}</p>
      </div>
      <div className="doc-section__body">
        ${loading && html`<div className="message-box">Loading ${doc.label}...</div>`}
        ${error && html`<div className="message-box message-box--error">Could not load ${doc.label}: ${error}</div>`}
        ${!loading &&
        !error &&
        html`<div className="doc-body" dangerouslySetInnerHTML=${{ __html: rendered }}></div>`}
      </div>
    </section>
  `;
}

function HeroSection() {
  return html`
    <section id="overview" className="hero">
      <span className="hero__eyebrow">DiscordOps Documentation</span>
      <h1>
        DiscordOps docs
        <span>focused on what matters.</span>
      </h1>
      <p className="hero__lead">
        Use this site to install DiscordOps, understand the compact panel workflow, and keep only the settings that matter for real usage.
      </p>
      <div className="hero__actions">
        <a className="button button--primary" href="#installation">Open Installation</a>
        <a className="button button--ghost" href="#usage">Open Usage</a>
      </div>
      <div className="hero__tags">
        <span>Installation</span>
        <span>Usage</span>
        <span>Essential settings</span>
        <span>Compact workflow</span>
      </div>
    </section>
  `;
}

function SummarySection() {
  return html`
    <section className="summary-grid">
      ${summaryCards.map(
        (item) => html`
          <article key=${item.title} className="summary-card">
            <h3>${item.title}</h3>
            <p>${item.body}</p>
          </article>
        `
      )}
    </section>
  `;
}

function RouteSection() {
  return html`
    <section className="route-panel">
      <div className="route-panel__header">
        <span className="section-kicker">Recommended Reading Order</span>
        <h2>A simple path through the documentation</h2>
        <p>Start with the shortest route, then expand only when you need more depth.</p>
      </div>
      <div className="route-panel__steps">
        ${routeSteps.map(
          (item) => html`
            <article key=${item.step} className="route-step">
              <span className="route-step__label">${item.step}</span>
              <strong>${item.title}</strong>
              <p>${item.body}</p>
            </article>
          `
        )}
      </div>
    </section>
  `;
}

function DocsSections() {
  const [docs, setDocs] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      docsManifest.map(async (doc) => {
        try {
          const response = await fetch(`./${doc.file}`);

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
          }

          const content = await response.text();
          return { id: doc.id, content, error: "" };
        } catch (error) {
          return {
            id: doc.id,
            content: "",
            error: error instanceof Error ? error.message : "Unexpected error"
          };
        }
      })
    ).then((results) => {
      if (cancelled) {
        return;
      }

      const nextDocs = {};
      const nextErrors = {};

      results.forEach((item) => {
        nextDocs[item.id] = item.content;
        nextErrors[item.id] = item.error;
      });

      setDocs(nextDocs);
      setErrors(nextErrors);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return html`
    <section className="docs-stack">
      ${docsManifest.map(
        (doc) => html`
          <${MarkdownSection}
            key=${doc.id}
            doc=${doc}
            content=${docs[doc.id] || ""}
            loading=${!Object.prototype.hasOwnProperty.call(docs, doc.id)}
            error=${errors[doc.id] || ""}
          />
        `
      )}
    </section>
  `;
}

function FooterPanel() {
  return html`
    <footer className="footer-panel">
      <div>
        <strong>Public documentation, private product code.</strong>
        <p>This site is intentionally focused on onboarding and release guidance. The plugin source stays separate and protected.</p>
      </div>
      <a className="button button--ghost" href="#overview">Back to top</a>
    </footer>
  `;
}

function Sidebar({ activeSection, navOpen, onNavigate, onToggle }) {
  return html`
    <${React.Fragment}>
      <div className="mobile-bar">
        <a className="mobile-bar__brand" href="#overview" onClick=${onNavigate}>
          <span className="brand-mark">DO</span>
          <span>
            <strong>DiscordOps Docs</strong>
            <small>Clean navigation</small>
          </span>
        </a>
        <button className="menu-button" type="button" onClick=${onToggle} aria-expanded=${navOpen}>
          ${navOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className=${`page-shell${navOpen ? " is-nav-open" : ""}`}>
        <aside className="sidebar">
          <a className="sidebar__brand" href="#overview" onClick=${onNavigate}>
            <span className="brand-mark">DO</span>
            <span>
              <strong>DiscordOps for Unreal</strong>
              <small>Documentation portal</small>
            </span>
          </a>

          <p className="sidebar__intro">
            Everything here is organized around one goal: getting DiscordOps working quickly and using it well inside Unreal.
          </p>

          <div className="sidebar__badges">
            <span>UE 5.7</span>
            <span>Win64 first</span>
            <span>React docs</span>
          </div>

          <nav className="sidebar__nav">
            <a
              className=${`sidebar__link${activeSection === "overview" ? " is-active" : ""}`}
              href="#overview"
              onClick=${onNavigate}
            >
              <strong>Overview</strong>
              <span>Start here</span>
            </a>
            ${docsManifest.map(
              (doc) => html`
                <a
                  key=${doc.id}
                  className=${`sidebar__link${activeSection === doc.id ? " is-active" : ""}`}
                  href=${`#${doc.id}`}
                  onClick=${onNavigate}
                >
                  <strong>${doc.label}</strong>
                  <span>${doc.summary}</span>
                </a>
              `
            )}
          </nav>

          <div className="sidebar__hint">
            <strong>Best first move</strong>
            <p>Open Quick Start first. Use Troubleshooting only when a real validation or delivery issue appears.</p>
          </div>
        </aside>

        <main className="content">
          <${HeroSection} />
          <${SummarySection} />
          <${RouteSection} />
          <${DocsSections} />
          <${FooterPanel} />
        </main>
      </div>

      <div className="sidebar-overlay" onClick=${onNavigate}></div>
    <//>
  `;
}

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const progress = useScrollProgress();
  const sectionIds = useMemo(() => ["overview", ...docsManifest.map((doc) => doc.id)], []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    document.documentElement.style.setProperty("--progress", `${progress}%`);
  }, [progress]);

  useEffect(() => {
    const onHashChange = () => setNavOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const handleToggle = () => setNavOpen((current) => !current);
  const handleNavigate = () => setNavOpen(false);

  return html`
    <${React.Fragment}>
      <div className="progress-bar"></div>
      <${Sidebar}
        activeSection=${activeSection}
        navOpen=${navOpen}
        onNavigate=${handleNavigate}
        onToggle=${handleToggle}
      />
    <//>
  `;
}

createRoot(document.getElementById("root")).render(html`<${App} />`);
