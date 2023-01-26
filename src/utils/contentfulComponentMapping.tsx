import BlogTiles from '@/components/cms/blogTile/BlogTiles'
import Carousel from '@/components/cms/carousel/Carousel'
import ParallaxImage from '@/components/cms/ParallaxImage'

interface mapping {
  [key: string]: (props: any) => JSX.Element
}

const componentMapping: mapping = {
  Carousel: Carousel,
  BlogTiles: BlogTiles,
  ParallaxImage: ParallaxImage,
}

export default componentMapping
