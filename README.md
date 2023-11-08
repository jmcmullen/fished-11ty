# Fished.io Marketing Site

<p align="center">
  <a href="https://fished.io/"><img src="public/assets/images/mockup.png?raw=true" alt="Fished.io"></a>
</p>

### Goals

The main application for Fished.io is built using Redwood.js. Since it doesn't support server-side rendering, this serves as a seperate marketing site that is SEO friendly.

### Web Vitals

<p align="center">
  <img src="public/assets/images/lighthouse.png?raw=true" alt="100% Lighthouse Scores">
</p>

### Requirements

- [Node](https://nodejs.org/en/download)
- [Yarn](https://yarnpkg.com/en/docs/install)

### Installation

```bash
# install dependencies
yarn install

# Run local development server with hmr
yarn dev

# Build the app for production
yarn build
```

### Project structure

```
.
├── public             # Static files
│   └── assets
│       └── images     # Images not needed by Webpack
└── src
    ├── _data          # Eleventy data folder
    ├── _includes
    │   └── layouts    # HTML layout files
    ├── assets         # Assets folder processed by Webpack
    │   ├── images
    │   │   └── posts  # Blog images
    │   └── styles     # Blog CSS files
    └── posts          # Blog posts
```
