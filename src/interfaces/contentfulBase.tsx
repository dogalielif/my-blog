export interface ContentfulBase {
  sys: {
    id: string
    __typename: string
  }
  __typename: string
}

export interface Image extends ContentfulBase {
  url: string
  title: string
  width: string
  height: string
  description: string
}
