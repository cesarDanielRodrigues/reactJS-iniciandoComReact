import { ThumbsUp } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Trash } from "@phosphor-icons/react/dist/ssr"
import { Avatar } from "./Avatar"
import { useState } from "react"



export function Comment({content, removeComment}){
    const [likeCount, setLikeCount] = useState(0)   
 
    function handleRemoveComment(){
        removeComment(content)
    }

    function handleLikeCount(){
        setLikeCount((state)=>{
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false}src="https://github.com/cesarDanielRodrigues.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Author</strong>
                            <time 
                                title="17 de Fevereiro às 06:27h" 
                                dateTime="2025-02-17 06:27:00">Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleRemoveComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    {/* <button onClick={()=>setLikeCount(likeCount + 1)}> */}
                    <button onClick={handleLikeCount}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}