import styles from "../../modules/contacts.module.css"
import adress from "../../img/adress.png"
import message from "../../img/message.png"

export function Contacts(){
    return(
        <div className={styles.contacts}>
            <div className={styles.adress}>
                <img className={styles.img} src={adress} alt="img" />
                <p style={{
                    padding: "0 0 0 1em",
                    fontSize: "12px",
                    lineHeight: "14px",
                    fontWeight: "300"
                }}>ЛЕНИНГРАДСКАЯ, 5</p>
            </div>
            <div className={styles.contact}>
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
            </div>
        </div>
    )
}