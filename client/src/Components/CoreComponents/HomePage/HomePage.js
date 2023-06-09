import { Link } from "react-router-dom"
import styles from './HomePage.module.css';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";


export const HomePage = () => {

    const { user } = useContext(AuthContext);

    return (
        <>

            {/* if !user */}
            <div className={styles["home-container"]}>

                {!user
                    ?
                    <h2>Check our latest photos <Link className={styles["link"]} to="/photos/most-recent">here</Link> </h2>
                    :
                    <h2>Check our latest photos <Link className={styles["link"]} to="/photos">here</Link> </h2>
                }


                <div className={styles["welcome-wrapper"]}>
                    <div className={styles["inner-welcome-wrapper"]}>
                        <span>Welcome</span>
                    </div>
                    <div className={styles["inner-welcome-wrapper"]}>
                        <span>Welcome</span>
                    </div>
                </div>
            </div>

            {/* if user */}
            {/* <div className={styles["home-container"]}>
                <h2>Check our latest photos <Link {styles["link"]} to="/photos">here</Link> </h2>
                <h1>Welcome to our gallery</h1>
            </div> */}

        </>
    )
}