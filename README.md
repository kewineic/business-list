Dependencias:
-  "systemjs": "^6.3.3"

Dependencias DEV: 
- "babel-cli": "^6.26.0"
- "babel-preset-es2015": "^6.9.0"
- "babel-plugin-transform-es2015-modules-systemjs": "^6.24.1"

Scripts: 
- "build": "babel js/app-es6 -d js/app --source-maps" > npm run build
- "watch": "babel js/app-es6 -d js/app --source-maps --watch" > npm run watch