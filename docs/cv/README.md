# Editable CV

`Bilal-Amin-CV.tex` now follows the latest source from the connected Overleaf project. The newer quantified experience and project descriptions were preserved. A private backup of the pre-update Overleaf source is in `.cv-build/overleaf-original.tex` and is excluded from Git.

Updates include present-tense current roles, a short introductory profile, the completed Dafny prototype, and the confirmed email address. Older experience and projects are preserved. The new project adds Dafny and Codex SDK to the skills; its experiment result is described as a small comparison, not evidence of general prompt superiority.

The October hackathon update puts Musedots RFQ Agent first, including sixth place in the private evaluation and selection among the top seven teams for the finale pitch meeting. The four main projects are Musedots, Dafny, GermanLyft, and the RAG assistant. Older projects remain in a compact additional-projects line, retaining the newer Overleaf dates. Coursework and skills are shorter; the Google certificate is labeled in progress to match the portfolio. Playwright and LLM tool calling are included. Latin Modern provides scalable fonts and correct umlaut extraction. The CV remains two pages with 10-point body text.

## Build from the repository root

Requires a LaTeX distribution with pdfLaTeX and the packages declared in the source. For PowerShell:

```powershell
New-Item -ItemType Directory -Path .cv-build -Force | Out-Null
pdflatex '-interaction=nonstopmode' '-halt-on-error' '-output-directory=.cv-build' 'docs/cv/Bilal-Amin-CV.tex'
pdflatex '-interaction=nonstopmode' '-halt-on-error' '-output-directory=.cv-build' 'docs/cv/Bilal-Amin-CV.tex'
Copy-Item .cv-build/Bilal-Amin-CV.pdf public/Bilal-Amin-CV.pdf
```

Render and visually inspect both pages after editing. The portfolio's existing `/Bilal-Amin-CV.pdf` URL serves the resulting PDF.
