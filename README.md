# Lou Venedict — Personal website

Pure HTML, CSS, and JavaScript. No PHP, installation, database, or build step.

## Open and edit

Open index.html in your browser.

- index.html: name, introduction, hobbies, goals, city, and email.
- styles.css: layout, typography, and dark/light colors.
- script.js: filters, goal checklist, copy-email button, and theme toggle.
- theme.js: restores the selected theme before the page appears.

Your name and LV initials are already set. Your City, hello@example.com, and the sample biography are placeholders; replace them before publishing. Update both the visible email and its mailto link.

The goal checklist and theme are saved in the visitor's browser when storage is available. They are not shared between visitors or devices. Clipboard copying depends on browser permission; manual-copy instructions appear if it is unavailable. The email link opens an email application.

## Deploy to Vercel

Upload this folder's extracted contents to the root of your GitHub repository. In Vercel, import the repository and select the Other framework preset. No build command is needed; serve the repository root (use `.` if an output directory is requested). Click Deploy.

Use this folder by itself. The previous PHP files and PHP runtime configuration are not needed.
