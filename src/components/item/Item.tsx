import styles from "../../modules/item.module.css"

export function Item(props: any){
    return (
        <div className={styles.item}>
            <div className={styles.img}>
                <img src={props.image} alt="img" />
            </div>
            <div className={styles.info}>
                <p>{props.text.replace(/ [\s\S]+/, '')}</p>
                <nav>{props.text.replace(/^(\S*)/, '')}</nav>
            </div>
            <div className={styles.cost}><nav>ОТ {props.cost} РУБ</nav></div>
        </div>
    )
}