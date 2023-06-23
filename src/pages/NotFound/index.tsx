import { TiArrowBack } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export function NotFound() {
  return (
    <div
      className={styles.container}>
      <h1>Ops! Parece que você se perdeu...</h1>

      <div className={styles.notFound}>
        <span className={styles.btnText1}>404 ERROR</span>
      </div>

      <div className={styles.back}>
        <Link to="/">
         <button className={styles.btn}>
            <div className={styles.backBtn}>
              <TiArrowBack size={24} color="#fff" />
            </div>
            <div className={styles.btnText}>Voltar</div>
          </button>
        </Link>
      </div>
     </div>
  )
}