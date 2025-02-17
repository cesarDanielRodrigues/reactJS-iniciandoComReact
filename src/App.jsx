import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/sidebar"

import styles from "./App.module.css"

import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      authorUrl: "https://github.com/cesarDanielRodrigues.png",
      name: "César Daniel",
      rule: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2025-02-17 16:00:00")
  },
  {
    id: 2,
    author: {
      authorUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      rule: "CTO @Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2025-02-13 17:00:00")
  },
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post)=>{
              return(
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}
