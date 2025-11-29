# OpenForm4U

OpenForm4U is a small Angular web application that provides a form core and an "open form" component. The project in this repository lives under the `webapp/` folder and is built with Angular and TypeScript.

**Tech stack**

- **Framework:** Angular
- **Language:** TypeScript
- **Bundler / CLI:** Angular CLI

**Prerequisites**

- **Node.js:** v18 or later (LTS recommended)
- **npm:** v8 or later (or `yarn` if preferred)

**Quickstart (development)**

Open a terminal and run:

```bash
cd webapp
npm install
npm start
```

By default `npm start` runs `ng serve` and serves the app at `http://localhost:4200/`.

**Build**

To build a production bundle:

```bash
cd webapp
npm run build
```

**Watch (development build)**

```bash
cd webapp
npm run watch
```

**Tests**

Run unit tests with:

```bash
cd webapp
npm test
```

**Project structure (important parts)**

- `webapp/` - main Angular app folder
  - `src/` - application source
    - `app/` - application code
      - `form-core/` - form core controllers and services
        - `controllers/` - controllers such as `textbox.ts`, `dropdown.ts`, and `base-controller.ts`
        - `open-form/` - `openform.component.ts` and `openform.component.html`
        - `services/` - services used by the open form
      - `app.ts`, `app.routes.ts`, `app.config.ts` - app bootstrap and routing
  - `package.json` - npm scripts and dependencies

**Notable npm scripts (from `webapp/package.json`)**

- `npm start` : runs `ng serve` (development server)
- `npm run build` : runs `ng build` (production build)
- `npm run watch` : runs `ng build --watch --configuration development`
- `npm test` : runs `ng test`

**Contributing**

- Please open an issue or PR if you want to add features or fix bugs.
- Follow existing project style for TypeScript and Angular patterns.

**License**

This repository does not include a license file. Add a `LICENSE` file to clarify the project license.

**Next steps / suggestions**

- Add a `LICENSE` file.
- Add a top-level contribution guide `CONTRIBUTING.md` if you plan to accept contributions.
- Add CI configuration to run tests and linting on pull requests.

---

If you want, I can also update the `webapp/README.md` with matching instructions or add a `LICENSE` file—tell me which you prefer.