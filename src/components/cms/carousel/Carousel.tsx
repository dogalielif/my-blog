import { CarouselProps } from '@/interfaces/carousel'
import styles from '@/styles/Carousel.module.css'
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
        renderArrowNext={(clickHandler, hasNext, label) => {
          return (
            <button
              onClick={clickHandler}
              className={styles.arrowContainerRight}
            >
              <h1>{'>'}</h1>
            </button>
          )
        }}
        renderArrowPrev={(clickHandler, hasNext, label) => {
          return (
            <button
              onClick={clickHandler}
              className={styles.arrowContainerLeft}
            >
              <h1>{'<'}</h1>
            </button>
          )
        }}
      >
        {items.map((item) => {
          return (
            <div
              className={styles.carouselItem}
              key={`${item.sys.id} ${Math.random()}`}
            >
              <img
                className={styles.image}
                src={`${item.image.url}`}
                className={styles.image}
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
