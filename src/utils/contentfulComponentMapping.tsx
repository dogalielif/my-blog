import BlogTiles from '@/components/cms/blogTile/BlogTiles'
import Carousel from '@/components/cms/carousel/Carousel'

interface mapping {
  [key: string]: (props: any) => JSX.Element
}

const componentMapping: mapping = {
  Carousel: Carousel,
  BlogTiles: BlogTiles,
}

export default componentMapping
