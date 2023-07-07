import './App.css';
import Cards from './components/cards/Cards';
import Nav from './components/nav/nav'
import About from './components/about/About'
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Favorites from './components/favorites/Favorites';

function App() {

   const [characters, setCharacters] = useState([])

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'enzo@gmail.com';
   const PASSWORD = '123456';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            if(characters.some(pj => pj.id === data.id)){
               return
            }else{
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function onClose(id){
      let filter = characters.filter(pj =>{
         return pj.id !== id
      })
      setCharacters(filter)
   }

   const location = useLocation()

   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} />
         }
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}

export default App;
