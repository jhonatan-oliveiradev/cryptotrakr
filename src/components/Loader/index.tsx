import styles from './Loader.module.css'

export function Loader() {
  return (
      <div className={styles.loader}>
        <div className={styles.loaderBox}></div>
        <div className={styles.loaderBox}></div>
        <div className={styles.loaderBox}></div>
        <div className={styles.loaderBox}></div>
        <div className={styles.loaderBox}></div>
        <div className={styles.loaderBox}></div>
        <div className={styles.loaderBox}></div>
        <div className={styles.loaderBox}></div>
        <div className={styles.loaderBox}></div>
    </div>
  )
}