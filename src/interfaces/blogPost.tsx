import { ContentfulBase, Image } from './contentfulBase'
import { Document } from '@contentful/rich-text-types'
export interface BlogPostProps extends ContentfulBase {
  title: string
  slug: string
  image: Image
  body: {
    json: {
      content: Document[]
    }
    links: any
  }
}
