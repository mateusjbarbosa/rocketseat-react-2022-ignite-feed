import { PencilLine } from 'phosphor-react';
import styles from './styles.module.css';

export function Sidebar() {
  return <aside className={styles.sidebar}>
    <img
      src="https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=30"
      alt="User's cover"
      className={styles.cover}
    />

    <div className={styles.profile}>
      <img
        src="https://images.unsplash.com/photo-1599425857670-b17a03c9c897?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb25kZSUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=300&q=30"
        alt="User's profile picture"
        className={styles.avatar}
      />

      <strong>Aurora Ribeiro</strong>
      <span>Front-end Developer</span>
    </div>

    <footer className={styles.footer}>
      <a href='#'>
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
}
