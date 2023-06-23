import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.text}>
         <p>Feito com 💜 por <a href="https://jhonatanoliveira.com" target="_blank">Jhonatan Oliveira</a>.</p>
     </div>
    </footer>
  )
}