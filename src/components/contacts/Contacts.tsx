import styles from "../../modules/contacts.module.css"
import adress from "../../img/adress.png"
import message from "../../img/message.png"

export function Contacts(){
    return(
        <div className={styles.contacts}>
            <div className={styles.adress}>
                <a className={styles.adress} target="_black" rel="noreferrer" href="https://yandex.by/maps/org/kiber_servis/124067230342/?display-text=Cyber%20Service&ll=27.556461%2C53.897135&mode=search&sctx=ZAAAAAgBEAAaKAoSCW6Kx0W1jDtAEawfm%2BRH8kpAEhIJJemayTfbjD8R%2BrSK%2FtDMcz8iBgABAgMEBSgKOABAnQFIAWoCdWGdAc3MTD2gAQCoAQC9AejlYPzCAQyG5e6XzgO0lM721AHqAQDyAQD4AQCCAg1DeWJlciBTZXJ2aWNligIAkgIAmgIMZGVza3RvcC1tYXBz&sll=27.556461%2C53.897135&sspn=0.041257%2C0.014152&text=Cyber%20Service&z=15.13">
                    <img className={styles.img} src={adress} alt="img" />
                    <p style={{
                        padding: "0 0 0 1em",
                        fontSize: "12px",
                        lineHeight: "14px",
                        fontWeight: "300"
                    }}>ЛЕНИНГРАДСКАЯ, 5</p>
                </a>
            </div>
            <div className={styles.contact}>
                <a className={styles.contact} href="tel:+375 (29) 250-99-99" target="_black" rel="noreferrer">
                    <img className={styles.img} src={message} alt="img" />
                    <div className={styles.info}>
                        <p style={{
                            fontSize: "18px",
                            lineHeight: "22px",
                        }}>+375 (29) 250-99-99</p>
                        <p style={{
                            fontSize: "12px",
                            lineHeight: "14px",
                            fontWeight: "300"
                        }}>ЕСТЬ ВОПРОСЫ? ЗВОНИТЕ!</p>
                    </div>
                </a>
            </div>
        </div>
    )
}