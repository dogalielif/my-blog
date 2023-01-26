import Image from 'next/image'
import styles from '@/styles/Banner.module.css'

export default function Banner(props: { image: { url: string } }) {
  return (
    <section className={`${styles.container}`}>
      <Image
        src={props.image.url}
        alt={'banner item'}
        fill
        style={{ objectFit: 'cover' }}
      />
    </section>
  )
}
