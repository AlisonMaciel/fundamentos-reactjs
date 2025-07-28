import { ThumbsUp, Trash } from "@phosphor-icons/react"

import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

import {formatDistanceToNow} from "date-fns"
import {ptBR} from "date-fns/locale"

export function Comment({coment, onDelete, newDate}) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    if(likeCount === 1) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
  }

  return (
    <div className={styles.comment}>
      {coment && (
        <>
        <Avatar hasBorder={false} src="https://github.com/AlisonMaciel.png" />
        <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alison Maciel</strong>
              <time 
                title="06-05-20250" 
                datetime="06-05-2025">
                {newDate && formatDistanceToNow(newDate, {addSuffix:true, locale: ptBR})}
              </time>
            </div>
            <button onClick={onDelete} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{coment}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
        </div>
        </>
      )}
    </div>
  )
}