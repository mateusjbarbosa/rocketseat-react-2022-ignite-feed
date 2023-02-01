import { Profile } from '../Profile';
import styles from './styles.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <Profile
          name='Davi Barbosa'
          orientation="horizontal"
          picture="https://images.unsplash.com/photo-1594201510970-f549e4a6e96d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHlvdW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=30"
          role='FullStack Developer'
        />

        <time
          title="31 de Janeiro de 2023 às 13:33"
          dateTime="2023-01-31 13:33:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Boa tarde, pessoal! 👋🏻</p>
        <p>Criei um aplicativo bacana usando <a href="#">#react</a> aqui enquanto estava estudando algumas coisas!</p>
        <p>Dá uma olhada 🔎 : <a href="#">https://davi.barbosa.dev/react-todo</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário"/>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
