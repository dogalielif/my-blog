import { ContentfulBase } from "./contentfulBase";

export interface BlogPostProps extends ContentfulBase {
  title: string
  slug: string
}