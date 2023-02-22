import styles from "../../modules/navbar.module.css"
import { Contacts } from "../contacts/Contacts"
import { Logo } from "../logo/Logo"

export function NavBar(){
    return (
        <div className={styles.navbar}>
            <Logo />
            <Contacts />
        </div>
    )
}