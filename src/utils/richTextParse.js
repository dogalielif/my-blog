import { BLOCKS, INLINES } from '@contentful/rich-text-types'

export const options = (links) => {
  // create an asset map
  const assetMap = new Map()
  // loop through the assets and add them to the map
  if (links?.assets?.block) {
    for (const asset of links?.assets?.block) {
      assetMap.set(asset.sys.id, asset)
    }
  }

  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id)

        // render the asset accordingly
        return (
          <img
            src={asset.url}
            style={{ alignSelf: 'center', margin: '1rem auto' }}
            alt="My image alt text"
          />
        )
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <a style={{ color: 'blue' }} href={node.data.uri}>
            {children}
          </a>
        )
      },
    },
  }
}
