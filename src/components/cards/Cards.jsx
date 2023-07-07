import Card from "../card/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
   return(
   <div className={styles.divCards}>
      {props.characters.map((obj) => {
         return (
         <Card 
         id={obj.id} 
         name={obj.name} 
         status={obj.status} 
         species={obj.species} 
         gender={obj.gender} 
         origin={obj.origin.name} 
         image={obj.image} 
         onClose={props.onClose} />
         )
      })}      
   </div>
   );
}
