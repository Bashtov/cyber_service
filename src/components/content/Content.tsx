import styles from "../../modules/content.module.css"
import { Item } from "../item/Item"
import in1 from "../../img/in (1).png"
import in2 from "../../img/in (2).png"
import in3 from "../../img/in (3).png"
import in4 from "../../img/in (4).png"
import in5 from "../../img/in (5).png"
import in6 from "../../img/in (6).png"
import in7 from "../../img/in (7).png"

export function Content(){
    return (
        <div className={styles.content}>
            <div style={{
                height: "10vh",
                width: "100%",
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), linear-gradient(90deg, #330404 0%, #330404 3.57%, #350505 7.99%, #370505 12.68%, #370505 16.73%, #380505 20.65%, #3A0505 24.61%, #3E0606 29.6%, #420606 34.51%, #470606 40.37%, #4B0606 45.75%, #500606 52.25%, #550606 59.02%, #510606 65.73%, #4C0606 71.72%, #470606 77.36%, #440505 81.8%, #410505 85.59%, #3E0505 89.37%, #3A0505 93.94%, #380505 100%)",
             }}/>
            <div className={styles.title}>СКОЛЬКО СТОЯТ НАШИ УСЛУГИ?</div>
            <Item image={in1} text="ЗАМЕНА ДИСПЛЕЙНОГО МОДУЛЯ" cost="60" />
            <Item image={in2} text="ЗАМЕНА ДИСПЛЕЙНОГО МОДУЛЯ" cost="60"/>
            <Item image={in3} text="ЗАМЕНА ДИСПЛЕЙНОГО МОДУЛЯ" cost="60"/>
            <Item image={in4} text="ЗАМЕНА ДИСПЛЕЙНОГО МОДУЛЯ" cost="60"/>
            <Item image={in5} text="ЗАМЕНА ДИСПЛЕЙНОГО МОДУЛЯ" cost="60"/>
            <Item image={in6} text="ЗАМЕНА ДИСПЛЕЙНОГО МОДУЛЯ" cost="60"/>
            <Item image={in7} text="ЗАМЕНА ДИСПЛЕЙНОГО МОДУЛЯ" cost="60"/>
            <div className={styles.link}>
                <a href="https://yandex.by/maps/157/minsk/?ll=27.550118%2C53.892970&mode=poi&poi%5Bpoint%5D=27.549686%2C53.893031&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D57157061172&z=18" target="_blank" rel="noreferrer">НАЙТИ НАС НА КАРТЕ</a>
            </div>
        </div>
    )
}