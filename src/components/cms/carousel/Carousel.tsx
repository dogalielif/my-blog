import { CarouselProps } from '@/interfaces/carousel'
import styles from '@/styles/Carousel.module.css'
import Image from 'next/image'
import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

export default function Carousel(props: CarouselProps): JSX.Element {
  const items = props.itemsCollection.items
  return (
    <section className={styles.container}>
      <h3>{props.title}</h3>
      <ReactCarousel
        width={'inherit'}
        dynamicHeight={false}
        showArrows={true}
        showThumbs={false}
        showIndicators={true}
        animationHandler="fade"
        infiniteLoop={true}
        showStatus={false}
        swipeable={true}
      >
        {items.map((item) => {
          return (
            <div className={styles.carouselItem} key={item.sys.id}>
              <img
                className={styles.image}
                src={`${item.image.url}?fit=fill`}
                style={{ height: 'inherit' }}
                alt="Picture of the author"
              />
              <div className={styles.itemInfo}>
                <h3 className={styles.carouselItemTitle}>{item.title}</h3>
                <p className={styles.carouselItemDescription}>
                  {item.description}
                </p>
              </div>
            </div>
          )
        })}
      </ReactCarousel>
    </section>
  )
}
