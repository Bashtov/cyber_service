import styles from "../../modules/logo.module.css"

export function Logo(){
    return(
        <div className={styles.logo}>
                <p className={styles.topText}>CYBERSERVICE</p>
                <p className={styles.bottomText}>РЕМОНТ ГАДЖЕТОВ</p>
            </div>
    )
}