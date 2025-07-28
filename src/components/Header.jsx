import styles from "./Header.module.css"

import igniteSimbolSvg from "../assets/ignite simbol.svg"

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