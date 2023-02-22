import styles from "../../modules/footer.module.css"
import inst from "../../img/instagram.png"
import { Contacts } from "../contacts/Contacts"
import { Logo } from "../logo/Logo"

export function Footer(){
    return (
        <div className={styles.footer}>
            <Logo />
            <Contacts />
            <div className={styles.link}>
                <img src={inst} alt="img" />
                <a style={{
                     fontSize: "16px",
                     lineHeight: "18px",
                     fontWeight: "300"
                }} href="https://instagram.com/cyberservice.by?igshid=YmMyMTA2M2Y=">cyberservice.by</a>
            </div>
        </div>
    )
}