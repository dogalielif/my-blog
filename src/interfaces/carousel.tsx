import { ContentfulBase, Image } from './contentfulBase'

export interface CarouselProps {
  title: string
  itemsCollection: {
    items: CarouselImage[]
  }
}

interface CarouselImage extends ContentfulBase {
  title: string
  image: Image
  description: string
}
