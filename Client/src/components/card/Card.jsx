import styles from "./Card.module.css"
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {

   const [isFav, setIsFav] = useState(false)


   function handleClick(){
      if(isFav){
         setIsFav(false)
         props.deleteFavorite(props.id)
      }else{
         setIsFav(true)
         props.addFavorite(props)
      }
   }

   useEffect(() => {
      props.favorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.favorites]);


   return (
      <div className={styles.divCard}> 
         { props.onClose ? (<button className={styles.buttonCard} onClick={()=>{props.onClose(props.id)}}>X</button>) : null}
         <h2 className={styles.h2}>{props.name}</h2>
         <Link to={`/detail/${props.id}`}>
            <img className={styles.imgCard} src={props.image} alt='imagen' />
         </Link>
         <h2 className={styles.h2}>{props.status}</h2>
         {
         isFav ? (<button className={styles.buttonFav} onClick={handleClick}>❤️</button>) : (<button className={styles.buttonFav} onClick={handleClick}>🤍</button>)
         }
      </div>
   );
}

export function mapDispatchToProps(dispatch){
   return {
      addFavorite: function(character){
         dispatch(addFavorite(character))
      },
      deleteFavorite: function(id){
         dispatch(deleteFavorite(id))
      }
   }
}

export function mapStateToProps(globalState){
   return {
      favorites: globalState.favorites
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)