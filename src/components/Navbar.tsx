import Link from 'next/link'
import styles from '@/styles/Navbar.module.css'

export default function Navbar(props: any) {
  const { config } = props
  const navbarItems = props.navbar?.navbarItemsCollection?.items
  const socialLinks = config.socialLinksCollection.items
  return (
    <section>
      <div className={styles.navbar}>
        <Link href="/">
          <img
            src={`${config.logo.url || '/favicon.ico'}`}
            className={styles.icon}
          />
        </Link>
        {navbarItems && navbarItems.length && (
          <div className={styles.navigationPages}>
            {navbarItems?.map((item: any) => {
              return (
                <Link
                  className={styles.navigationPage}
                  key={item.sys.id}
                  href={item.slug ? item.slug : '/'}
                >
                  {item.navbarTitle}
                </Link>
              )
            })}
          </div>
        )}
        <div>
          {socialLinks.map((item: any) => {
            return (
              <Link key={item.sys.id} href={item.link} target="_blank">
                <img
                  src={`${item.logo.url || '/favicon.ico'}`}
                  className={styles.socialIcon}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
