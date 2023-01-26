import { BlogTilesProps } from '@/interfaces/blogTile'
import styles from '@/styles/BlogTiles.module.css'
import Tile from './Tile'

export default function BlogTiles(props: BlogTilesProps): JSX.Element {
  const tiles = props.blogItemsCollection.items

  return (
    <section>
      <div className={styles.tilesContainer}>
        {tiles.map((tile) => {
          return <Tile key={tile.sys.id} {...tile} />
        })}
      </div>
    </section>
  )
}
