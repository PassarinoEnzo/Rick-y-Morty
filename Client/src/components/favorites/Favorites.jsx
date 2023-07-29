import { connect, useDispatch, useSelector } from "react-redux"
import styles from "./Favorites.module.css"
import Card from "../card/Card"
import { filterCards, orderCards } from "../../redux/actions/actions"
import { useState } from "react"

function Favorites(){

    const Favorites = useSelector((state) => state.favorites);
    const dispatch = useDispatch()
    const [booleano, setBooleano] = useState(false)

    function handleOrder(event){
        dispatch(orderCards(event.target.value))
        setBooleano(!booleano)
    }

    function handleFilter(event){
        dispatch(filterCards(event.target.value))
    }


    return (
        <div>
            <div className={styles.divSelects}>
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>

            <div className={styles.container}>
                {Favorites?.map((char) => (
                <Card 
                id={char.id} 
                name={char.name} 
                status={char.status} 
                species={char.species} 
                gender={char.gender} 
                origin={char.origin.name} 
                image={char.image} />
            ))}
            </div>
        </div>
        

    )
}

export function mapStateToProps(state){
    return {
        Favorites: state.favorites
    }
}

export default connect(mapStateToProps)(Favorites)