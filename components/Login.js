import styles from '@/styles/Login.module.css'
import {motion} from 'framer-motion'
const Login = () => {
    return ( 
        <motion.div className={styles.login}
        initial = {{y : '-100vh'}}
        animate = {{y : 0}}
        transition = {{type : "spring" , duration : 1 , damping : 13}}
        >
            <div className={styles.loginText}>Holla , Amigo!</div>
            <div className={styles.loginForm}>
                <input type="text" className={styles.loginFormInput1} placeholder = "Email" />
                <input type="password" className={styles.loginFormInput2} placeholder = "Password" />
                <div className={styles.password}>forgot password?</div>
                <div className={styles.buttonBox}><motion.button className={styles.button}
                whileHover = {{scale : 1.1}}
                transition = {{duration : 0.3}}
                >SIGN IN</motion.button></div>
            </div>
            
        </motion.div>
     );
}
 
export default Login;