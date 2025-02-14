import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from "./App.module.css"

import "./global.css"
import { Sidebar } from "./components/sidebar"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="César Daniel"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, quidem iure repellendus nobis quod deleniti facilis impedit? Expedita maiores fugiat culpa provident? Iste, iusto eius voluptatibus saepe expedita ullam laboriosam."
          />
        </main>
      </div>
    </div>
  )
}
