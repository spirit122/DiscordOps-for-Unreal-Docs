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
    id: "quick-start",
    label: "Quick Start",
    eyebrow: "Start Fast",
    title: "Ship the first test report in minutes",
    description: "The shortest path from install to a real Discord post. Ideal for buyers who want value immediately after installing the plugin.",
    file: "quick-start-webhook.md"
  },
  {
    id: "installation",
    label: "Installation",
    eyebrow: "Setup",
    title: "Drop-in Unreal plugin install flow",
    description: "Project plugin installation, minimal configuration, bot-mode notes, and security guidance for local secrets.",
    file: "installation-guide.md"
  },
  {
    id: "settings",
    label: "Settings",
    eyebrow: "Reference",
    title: "Every shipping setting in one place",
    description: "Transport, destinations, privacy, crash automation, and runtime/editor settings with defaults and recommended usage.",
    file: "settings-reference.md"
  },
  {
    id: "blueprint",
    label: "Blueprint Workflow",
    eyebrow: "Blueprint",
    title: "Use it without building your own UI first",
    description: "Recommended report flows, reusable runtime widget guidance, and the public node surface for the v1 release.",
    file: "blueprint-workflow.md"
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
    eyebrow: "Support",
    title: "Clear fixes for the most common setup issues",
    description: "Invalid webhooks, missing permissions, screenshot limitations, thread requirements, and runtime troubleshooting.",
    file: "troubleshooting.md"
  },
  {
    id: "validation",
    label: "Validation",
    eyebrow: "QA",
    title: "Launch checklist and validation matrix",
    description: "Technical coverage, manual launch helpers, commercial checks, and final Fab launch gating.",
    file: "validation-checklist.md"
  },
  {
    id: "packaging",
    label: "Packaging",
    eyebrow: "Fab Ready",
    title: "Package it cleanly for review",
    description: "What belongs in the final zip, what stays out, and the practical limits that matter while preparing your listing.",
    file: "packaging-checklist.md"
  }
];

const overviewCards = [
  {
    title: "Editor + Runtime",
    value: "One workflow, both contexts",
    body: "Validate, preview, and send reports from the editor or from a live build without depending on editor-only features."
  },
  {
    title: "Webhook-First",
    value: "Fastest path to value",
    body: "Most teams can go from install to first Discord message in minutes, with bot mode left as an optional advanced path."
  },
  {
    title: "Launch-Ready QA",
    value: "Templates, destinations, history",
    body: "Preset routing, report templates, live validation, replay, metadata, logs, screenshots, and report IDs are already built in."
  },
  {
    title: "Fab-Focused",
    value: "Win64 validated release",
    body: "The current launch shape is optimized for a clean, believable Fab listing instead of a bloated pre-roadmap promise set."
  }
];

const featureCards = [
  {
    tag: "Why teams buy it",
    title: "Discord becomes a real QA intake surface",
    body: "Reports arrive with evidence, context, routing, and cleaner formatting instead of loose chat messages that lose signal."
  },
  {
    tag: "Why setup feels light",
    title: "A guided path instead of a code-first integration",
    body: "Quick setup, validation tools, templates, and preset destinations keep the first-use experience approachable for non-programmers."
  },
  {
    tag: "Why the docs matter",
    title: "This site mirrors the actual release workflow",
    body: "Install, validate, route, ship. Every section here is organized around the exact flow that gets the plugin working in a real project."
  }
];

const workflowSteps = [
  {
    step: "01",
    title: "Install the plugin",
    body: "Drop DiscordOps into your project's Plugins folder and open the .uproject."
  },
  {
    step: "02",
    title: "Configure a real webhook",
    body: "Use Project Settings and the editor panel quick setup to store a local webhook without digging through code."
  },
  {
    step: "03",
    title: "Validate before you trust it",
    body: "Run Validate Setup and Live Validate to confirm formatting, reachability, and permission errors before QA depends on it."
  },
  {
    step: "04",
    title: "Send reports with evidence",
    body: "Push bug reports, QA reports, log snippets, screenshots, report IDs, and metadata straight to Discord."
  }
];

