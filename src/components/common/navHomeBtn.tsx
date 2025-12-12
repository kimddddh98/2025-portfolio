import styles from '@/styles/navBar.module.scss'
import Link from 'next/link'

const NavHomeBtn = () => {
  return (
    <div className={styles.cubeWrap}>
      <Link className={styles.cubeAnimation} href={'/'}>
        <div className={`${styles.cube} ${styles['cube-first']}`}>home</div>
        <div className={`${styles.cube} ${styles['cube-second']}`}>home</div>
        <div className={`${styles.cube} ${styles['cube-third']}`}>home</div>
        <div className={`${styles.cube} ${styles['cube-fourth']}`}>home</div>
        <div className={`${styles.cube} ${styles['cube-fifth']}`}>home</div>
        <div className={`${styles.cube} ${styles['cube-sixth']}`}>home</div>
      </Link>
    </div>
  )
}

export default NavHomeBtn
