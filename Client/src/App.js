import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route , useLocation , useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Form from './components/Form/Form';
import Favorites from './components/favorites/favorite' 

//import Card from './components/Card/Card.jsx';
/*import SearchBar from './components/SearchBar/SearchBar.jsx';*/

function App() {
   const {pathname} = useLocation (); //para saber en que lugar esta ubicado el usuario
   const [characters, setCharacters] = useState([]);

   {/*esto esta en la HW de forms*/}
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   //const EMAIL = 'ejemplo@gmail.com';
   //const PASSWORD = 'pass123';

   const URL = 'http://localhost:3001/rickandmorty/'
   async function login({email,password}){//(userData) {
      /*if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }*/
      try{
      const {data} = await axios(`${URL}login?email=${email}&password=${password}`) // aca los datos quedan expuestos cuando los ponemos en la URL
      const {access} = data
      setAccess(access)
      access && navigate('/home')
      } catch (error){
         alert('Usuario y/o contraseña incorrecta') // hizo unos cambios en el login.js y despues aca, para manejar los mensajes
      }
      /*.then(({data})=>{
         const {access}=data;
         setAccess(access)
         access && navigate('/home')
      })*/
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   {/*hasta aca esta en la HW*/}

   const onSearch = async (id) =>{
      //setCharacters([...characters, example]);
      try {
         const {data} = await axios(`${URL}/character/${id}`)
         setCharacters(oldchars => [...oldchars, data])
      } catch (error) {
         alert(error.response.data);       

      }
      //axios (`http://localhost:3001/rickandmorty/character/${id}`) /*`https://rickandmortyapi.com/api/character/${id}`//en un principio sacabamos de aca la info*/
      /*.then(({data})=>{
         if(!characters.find(char => char.id === data.id)){
            if(data.name){
               setCharacters((oldChars)=>[...oldChars,data])
            }else{
               alert (`ya existe el personaje ${id}`)
            }
         }
      }).catch(err=> alert(err.response.data.error))*/
   }

   function onClose(id){
      setCharacters(characters.filter(char=>char.id !== id))
   }

   return (
      <div>
         Linea de prueba en App.js
         <div className='barra'>
            { pathname !== "/" && <Nav onSearch={onSearch}/> }  {/*cuando la ubicación del usuario es diferente a '/' aparece el Nav, viene gracias al useLocation*/}
         </div>
         <Routes>
            <Route path="/" element = {<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element= {<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/favorites" element={<Favorites/>}></Route>
         </Routes>
         <hr/>
         {/*<div className='App'>
            <Cards characters={characters} onClose={onClose}/>
         </div>*/}
         {/*esta parte renderizaba la etiqueta del personaje en todas las vistas*/}
      </div>
   );
}

export default App;
/*export default onSearch;*/
