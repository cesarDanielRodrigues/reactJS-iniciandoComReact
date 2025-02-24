import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import styles from "./Post.module.css"
import { useState } from "react"


export function Post({ author, content, publishedAt }) {
  const publishedDateFormatted = format(publishedAt,
                                        "d 'de' LLLL 'às' HH:mm'h'",
                                        { locale: ptBR }
                                       )

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [comments, setComments] = useState(["Post de teste"])
  const [newCommentText, setNewCommentText] = useState("")

  function handleCreateNewComment(){
    event.preventDefault()
    
    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function handleNewCommentChange(){
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(){
    event.target.setCustomValidity("Esse campo é obrigatório")
  }
  
  function removeComment(commentToDo){
    const commentWithDeleteOne = comments.filter((comment)=>{
      return comment !== commentToDo
    })
    setComments(commentWithDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length == 0

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
        <time title={publishedDateFormatted} 
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>
      <div>
        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === "paragraph") {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type == "link") {
                return (
                  <p key={line.content}>
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

        <textarea 
          name="comment" 
          value={newCommentText} 
          placeholder="Deixe o seu comentário" 
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment)=>{
          return <Comment 
            content={comment} 
            key={comment} 
            removeComment={removeComment}
          />
        })}
      </div>
    </article>
  )
}
