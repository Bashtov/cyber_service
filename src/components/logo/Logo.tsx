import styles from "../../modules/logo.module.css"

export function Logo(){
    return(
        <div className={styles.logo}>
                <p style={{
                    fontWeight: "700",
                    fontSize: "32px",
                    lineHeight: "40px"
                }}>CYBERSERVICE</p>
                <p style={{
                    backgroundColor: "#E4E4E4", 
                    color: "black", 
                    padding: "2px 10px",
                    fontWeight: "300",
                    fontSize: "18px"
                }}>РЕМОНТ ГАДЖЕТОВ</p>
            </div>
    )
}