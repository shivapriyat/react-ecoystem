# react-ecoystem

npm install --save-dev @babel/core  @babel/cli @babel/preset-env @babel/preset-react
npm install react react-dom
npm install --save-dev webpack webpack-dev-server webpack-cli style-loader css-loader babel-loader

 to run: npx webpack-dev-server --mode development
 http://localhost:3000/

 Redux= best way to manage states in a large application.
 redux solves props drilling and state sharing between components using global state with restricted access to update the state approach.
 
 Redux archtecture
 Redux store= global JSON object which stores current state of application.
 Redux actions= list of actiities that can happen in application stored in format (type,payload) example: (USER_DATA_LOADED, {userName, userId, userRole, ......})
 Redux reducers= the method that executes and changes the current state of the app when an redux action is fired

 npm install redux react-redux
