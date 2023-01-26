import Image from 'next/legacy/image'
import { BlogTilesProps } from '@/interfaces/blogTile'
import styles from '@/styles/BlogTiles.module.css'

export default function BlogTiles(props: BlogTilesProps): JSX.Element {
  const tiles = props.blogItemsCollection.items
  return (
    <div className={styles.tilesContainer}>
      {tiles.map((tile) => {
        return (
          <div className={styles.tile} key={tile.sys.id}>
            <h4>{tile.title}</h4>
            <img
              src={`${tile.image.url}`}
              alt={tile.title}
              className={styles.tileImage}
            />
            <h6>{tile.tileDescription}</h6>
          </div>
        )
      })}
    </div>
  )
}
