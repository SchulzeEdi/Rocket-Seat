//JSX = JavaScript + XML (HTML)
import { Post } from "./Post"
import './global.css'
import styles from './App.module.css'
import { Header } from "./componentes/Header"
import { Sidebar } from "./componentes/Sidebar"

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author= "Ederson Schulze" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi ipsam vitae necessitatibus quos corporis nobis similique eos minus architecto, deleniti sunt nulla soluta, mollitia minima cum rerum unde debitis?"
          />

          <Post
            author="Guilherme Schulze"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi ipsam vitae necessitatibus quos corporis nobis similique eos minus architecto, deleniti sunt nulla soluta, mollitia minima cum rerum unde debitis?"
          />
        </main>
      </div>
    </div>
  )
}