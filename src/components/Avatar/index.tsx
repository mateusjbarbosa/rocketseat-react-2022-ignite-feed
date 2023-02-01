import styles from './styles.module.css';

interface Props {
  alt: string;
  picture: string;
  hasBorder?: boolean;
}

export function Avatar({alt, picture, hasBorder = true}: Props) {
  return (
    <img
      src={picture}
      alt={alt}
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
    />
  )
}
