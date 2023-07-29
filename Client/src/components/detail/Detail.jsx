import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import styles from "./Detail.module.css"

export default function Detail(){

    const { id } = useParams();

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_DETAIL}${id}`)
        .then(({ data }) => {
            if(data.name){
                setCharacter(data)
            }else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={styles.divDetail}>
            <h1 className={styles.h1Detail}>{character.name && character.name}</h1>
            <img className={styles.imgDetail} src={character.image} alt={character.name} />
            <section className={styles.secDetail}>
                <span className={styles.spanDetail}>{character.status && character.status}</span>
                <span className={styles.spanDetail}>{character.species && character.species}</span>
                <span className={styles.spanDetail}>{character.gender && character.gender}</span>
                <span className={styles.spanDetail}>{character.origin?.name}</span>
            </section>
        </div>
    )
}