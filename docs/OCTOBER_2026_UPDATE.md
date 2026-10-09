# October 2026 update and validation

Prepared October 10, 2026. Portfolio and profile changes are local on `update/october-2026-profile`; they have not been pushed, merged, or deployed. Account bio, repository descriptions, and pins remain suggestions.

## Delivered changes

The portfolio retains its existing design and all five previous project cards and four previous experience cards. Two current HiWi roles are added before MPI, with present-tense research responsibilities and updated hero/About text. The confirmed email is `write2bilalamin@gmail.com`; the bachelor’s dates are September 2019–September 2023. Canonical and portfolio URLs use the supplied Vercel address.

The CV remains two pages, with editable LaTeX and the replacement PDF at the existing download URL. Unaffected content was reconciled with the supplied PDF, including older dates and descriptions that differed in the ZIP. Dafny and Codex SDK are added on the basis of the completed prototype.

The Dafny case study documents the implemented pipeline, three scenarios, saved August 31 batch, human semantic review, and limitations. Two images were exported directly from slides 4 and 7 of the supplied presentation. Text equivalents accompany the images. The comparison shows a tie, with no claim of general prompt superiority.

The GitHub README follows the reference profile's introduction, selected-project table, grouped skills, and contact links, using Bilal's own information. `PROFILE_SETTINGS.md` contains proposed bio, repository descriptions, and pins.

## File inventory

Paths below are relative to their respective checkouts.

| Portfolio file | Change |
| --- | --- |
| `.gitignore` | Ignore local CV compiler artifacts. |
| `astro.config.mjs` | Set the confirmed site URL. |
| `src/config/index.ts` | Update roles, hero, About, skills, email, canonical URL; add Dafny card; link GermanLyft directly to its repository. |
| `src/types/index.ts` | Add optional `linkCaseStudy` to project cards. |
| `src/components/Projects.astro` | Render the optional internal case-study link. |
| `src/components/ContactForm.astro` | Correct the success redirect and add a direct email alternative while preserving the existing form. |
| `src/layouts/Layout.astro` | Share styles between pages; accept page title/description; generate route-specific canonical/social metadata; point subpage navigation to homepage sections. |
| `src/pages/index.astro` | Move the global stylesheet import into the shared layout; formatting only otherwise. |
| `src/pages/projects/verified-dafny.astro` | Add the evidenced project case study. |
| `public/dafny-pipeline.png` | Exported pipeline slide. |
| `public/dafny-repair.png` | Exported repair slide. |
| `public/Bilal-Amin-CV.pdf` | Replace outdated CV. |
| `docs/cv/Bilal-Amin-CV.tex` | Editable reconciled CV source. |
| `docs/cv/README.md` | Source provenance, layout notes, and rebuild commands. |
| `docs/OCTOBER_2026_UPDATE.md` | This handoff and validation record. |

| Profile file | Change |
| --- | --- |
| `README.md` | Replace the long profile with the concise reference-inspired structure. |
| `PROFILE_SETTINGS.md` | Reviewable account and repository text suggestions. |

## Validation

- `pnpm install --frozen-lockfile` succeeded without changing the lockfile.
- `pnpm build` succeeded: Astro reported zero errors, warnings, and hints; both routes were generated. Node emitted an upstream `module.register()` deprecation notice.
- Chromium checks passed at 1440×1000 and 390×844: experience ordering, all previous entries, internal case-study link, route metadata, homepage navigation from the subpage, mobile menu, no horizontal page overflow, valid images, no page JavaScript errors, and successful PDF/image requests.
- The CV download bytes match the newly compiled PDF. The two-page PDF was rendered and visually reviewed; email and portfolio annotations point to the confirmed addresses. No outdated future-tense role wording remains.
- GitHub's Markdown API rendered the profile as GFM; its local desktop/mobile preview was visually inspected. This preview does not change the live profile.
- The nine checked repository/live-project/evidence links returned HTTP 200, including GermanLyft, MarketPulse, Entry-Task, and UniPirate.
- Six final saved Dafny sources were freshly checked with Dafny 4.11.0. Every run exited zero with zero verifier errors; SHA-256 checks confirmed the sources stayed unchanged. These checks are separate from the historical model-generation experiment.

| Scenario | General: verified obligations | Improved: verified obligations |
| --- | ---: | ---: |
| Bounded Counter | 3 | 6 |
| Authorized Access | 5 | 8 |
| Account Transfer | 3 | 4 |

“Verified obligations” are verifier counts, not counts of tasks or independent test cases. No new model-generation benchmark was run.

## UniPirate

Created https://github.com/Astavicious/unipirate as a fork of https://github.com/indkhan/unipirate. The local checkout has `origin` pointing to Bilal's fork and `upstream` to the original. Its working tree is clean, and all upstream files and any license/attribution material are preserved. No feature work, service setup, or deployment was performed.

## Details still requiring confirmation

- Web3Forms routes submissions using an existing access key, so changing the displayed email cannot confirm or alter the service's configured recipient. Check the recipient in the Web3Forms account. The direct email alternative uses the confirmed address. No test message was submitted.
- The existing Stroke Risk Prediction card's 85% accuracy claim is unchanged; its evaluation evidence is not established by the materials supplied for this update.
- The profile README's new case-study URL becomes live only after the portfolio update is approved and deployed. Deploy the portfolio before publishing that README link.
