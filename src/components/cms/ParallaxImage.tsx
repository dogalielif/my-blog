import { Image } from '@/interfaces/contentfulBase'
import styles from '@/styles/ParallaxImage.module.css'

export default function ParallaxImage(props: {
  image: Image
  width?: string
  text: string
  textColor: string
}): JSX.Element {
  const width = props.width ?? '100%'
  return (
    <div
      style={{ backgroundImage: `url(${props.image.url})`, width: `${width}` }}
      className={styles.parallaxContainer}
    >
      {props.text && (
        <p style={{ color: `${props.textColor ? props.textColor : 'black'}` }}>
          {props.text}
        </p>
      )}
    </div>
  )
}
