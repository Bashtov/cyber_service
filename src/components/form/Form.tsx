import styles from "../../modules/form.module.css"

export function Form(){
    return(
        <div className={styles.form}>
            <div className={styles.title}>
                <p>ОБРАТНЫЙ ЗВОНОК</p>
            </div>
            <div className={styles.text}>
                <p>ВВЕДИТЕ СВОЙ ТЕЛЕФОН И МЫ СВЯЖЕМСЯ С ВАМИ В БЛИЖАЙШЕЕ ВРЕМЯ С 10:00 ДО 19:00</p>
            </div>
            <div className={styles.inputs}>
                <div className={styles.input}>
                    <input className={styles.id} type="name" placeholder=""/>
                    <label className={styles.label} htmlFor="name">ВАШЕ ИМЯ</label>
                </div>
                <div className={styles.input}>
                    <input className={styles.id} type="text" placeholder=""/>
                    <label className={styles.label} htmlFor="phoneNumber">ВАШ НОМЕР ТЕЛЕФОНА</label>
                </div>
                <div className={styles.input}>
                    <input className={styles.id} type="text" placeholder=""/>
                    <label className={styles.label} htmlFor="model">МОДЕЛЬ ВАШЕГО ТЕЛЕФОНА</label>
                </div>
                <div className={styles.input}>
                    <input className={styles.id} type="text" placeholder=""/>
                    <label className={styles.label} htmlFor="problem">ВАША ПРОБЛЕМА</label>
                </div>
            </div>
            <div className={styles.button}></div>
        </div>
    )
}