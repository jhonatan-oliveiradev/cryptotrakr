import { Link } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoImg} alt="Logotipo DevCurrency" />
        </Link>
      </div>
    </header>
  )
}