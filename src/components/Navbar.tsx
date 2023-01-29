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
          <div
            className={styles.navigationPages}
            style={{ position: 'relative' }}
          >
            {navbarItems?.map((item: any) => {
              return (
                <div key={item.sys.id}>
                  <Link
                    className={
                      item?.['__typename'] === 'MainCategory' &&
                      item.subCategoriesCollection.items.length > 0
                        ? styles.navigationCategory
                        : styles.navigationPage
                    }
                    href={item.slug ? item.slug : '/'}
                  >
                    {item.navbarTitle}
                  </Link>
                  {item?.['__typename'] === 'MainCategory' &&
                    item.subCategoriesCollection.items.length > 0 && (
                      <div className={styles.navbarPopover}>
                        {item.subCategoriesCollection.items.map(
                          (subMenuItem: any) => (
                            <Link
                              className={styles.subNavigationItem}
                              key={subMenuItem.sys.id}
                              href={subMenuItem.slug ? subMenuItem.slug : '/'}
                            >
                              {subMenuItem.navbarTitle}
                            </Link>
                          ),
                        )}
                      </div>
                    )}
                </div>
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
