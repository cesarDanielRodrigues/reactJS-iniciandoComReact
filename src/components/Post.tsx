import { format, formatDistanceToNow } from "date-fns"
import {ptBR} from "date-fns/locale/pt-BR"

import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

interface Author{
  name: string
  rule: string
  authorUrl: string
}

interface Content{
  type: "paragraph" | "link"
  content: string
}

export interface PostType{
  id: number
  author: Author
  publishedAt: Date
  content: Content[]
}

interface PostProps{
  post: PostType
}

export function Post({ post }:PostProps) {
  const publishedDateFormatted = format(post.publishedAt,
                                        "d 'de' LLLL 'às' HH:mm'h'",
                                        { locale: ptBR }
                                       )

  const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const [comments, setComments] = useState(["Post de teste"])
  const [newCommentText, setNewCommentText] = useState("")

  function handleCreateNewComment(event: FormEvent){
    event.preventDefault()
    
    setComments([...comments, newCommentText])
    setNewCommentText("")
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("")
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity("Esse campo é obrigatório")
  }
  
  function removeComment(commentToDo: string){
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
          <Avatar src={post.author.authorUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.rule}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} 
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeNow}
        </time>
      </header>
      <div>
        <div className={styles.content}>
          {post.content.map((line) => {
            if (line.type === "paragraph") {
              <p key={line.content}>{line.content}</p>
            } else if (line.type === "link") {
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
            onDeleteComment={removeComment}
          />
        })}
      </div>
    </article>
  )
}
