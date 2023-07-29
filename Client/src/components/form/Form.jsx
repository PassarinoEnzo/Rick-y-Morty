import { useState } from 'react';
import styles from './Form.module.css';
import validation from './validation';


export default function Form(props) {

    const [userData, setUserData] = useState({email: "", password: ""})

    const [errors, setErrors] = useState({})

    const handleChange = event => {
        const { name, value } = event.target;
        setUserData ({
            ...userData, [name]: value
        })
        setErrors(validation({
            ...userData, [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(userData);
    }
    
    return (
        <div className={styles.container}>
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <input className={styles.input} type='text' name='email' value={userData.email} placeholder='EMAIL' onChange={handleChange} />
                <p>{ errors.email ? errors.email : null }</p>

                <input className={styles.input} type='password' name='password' value={userData.password} placeholder='PASSWORD' onChange={handleChange} />
                <p>{ errors.password ? errors.password : null }</p>

                <hr/>
                <button className={styles.button} type='submit'>Submit</button>
            </form>
        </div>
    )
}