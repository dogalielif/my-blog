import { ContentfulBase } from './contentfulBase'

export interface BlogTilesProps {
  title: string
  blogItemsCollection: {
    items: BlogTile[]
  }
}

interface BlogTile extends ContentfulBase {
  title: string
  slug: string
  tileDescription: string
  image: {
    url: string
  }
}
