import SearchBar from "./SearchBar/SearchBar";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

function Nav (props) {
    return ( 
    <div className={styles.divNav}>
        <Link className={styles.NavLink} to="/home">Home</Link>
        <Link className={styles.NavLink} to="/favorites">Favs</Link>
        <Link className={styles.NavLink} to= "/about">About</Link>
        <SearchBar onSearch={props.onSearch} />
    </div>)
}

export default Nav;