import styles from "./Post.module.css"

export function Post() {
  return (
    <aside className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/cesarDanielRodrigues.png" />
          <div className={styles.authorInfo}>
            <strong>Profile</strong>
            <span>Subtitle</span>
          </div>
        </div>
        <time title="14 de Fevereiro às 17:09h" datetime="2025-02-14 17:09:00">
          Publicado há 1h
        </time>
      </header>
      <div>
        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW. Return,evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          </p>
          <p>
            <a href="">jane.design/doctorcare</a>
          </p>
          <p>
            <a href="#">#novoprojeto</a> 
            <a href="#">#nlw</a> 
            <a href="#">#rocketseat</a>{" "}
          </p>
        </div>
      </div>
    </aside>
  )
}
