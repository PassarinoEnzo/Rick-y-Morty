import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   const [id, setId] = useState("")

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div className={styles.divSearchBar}>
         <input placeholder='Escribe un número...' onChange={handleChange} type='search' value={id} />
         <button onClick={()=>{props.onSearch(id)}}>Agregar</button>
      </div>
   );
}
