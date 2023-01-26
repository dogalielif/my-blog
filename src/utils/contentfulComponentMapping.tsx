import BlogTiles from '@/components/blogTile/BlogTiles'
import Carousel from '@/components/carousel/Carousel'

interface mapping {
  [key: string]: (props: any) => JSX.Element
}

const componentMapping: mapping = {
  Carousel: Carousel,
  BlogTiles: BlogTiles,
}

export default componentMapping
