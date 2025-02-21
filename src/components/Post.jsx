import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import styles from "./Post.module.css"
import { useState } from "react"

const comments = [1, 2, 3]


export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [comments, setComments] = useState([1,2])

  function handleCreateNewComment(){
    event.preventDefault()

    setComments([...comments,comments.length + 1])
  }
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.authorUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.rule}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>
      <div>
        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === "paragraph") {
              return <p>{line.content}</p>
            } else if (line.type == "link") {
                return (
                  <p>
                    <a href="#">{line.content}</a>
                  </p>
                )
              }
            }
          )}
        </div>
      </div>
      <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
        <strong>Deixe o seu feedback</strong>

        <textarea placeholder="Deixe o seu comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment=>{
          return <Comment/>
        })}
      </div>
    </article>
  )
}
