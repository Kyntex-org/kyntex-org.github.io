# Kyntex website

Product website for https://kyntex.org. Public product photography, brand assets, and website source only. Technical product development remains in separate repositories.

## Work locally

Use Node.js 24 and pnpm 11. Run `pnpm install --frozen-lockfile`, then `pnpm dev`. Run `pnpm build` to produce the static website in `out/`.

## Publish

Pushing to `main` builds and deploys the website through GitHub Pages. The Pages custom domain is `kyntex.org`; Wix manages its DNS. Apex A records point to 185.199.108.153, 185.199.109.153, 185.199.110.153, and 185.199.111.153. The `www` CNAME points to `kyntex-org.github.io`.

Brand guidance lives in `docs/DESIGN_PHILOSOPHY.md`, with the canonical reference at https://github.com/Kyntex-org/.github/blob/main/DESIGN_PHILOSOPHY.md.