const footerLinks = [
  {
    label: "Jump to Quick Start",
    href: "#quick-start",
    kind: "primary"
  },
  {
    label: "Open Troubleshooting",
    href: "#troubleshooting",
    kind: "ghost"
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
        rootMargin: "-24% 0px -52% 0px",
        threshold: [0.15, 0.32, 0.5, 0.72]
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
    <section id=${doc.id} className="section-block">
      <div className="section-block__header">
        <span className="eyebrow">${doc.eyebrow}</span>
        <h2>${doc.title}</h2>
        <p>${doc.description}</p>
      </div>
      <div className="section-block__body">
        ${loading && html`<div className="loading-state">Loading ${doc.label}...</div>`}
        ${error && html`<div className="error-state">Could not load ${doc.label}: ${error}</div>`}
        ${!loading &&
        !error &&
        html`<div className="doc-body" dangerouslySetInnerHTML=${{ __html: rendered }}></div>`}
      </div>
    </section>
  `;
}

function OverviewSection() {
  return html`
    <section id="overview" className="hero">
      <div className="hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">DiscordOps Docs</span>
          <h1 className="hero__title">
            Build faster QA flows.
            <span>Ship cleaner Discord reporting.</span>
          </h1>
          <p className="hero__lead">
            This documentation site is built to feel like the product itself: bold, direct, and fast to use. Get from installation to a real Discord report without hunting through flat pages or weak navigation.
          </p>
          <div className="hero__pills">
            <span className="hero__pill">Blueprint-first setup</span>
            <span className="hero__pill">Editor + Runtime</span>
            <span className="hero__pill">Webhook-first launch path</span>
            <span className="hero__pill">Fab-ready packaging guidance</span>
          </div>
          <div className="hero__actions">
            <a className="primary-button" href="#quick-start">Open Quick Start</a>
            <a className="ghost-button" href="#validation">See launch checks</a>
          </div>
          <div className="status-strip">
            <span className="status-pill">Win64 launch path documented</span>
            <span className="status-pill">Sidebar navigation always visible</span>
            <span className="status-pill">React-driven single-page docs</span>
          </div>
        </div>
        <div className="hero__panel">
          <h2>Documentation workflow</h2>
          <p>The idea is simple: the page should help someone get value quickly, then stay useful when they need deeper settings, validation, or launch guidance.</p>
          <div className="hero__list">
            ${workflowSteps.map(
              (item) => html`
                <div key=${item.step} className="hero__list-item">
                  <span className="hero__list-step">${item.step}</span>
                  <div className="hero__list-copy">
                    <strong>${item.title}</strong>
                    <span>${item.body}</span>
                  </div>
                </div>
              `
            )}
          </div>
        </div>
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
          return {
            id: doc.id,
            content,
            error: ""
          };
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
    <${React.Fragment}>
      <section className="cards-grid">
        ${overviewCards.map(
          (item) => html`
            <article key=${item.title} className="metric-card">
              <h3>${item.title}</h3>
              <strong>${item.value}</strong>
              <p>${item.body}</p>
            </article>
          `
        )}
      </section>
      <section className="feature-grid">
        ${featureCards.map(
          (item) => html`
            <article key=${item.title} className="feature-card">
              <span className="feature-card__tag">${item.tag}</span>
              <h3>${item.title}</h3>
              <p>${item.body}</p>
            </article>
          `
        )}
      </section>
      <section className="feature-grid">
        ${docsManifest.map(
          (doc) => html`
            <a key=${doc.id} className="doc-card" href=${`#${doc.id}`}>
              <span className="doc-card__tag">${doc.eyebrow}</span>
              <h3>${doc.label}</h3>
              <p>${doc.description}</p>
              <span className="doc-card__link">Jump to section</span>
            </a>
          `
        )}
      </section>
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
    <//>
  `;
}

function FooterPanel() {
  return html`
    <footer className="footer-panel">
      <div>
        <strong>Public docs, private product code.</strong>
        <p>
          This site is built only for documentation and onboarding. It is intentionally separate from the private plugin source so the release can stay protected while the docs remain easy to share.
        </p>
      </div>
      <div className="sidebar__actions">
        ${footerLinks.map((link) =>
          link.kind === "primary"
            ? html`<a key=${link.label} className="primary-button" href=${link.href}>${link.label}</a>`
            : html`<a key=${link.label} className="ghost-button" href=${link.href}>${link.label}</a>`
        )}
      </div>
    </footer>
  `;
}

function Sidebar({ activeSection, navOpen, onNavigate, onToggle }) {
  return html`
    <${React.Fragment}>
      <div className="mobile-bar">
        <a className="mobile-bar__brand" href="#overview" onClick=${onNavigate}>
          <span className="brand-mark">DO</span>
          <span className="brand-copy">
            <strong>DiscordOps Docs</strong>
            <span>React docs experience</span>
          </span>
        </a>
        <button className="menu-button" type="button" onClick=${onToggle} aria-expanded=${navOpen}>
          ${navOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div className=${`site-shell${navOpen ? " is-nav-open" : ""}`}>
        <aside className="sidebar" aria-label="Documentation navigation">
          <div className="sidebar__top">
            <a className="mobile-bar__brand" href="#overview" onClick=${onNavigate}>
              <span className="brand-mark">DO</span>
              <span className="brand-copy">
                <strong>DiscordOps for Unreal</strong>
                <span>Public docs only</span>
              </span>
            </a>
            <span className="eyebrow">Docs Portal</span>
            <div>
              <h1 className="sidebar__title">Launch-ready docs with faster navigation.</h1>
              <p className="sidebar__lead">
                Browse setup, workflow, validation, packaging, and support guidance from a fixed sidebar that stays useful anywhere on the page.
              </p>
            </div>
            <div className="sidebar__card">
              <h3>Quick signal</h3>
              <p>The site is focused on practical launch questions: install it, validate it, route reports, and ship it cleanly to Fab.</p>
              <div className="sidebar__meta">
                <div className="sidebar__meta-item">
                  <strong>Engine</strong>
                  <span>UE 5.7</span>
                </div>
                <div className="sidebar__meta-item">
                  <strong>Launch</strong>
                  <span>Win64 first</span>
                </div>
                <div className="sidebar__meta-item">
                  <strong>Docs</strong>
                  <span>Install to packaging</span>
                </div>
                <div className="sidebar__meta-item">
                  <strong>Flow</strong>
                  <span>Webhook-first</span>
                </div>
              </div>
            </div>
          </div>
          <nav className="sidebar__nav">
            <p className="sidebar__nav-label">Navigation</p>
            <a
              className=${`sidebar__link${activeSection === "overview" ? " is-active" : ""}`}
              href="#overview"
              onClick=${onNavigate}
            >
              <span className="sidebar__link-index">00</span>
              <span className="sidebar__link-copy">
                <strong>Overview</strong>
                <span>Impact, highlights, and workflow</span>
              </span>
            </a>
            ${docsManifest.map(
              (doc, index) => html`
                <a
                  key=${doc.id}
                  className=${`sidebar__link${activeSection === doc.id ? " is-active" : ""}`}
                  href=${`#${doc.id}`}
                  onClick=${onNavigate}
                >
                  <span className="sidebar__link-index">${String(index + 1).padStart(2, "0")}</span>
                  <span className="sidebar__link-copy">
                    <strong>${doc.label}</strong>
                    <span>${doc.eyebrow}</span>
                  </span>
                </a>
              `
            )}
          </nav>
          <div className="sidebar__cta">
            <h3>Best first route</h3>
            <p>If you only need one path, start with Quick Start, then jump to Troubleshooting if Live Validate reports a Discord-side issue.</p>
            <div className="sidebar__actions">
              <a className="primary-button" href="#quick-start" onClick=${onNavigate}>Start here</a>
              <a className="ghost-button" href="#troubleshooting" onClick=${onNavigate}>Fix issues</a>
            </div>
          </div>
        </aside>
        <main className="content">
          <${OverviewSection} />
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
    const onHashChange = () => {
      setNavOpen(false);
    };

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
