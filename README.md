# Twitter-frontend
mock twitter frontend project based on react


## how to start
npm start

## how to access
http://localhost:3000/

## json server mock default command without server.js
"mock": "npx json-server --watch ./mock/db.json --routes ./mock/routes.json --port 3334"


## send request
request: get post put patch delete
service: const getUser = (params) => get('/user', params).then((res) => {
  return res;
})

## backend server
json server

## twitter mock pages
under DOC folder


## React 5 steps
- Step 1: Break the UI into a component hierarchy 
- Step 2: Build a static version in React 
- Step 3: Find the minimal but complete representation of UI state 
- Step 4: Step 4: Identify where your state should live 
- Step 5: Step 5: Add inverse data flow 


## style stacks
- css 
- scss easy nested format -> css
- css module -> no namespace conflict


## frontend engineering config info
- craco.config.js: webpack file alias
- jsconfig.json: used by vscode js config

## H5 Page Adaptation plan/適配方案
- VW 100
- VH 100