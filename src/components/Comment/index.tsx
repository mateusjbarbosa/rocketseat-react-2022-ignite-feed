import { HandsClapping, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';
import styles from './styles.module.css';

export function Comment() {
  return (
   <div className={styles.comment}>
    <Avatar
      alt=""
      hasBorder={false}
      picture="https://images.unsplash.com/photo-1531518326825-96490ddf2a89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHlvdW5nJTIwZ2lybCUyMGJsYWNrJTIwaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=30"
    />

    <div className={styles.box}>
      <div className={styles.content}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Helena Ribeiro</strong>
            <time
              title="01 de Fevereiro de 2023 às 10:33"
              dateTime="2023-02-01 10:33:00"
            >
              Cerca de 1h atrás
            </time>
          </div>

          <button title="Deletar comentário">
            <Trash size={24}/>
          </button>
        </header>

        <p>Muito legal, irmão! 👏🏻👏🏻</p>
      </div>

      <footer>
        <button>
          <HandsClapping />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
   </div>
  )
}
