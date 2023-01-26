import { ContentfulBase } from './contentfulBase'
import { Document } from '@contentful/rich-text-types'
export interface BlogPostProps extends ContentfulBase {
  title: string
  slug: string
  image: {
    url: string
  }
  body: {
    json: {
      content: Document[]
    }
    links: any
  }
}
