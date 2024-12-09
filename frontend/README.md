# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. use vite to install a react template
`npm create vite@latest frontend -- --template react`
2. install necessary packages
```bash
cd frontend
npm install axios react-router-dom jwt-decode 
```
3. run this project
```bash
  npm install
  npm run dev
```