# Eagle60 Drone Services — Static Site

A fast, high‑tech landing site ready for **Cloudflare Pages**.

## Deploy (Cloudflare Pages)

1. Create a new GitHub repo and add these files.
2. In Cloudflare Dashboard → **Pages** → *Create a project* → Connect to your GitHub repo.
3. **Framework preset**: *None (static)*
4. **Build command**: *None*
5. **Build output directory**: `/` (root)
6. Click **Save and Deploy**.

> Optionally set a custom domain: **eagle60.net**

## Customize

- Replace placeholder portfolio images in `/index.html` with your own.
- Update contact action URL in the form or wire to a Worker/Email route.
- Edit brand colors in `/styles.css` (`--accent`, `--accent2`).

## Optional Enhancements

- Add a Cloudflare Worker for contact form (turnstile + email).
- Add a `/projects/` folder with galleries.
- Add analytics (Cloudflare Web Analytics).

---

© Eagle60 Drone Services
