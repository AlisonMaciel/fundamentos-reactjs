import styles from "./Header.module.css"

import igniteSimbolSvg from "../assets/Ignite simbol.svg"

export function Header() {
  return (
    <header className={styles.header}>
      <img 
        src={igniteSimbolSvg} 
        alt="logo tipo ignite" 
      />
    </header>
  )
}  