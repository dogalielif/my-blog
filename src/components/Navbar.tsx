import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <section>
      <div className={styles.mainBar}>
        <Link href="/">
          <img src="/favicon.ico" className={styles.icon} />
        </Link>
      </div>
    </section>
  )
}
