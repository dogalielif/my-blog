import { ContentfulBase } from "./contentfulBase";

export interface BannerProps extends ContentfulBase {
  itemsCollection: {
    items: BannerItem[]
  } 
}

interface BannerItem extends ContentfulBase {
  bannerImage: {
    url: string
  }
  description: string
}