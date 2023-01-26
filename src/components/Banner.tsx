import { Image } from '@/interfaces/contentfulBase'
import styles from '@/styles/Banner.module.css'
import ParallaxImage from './cms/ParallaxImage'

export default function Banner(props: { image: Image }) {
  return (
    <section className={styles.container}>
      {/* <ParallaxImage {...props}></ParallaxImage> */}
      <img
        src={`${props.image.url}?fit=pad`}
        alt={'banner item'}
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </section>
  )
}
