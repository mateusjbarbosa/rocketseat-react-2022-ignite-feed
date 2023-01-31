import style from './style.module.css';

import igniteLogoPath from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogoPath} alt="Logo do Ignite" />
    </header>
  )
}
