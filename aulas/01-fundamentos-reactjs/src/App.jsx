//JSX = JavaScript + XML (HTML)
import { Post } from "./Post"

export function App() {
  return (
    <div>
      <Post 
        author= "Ederson Schulze" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi ipsam vitae necessitatibus quos corporis nobis similique eos minus architecto, deleniti sunt nulla soluta, mollitia minima cum rerum unde debitis?"
      />

      <Post
        author="Guilherme Schulze"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi ipsam vitae necessitatibus quos corporis nobis similique eos minus architecto, deleniti sunt nulla soluta, mollitia minima cum rerum unde debitis?"
      />
    </div>
  )
}