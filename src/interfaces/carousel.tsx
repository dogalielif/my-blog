import { ContentfulBase } from './contentfulBase'

export interface CarouselProps extends ContentfulBase {
  title: string
  itemsCollection: {
    items: CarouselImage[]
  }
}

interface CarouselImage extends ContentfulBase {
  title: string
  image: {
    url: string
  }
  description: string
}
