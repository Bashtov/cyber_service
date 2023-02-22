import { NavBar } from '../nav/NavBar'
import styles from "../../modules/main.module.css"
import phone from "../../img/phoneAll.png"


export function Main(){
    return (
        <div className={styles.mainScreen}>
            <NavBar />
           <div className={styles.main}>
                <div className={styles.info}>
                    <div className={styles.title}>
                        ОТРЕМОНТИРУЕМ УСТРОЙСТВО <p>ПРИ ВАС ЗА 30 МИНУТ!</p>
                    </div>
                    <div className={styles.text}>
                        РЕМОНТ СМАРТФОНОВ М. ОКТЯБРЬСКАЯ, М. КУПАЛОВСКАЯ, 
                        <p>М. ПЛОЩАДЬ ЛЕНИНА</p>
                    </div>
                    <div className={styles.grap}>
                        ГРАФИК РАБОТЫ: 10:00 - 19:00 БЕЗ ВЫХОДНЫХ
                    </div>
                
                    <div className={styles.button}>
                        <button style={{
                            backgroundColor: "#E4E4E4",
                            border: "none",
                            borderRadius: "25px",
                            color: "black",
                            padding: "15px 22px",
                            textAlign: "center",
                            textDecoration: "none",
                            display: "inline-block",
                            fontSize: "16px",
                            margin: "4px 2px",
                            cursor: "pointer",
                        }}>БЫСТРАЯ КОНСУЛЬТАЦИЯ</button>
                        <p style={{
                            fontWeight: "300",
                            fontSize: "12px",

                        }}>ПЕРЕЗВОНИМ ЗА 7 СЕКУНД</p>
                    </div>
                </div>
                <img style={{
                    width: "40vw",              
                }} src={phone} alt="img" />
           </div>
        </div>
    )
}