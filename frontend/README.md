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
3. delete css files: src/App.css, index.css
4. organize frontend: App.jsx, main.jsx
    - create directories in src: pages, styles, components
    - add files in src: constants.js, api.js
    - add environment variable file in frontend: .env
6. constants.js, api.js. .env
7. write protected routes: components/ProtectedRoute.jsx
8. create pages: Home.jsx, Login, NotFound, Register
9. write navigation in App.jsx
10. run this project
```bash
  npm install
  npm run dev
```
![Navigations and pages](./assets_frontend/Navigate_to_pages.gif)
11. make a generic form for register and login: components/Form.jsx
12. add form styles: styles/Form.css
13. connect the login/register form: longin.jsx, register.jsx
14. open the server (change the enviromenr virable with server-size address: .env), test the pages
![register and login](./assets_frontend/register_login.gif)
when users log out, the website cannot direct back to the home page
15. build the home page
    - get all notes; check the notes on Home page (no note if no content, HTTP 200 2)
    - delete notes, create a new note
    - form to create a new note and display all notes
    ![Home Page](./assets_frontend/home_page.png)
16. build the note component: components\Note.jsx, add in Home.jsx
  - notes can be deleted
17. add styles: Note.css, Home.css, LoadingIndicator.css
![Note page](./assets_frontend/note_page.png)