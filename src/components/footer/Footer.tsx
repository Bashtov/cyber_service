import styles from "../../modules/footer.module.css"
import inst from "../../img/instagram.png"
import { Contacts } from "../contacts/Contacts"
import { Logo } from "../logo/Logo"

export function Footer(){
    return (
        <div className={styles.mainFooter}>
            <div style={{
                height: "10vh",
                width: "100%",
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), linear-gradient(90deg, #300404 0%, #310404 3.57%, #320404 7.99%, #340404 12.68%, #350404 16.73%, #360505 20.65%, #370505 24.61%, #380505 29.6%, #3C0505 34.51%, #400505 40.37%, #440505 45.75%, #480606 52.25%, #4D0606 59.02%, #550606 65.73%, #520606 71.72%, #4D0606 77.36%, #4A0606 81.8%, #470606 85.59%, #440606 89.37%, #410606 93.94%, #3D0606 100%)",
                transform: "rotate(-180deg)"
            }}/>
            <div className={styles.footer}>
                <Logo />
                <Contacts />
                
                <div className={styles.link}>
                    <a className={styles.link} target="_black" rel="noreferrer" href="https://instagram.com/cyberservice.by?igshid=YmMyMTA2M2Y=">
                        <img src={inst} alt="img" />
                        <p style={{
                            fontSize: "16px",
                            lineHeight: "18px",
                            fontWeight: "300",
                            padding: "0 0.5rem"
                        }}>cyberservice.by</p>
                    </a>
                </div>
            </div>
    
        </div>
    )
}