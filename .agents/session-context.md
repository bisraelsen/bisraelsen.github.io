# Session Context

- Site is on `main` and pushed to GitHub Pages.
- Primary nav now keeps only `Bio` and `Publications`.
- Contact is handled by the envelope social icon plus JavaScript mailto obfuscation; no plaintext email in page text.
- Added a compatibility `/contact` page to avoid 404s from stale links or cached pages, but the main nav no longer links to it.
- Blog/code/projects were removed as first-class navigation targets; most work is private.
- External links kept: LinkedIn, ORCID, CEFE-AI, Google Scholar, GitHub, email.
- Tagline is `Measuring AI in human terms.`
- Bio page no longer says `Coming soon: my CV`, and the nav label is `Bio` rather than `Bio/CV`.
- Social icons were moved onto their own centered row beneath the primary nav pills.
- Relevant recent commits:
  - `39aeab4` Remove bio placeholder text
  - `153fa4d` Shorten bio navigation label
  - `171f809` Separate social nav from primary pills
  - `782f6a5` Center social nav under primary links
  - `bd1b3b4` Remove contact pill
- GitHub Pages showed stale HTML for a while even after pushes. We had to verify with cache-busting URLs and manually trigger a Pages rebuild before the live site started reflecting `bd1b3b4`.
