# Plan: Portfolio Update — José Daniel Monge Varela

## Goal
Transform the current "Gen/WEBFORGE" branded portfolio into a personal brand portfolio for **José Daniel Monge Varela**, accurately reflecting his professional profile as a Fullstack .NET Developer and AI Integration Specialist.

## Current State
- **Project**: Astro 5 + React 19 + TailwindCSS 4 landing page
- **i18n**: Spanish (es) and English (en)
- **Branding**: Generic "Gen" / "WEBFORGE"
- **Issues**: Wrong tech stack on Mega Hits project, missing .NET/C# focus, no experience/education sections, generic branding

## Changes by File

### 1. `src/i18n/es.json` + `src/i18n/en.json`
**Action**: Rewrite both files with updated content.

New keys to add:
- `hero.title` → "Desarrollador Fullstack .NET | Especialista en Integración de IA"
- `hero.subtitle` → Updated value proposition
- `terminal.text` → Updated typewriter text
- `about.*` → New section (replaces philosophy) with professional profile
- `cases.*` → Fix Mega Hits tech stack, add coordination case, move Bestiarios to "other"
- `experience.*` → New section with professional timeline
- `ai.*` → New section about AI integration expertise
- `education.*` → New section with academic background
- `stack.*` → Updated with categorized technologies
- `seo.*` → Updated with personal brand
- `footer.copyright` → Updated name
- `contact.*` → Updated with real contact info (email, phone)

### 2. `src/components/Header.astro`
**Action**: Replace "Gen" with "JDMV" or initials as logo text.

### 3. `src/layouts/BaseLayout.astro`
**Action**: Update JSON-LD Person schema, og:site_name, and meta tags with real name and job title.

### 4. `src/components/sections/HeroSection.astro`
**Action**: No structural changes needed — content comes from i18n.

### 5. `src/components/sections/PhilosophySection.astro` → Rename to `AboutSection.astro`
**Action**: Transform into a professional profile/about section with structured content (profile summary, key strengths).

### 6. `src/components/sections/TechStackSection.astro`
**Action**: Reorganize technologies into categories:
- Backend: C#, ASP.NET MVC/Web API, .NET 6+, Python, FastAPI
- Data: SQL Server, ADO.NET, Supabase
- Frontend: JavaScript, TypeScript, React, Astro, HTML/CSS
- AI & Tools: GitHub Copilot, Claude Code, OpenCode, Multi-Agent
- DevOps: Git, Docker, CI/CD, Azure DevOps
- Infrastructure: Linux, SSL, CCNA

### 7. `src/components/sections/CaseStudiesSection.astro`
**Action**: Update cases array to reflect corrected projects:
1. Mega Hits Discomóvil (C#/ASP.NET MVC/SQL Server/ADO.NET)
2. AI Multi-Agent Orchestration (keep, rename)
3. Technical Coordination & Agile (new)
- Move Bestiarios to a smaller "Other projects" subsection

### 8. `src/components/sections/Footer.astro`
**Action**: Update copyright name, update GitHub/LinkedIn links with real URLs.

### 9. `src/components/sections/ContactSection.astro`
**Action**: Update contact links with real email (jdmongevarela@gmail.com) and phone (+506 8555-2005).

### 10. NEW: `src/components/sections/ExperienceSection.astro`
**Action**: Create timeline-style section showing:
- Fullstack .NET Developer — Mega Hits (2023–Present)
- Technical Coordinator — Remote Agile Projects (2023–Present)
- Infrastructure & Automation — Technical Projects (2023–Present)

### 11. NEW: `src/components/sections/AISection.astro`
**Action**: Create section highlighting AI integration expertise:
- Multi-agent architectures
- AI-augmented development workflows
- LLM API integration (OpenAI, Claude)
- Tools: Claude Code, OpenCode, GitHub Copilot, Cursor, Warp

### 12. NEW: `src/components/sections/EducationSection.astro`
**Action**: Create section with:
- Bachillerato en Ingeniería Informática — Universidad Castro Carazo
- CCNA 2 — Cisco Networking
- Continuous learning (Udemy, self-taught)
- GitHub Student Developer Pack

### 13. `src/pages/es/index.astro` + `src/pages/en/index.astro`
**Action**: Add imports and render new sections in correct order:
1. Header
2. HeroSection
3. AboutSection (was PhilosophySection)
4. TechStackSection
5. CaseStudiesSection
6. ExperienceSection (NEW)
7. AISection (NEW)
8. SecuritySection
9. EducationSection (NEW)
10. ContactSection
11. Footer

## Section Order (Final)
```
Header → Hero → About → Tech Stack → Projects → Experience → AI & Automation → Security → Education → Contact → Footer
```

## Design Guidelines
- Maintain existing monochrome/minimal aesthetic
- Use CSS variables for theming (--color-bg, --color-text, etc.)
- Follow existing Tailwind patterns
- New sections should match existing card/border styles
- Experience timeline: vertical line with dots, clean and minimal
- Education: compact cards or list format

## Verification
- Run `npm run build` to ensure no Astro build errors
- Run `npm run dev` to visually verify both /es/ and /en/ routes
- Check i18n keys are consistent across both languages
- Verify all internal links work
- Confirm responsive layout on mobile
