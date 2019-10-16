## iniciar node e instalar paquetes

iniciar node `npm init --yes`

instalar archivo .json `npm install`

typeScript `npm i typescript -D`

express `npm install express`

cors `npm install cors`

postgresql `npm install pg`

jwt-simple `npm install jwt-simple`

dayjs `npm install dayjs`

socket.io `npm install socket.io`

para desintalar un paquete `npm uninstall body-parser`

## iniciar node e instalar paquetes ts

crear archivo tsconfig.json `tsc --init`

express `npm install @types/express --save-dev`

body-parser `npm install @types/body-parser --save-dev`

cors `npm install @types/cors --save-dev`

pg `npm install @types/pg -D`

jwt-simple `npm install @types/jwt-simple -D`

socket.io `npm install @types/socket.io -D`

para desintalar un paquete `npm uninstall @types/body-parser --save-dev`

luego vamos al archivo tsconfig `configuramos "outDir": "dist/"`

## convertir codigo typeScrip a js

tsc -w

npm start

## opcion 1 correr app node js

ir a package.json y configurar

"main": "index.js",

"scripts": {

"start": "node dist/index.js",

"test": "echo \"Error: no test specified\" && exit 1"

},

npm start

## opcion 2 correr app node js

node dist/index

# modo local

http://localhost:5000/api/buscar

# modo remoto

0 descargamos heroku desde pagina oficial

1 instalamos heroku

2 ver version de heroku `heroku -v`

||||||||||||||||||||||

1 ir a package.json poner en script `"start": "node src/index"`

2 en el comando poner `npm start` para ejecutar la app
otra opcion

1 1 ir a package.json poner en script `"correr": "node src/index"`

2 en el comando poner `npm run correr` para ejecutar la app
continuamos

3 crear un archivo `.gitignore`

4 colocamos `node_modules/` para ignorar paquetes de node

5 `git init`

6 `git status`

7 `git add .`

8 `git status`

9 `git commit -m "primer commit"`

11 ya esta listo con esto, ahora toca subir a heroku

12 en la terminal git `heroku login` para loguearse

13 `heroku git:remote -a sistema-colegio-bo`

14 `git push heroku master`

15 `heroku open`

# actualizar heroku

heroku update

## gitHub

git init

git add README.md

git commit -m "first commit"

git remote add origin https://github.com/macc001/colegio-back-tsc.git

git push -u origin master

## giIgnore

node_modules/

src/

tsconfig.json

README.md

.gitignore

## release

agregar tag git tag v1.0.0 publicar tag git push --tags
