//A
/*const http = require ("http");
//const data = require ('./utils/data')
const getCharById = require ('./controllers/getCharById')

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    if(url.includes('/rickandmorty/character') ){
        const id = url.split('/').at(-1); 
        //A
        */
        //const character = data.find (char=>char.id === parseInt(id))
        /*if (character){
            res.writeHead(200,{"Content-type":"application/json"})

            return res.end(JSON.stringify(character))
        }else{
            res.writeHead(404,{"Content-type":"application/json"})
            res.end(JSON.stringify({error : "Character not found pssss"})) 
        }*/
        /*getCharById(res,id);


    }

}).listen(3001,'localhost')// con el .listen aca es el punto 2 del readme, que levanta el server en el punto 3001
//A*/
// borramos todo

//Clase 7
/*const express = require('express');
const router = require ('./routes')
const morgan = require('morgan');
const cors = require('cors')
const server = express();
const PORT = 3001;

server.use(morgan('dev')) //se usa para agregar un middleware, si no especifico una ruta, lo usa para todas
server.use(cors())
server.use(express.json())
server.use('/rickandmorty', router)*/



/*server.use((req, res, next) => { // este es el middleware 
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();//siempre deben tener el next(), sino queda trabado
});// hasta aca es el middleware
*/

const server =  require ('./app')
const PORT = 3001

server.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);//console.log('Server raised in port: ' + PORT);
});