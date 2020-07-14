## Assista ao vídeo de demonstração:

[![Vídeo demonstração.](http://img.youtube.com/vi/TToa5Khe5I8/0.jpg)](http://www.youtube.com/watch?v=TToa5Khe5I8 "Vídeo demonstração.")

## Resumo:
Lista para controle de negociações com cálculo do volume total e persistência dos dados inseridos.  


### Funcionalidades:
- Inserir negociações e armazenar em um banco de dados local (no próprio navegador), e visualizar em tela.
- Consumir API, de forma assincrona, para busca de negociações e visualizar em tela;
- Remover todas as negociações em tela e apagar do banco de dados local(no próprio navegador); 
- Calcular automáticamente o volume total das negociações.

### Stack:
- HTML5
- CSS3
- JAVASCRIPT
- NODEJS

<BR>

### Como iniciar:
- Clone, na sua máquina, a aplicação e utilize no NodeJs o comando "npm install" para baixar todas as dependências.

#### Dependências: 
- "systemjs": "^6.3.3"

#### Dependências -Dev : 
- "babel-cli": "^6.26.0"
- "babel-preset-es2015": "^6.9.0"
- "babel-plugin-transform-es2015-modules-systemjs": "^6.24.1"

#### Scripts: 
- "build": "babel js/app-es6 -d js/app --source-maps" > npm run build
- "watch": "babel js/app-es6 -d js/app --source-maps --watch" > npm run watch

<BR>

#### Para o app funcionar complemetamente é necessário o fake server disponivel no repositório "business-list-server-javascript"

##### Encontre-o aqui: 
