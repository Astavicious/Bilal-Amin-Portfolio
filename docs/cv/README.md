# Editable CV

`Bilal-Amin-CV.tex` uses the LaTeX template from the supplied CV ZIP. Unaffected descriptions, older project dates, coursework, and skills were reconciled with the supplied two-page PDF rather than the differing ZIP content. Both original input files remain untouched.

Updates include present-tense current roles, a short introductory profile, the completed Dafny prototype, and the confirmed email address. Older experience and projects are preserved. The new project adds Dafny and Codex SDK to the skills; its experiment result is described as a small comparison, not evidence of general prompt superiority.

The layout remains two pages. Page-two bullets use a compact 9-point font to fit the additional project without dropping existing content.

## Build from the repository root

Requires a LaTeX distribution with pdfLaTeX and the packages declared in the source. For PowerShell:

```powershell
New-Item -ItemType Directory -Path .cv-build -Force | Out-Null
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=.cv-build docs/cv/Bilal-Amin-CV.tex
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=.cv-build docs/cv/Bilal-Amin-CV.tex
Copy-Item .cv-build/Bilal-Amin-CV.pdf public/Bilal-Amin-CV.pdf
```

Render and visually inspect both pages after editing. The portfolio's existing `/Bilal-Amin-CV.pdf` URL serves the resulting PDF.
