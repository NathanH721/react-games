# React Games

- Currently the only available game is Tic-Tac-Toe, which can be navigated to via the button on the homepage, or by navigating to /TicTacToe.
- Functionality is currently still limited to only placing X's or O's, there will be no notification of wins at the current stage.

## Please note this is a work-in-progress application. Some functionality may be minimal or not yet implemented, and files may not be optimized fully.

To run the container, you should be able to use the following commands to start the app: <br />
- `docker build -t react-games .` <br />
- `docker run -p 5174:5174 --name react-games react-games` (This may take a couple minutes)<br />
- Once it has finished loading and the app is running, navigate to `http://localhost:5174/` to interact with the app.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
