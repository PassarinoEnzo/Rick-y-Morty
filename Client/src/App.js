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
   const [errorApi, seterrorApi] = useState(false);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function logout() {
      setAccess(false);
   }

   async function login(userData) {
      const { email, password } = userData;
      const URL = "http://localhost:3001/user/login/";

      try {
         const backEndLogin = await axios(URL + `?email=${email}&password=${password}`)
         const { data } = backEndLogin
         const { access } = data;
         setAccess(access);
         access && navigate("/home");
      } catch (error) {
         alert(error.message);
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id) {
      try {
         const backRequest = await axios(`http://localhost:3001/character/${id}`)
         const { data } = backRequest
         if (data.name) {
            seterrorApi(false);
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            seterrorApi(true);
         }
      } catch (error) {
         seterrorApi(true);
      }
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
            location.pathname !== "/" && <Nav onSearch={onSearch} out={logout} />
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
