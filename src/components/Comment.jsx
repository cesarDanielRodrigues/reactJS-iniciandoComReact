import { ThumbsUp } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Trash } from "@phosphor-icons/react/dist/ssr"

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/cesarDanielRodrigues.png"/>

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
                        <button title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>03</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}