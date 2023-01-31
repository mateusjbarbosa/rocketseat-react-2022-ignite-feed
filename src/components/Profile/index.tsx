import styles from './styles.module.css';

interface Props {
  name: string;
  orientation: 'vertical' | 'horizontal';
  picture: string;
  role: string;
}

export function Profile({ name, orientation, picture, role }: Props) {

  if (orientation === 'vertical') {
    return (
      <div className={styles.vertical}>
        <img
          src={picture}
          alt="User's profile picture"
          className={styles.avatar}
        />

        <div className={styles.verticalInfo}>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    )
  }

  if (orientation === 'horizontal') {
    return (
      <div className={styles.horizontal}>
        <img
          src={picture}
          alt="Author's profile picture"
          className={styles.avatar}
        />

        <div className={styles.horizontalInfo}>
          <strong>{name}</strong>
          <span>{role}</span>
        </div>
      </div>
    )
  }

  return <></>
}
