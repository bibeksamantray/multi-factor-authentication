Directory structure
-----------------------------------------------------------------------------
├── README.md
├── frontend
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── login.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── pages
    │   │   ├── LandingPage.jsx
    │   │   ├── Login.jsx
    │   │   └── SignUp.jsx
    └── vite.config.js
├── package.json
└── server
    ├── config
        └── db.js
    ├── controllers
        └── authController.js
    ├── models
        └── User.js
    ├── package-lock.json
    ├── package.json
    ├── routes
        └── authRoutes.js
    └── server.js


--------------------------------------------------------------------------------
/frontend/.gitignore:
--------------------------------------------------------------------------------
 1 | # Logs
 2 | logs
 3 | *.log
 4 | npm-debug.log*
 5 | yarn-debug.log*
 6 | yarn-error.log*
 7 | pnpm-debug.log*
 8 | lerna-debug.log*
 9 | 
10 | node_modules
11 | dist
12 | dist-ssr
13 | *.local
14 | 
15 | # Editor directories and files
16 | .vscode/*
17 | !.vscode/extensions.json
18 | .idea
19 | .DS_Store
20 | *.suo
21 | *.ntvs*
22 | *.njsproj
23 | *.sln
24 | *.sw?


Setup - Frontend
-----------------------------------------------------------------------------------------------------------
 1 | # React + Vite
 2 | 
 3 | This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
 4 | 
 5 | Currently, two official plugins are available:
 6 | 
 7 | - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
 8 | - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
 9 | 
10 | ## Expanding the ESLint configuration
11 | 
12 | If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
13 | 
