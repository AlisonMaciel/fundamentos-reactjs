import { Avatar } from "./Avatar"
import styles from "./Sidebar.module.css"

import {PencilSimpleLine} from "@phosphor-icons/react"

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover} 
        src="https://miro.medium.com/v2/resize:fit:260/1*l6s7ev65uD6otx9vV6A2AQ.png"
      />
      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/AlisonMaciel.png"/>
        <strong>Alison Maciel</strong>
        <span>Dev front end</span>
      </div>
      <button className={styles.button}>
        <PencilSimpleLine size={20} />
        Editar seu perfil
      </button>
    </aside>
  )
}