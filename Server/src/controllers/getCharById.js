const axios = require ('axios');
const errorHandler = require ('../utils/errors')

 const URL_BASE= `https://rickandmortyapi.com/api/character/`
/*const getCharById = (res,id) => {
    axios(`${URL_BASE}/${id}`)
    .then (({data})=>{
        const { name, gender, species, origin, image, status } = data
        
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify({id, name, gender, species, origin, image, status}))
    })
    .catch((error)=>{
        res.writeHead(500,{'Content-Type':'text/plain'})
        res.end(error.message)
    })
} */

const getCharById = async (req, res)=>{
    //const {id} = req.params;
    const id = parseInt (req.params.id)
    try {
        const response = await axios (`${URL_BASE}${id}`)
        const { status, name, species, origin, image, gender } = response.data
        const character = { id, status, name, species, origin, image, gender }
        res.status(200).json(character)

    } catch (error) {
        errorHandler(res,error)
    }
    /*axios (`${URL_BASE}${id}`)
    .then (response => {
        const { status, name, species, origin, image , gender} = response.data
        const character = { id, status, name, species, origin, image , gender};

        return character.name ? res.status(200).json(character) : res.status(404).send('Not found');*/
    /*})
    .catch((error)=>{
        res.status(500).json({error:error.message})
    })*/
}

module.exports = getCharById;

//podemos hacer si solo exportamos una sola funcion module.exports=()=>{}