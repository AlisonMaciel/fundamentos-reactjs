import {format, formatDistanceToNow} from "date-fns"
import { ptBR } from "date-fns/locale"

import styles from "./Post.module.css"

import {Comment} from "../components/Comment"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Post({author, publishedAt, content}) {
  const [coments, setComents] = useState([""])
  const [newComent, setNewComent] = useState('')
  const [newDate, setNewDate] = useState()
  const publishedAtDateFormatted = format(publishedAt, "d 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()
    const date = new Date()
    setNewDate(date)
    setComents(prevState => [...prevState, newComent])
    setNewComent('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity("")
    setNewComent(event.target.value)
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  function handleDeleteComment(commentDelete) {
    const deleteComent = coments.filter(coment => coment !== commentDelete)
    setComents(deleteComent)
  }
  
  const newCommentIsEmpty = newComent.length == 0
  console.log(newDate)
  return (
    <article className={styles.post}>

      <header className={styles.author}>
        <Avatar hasBorder src={author.avatarUrl} />
        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map(line => {
            if(line.type == 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if(line.type == 'Link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentário"
          value={newComent}
          onInvalid={handleNewCommentInvalid}
          onChange={handleNewCommentChange}
          required
        />
        <footer>
          <button type="submit" disabled={newCommentIsEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          coments.map((coment, index) => (
            <Comment
              key={index} 
              coment={coment}
              newDate={newDate}
              onDelete={() => handleDeleteComment(coment)}
            />
          ))
        }
      </div>
    </article>
  )
}