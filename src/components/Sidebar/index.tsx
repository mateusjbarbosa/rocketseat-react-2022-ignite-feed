import { PencilLine } from 'phosphor-react';
import { Profile as ProfileModel } from '../../models';
import { Profile } from '../Profile';
import styles from './styles.module.css';

interface Props {
  profile: ProfileModel;
}

export function Sidebar({profile}: Props) {
  return <aside className={styles.sidebar}>
    <img
      alt=""
      src={profile.coverURL}
      className={styles.cover}
    />

    <div className={styles.avatar}>
      <Profile
        name={profile.name}
        orientation='vertical'
        picture={profile.avatarURL}
        role={profile.role}
      />
    </div>

    <footer className={styles.footer}>
      <a href='#'>
        <PencilLine size={20} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
}
