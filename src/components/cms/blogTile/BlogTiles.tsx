import { BlogTilesProps } from '@/interfaces/blogTile'
import styles from '@/styles/BlogTiles.module.css'
import Tile from './Tile'

export default function BlogTiles(props: BlogTilesProps): JSX.Element {
  const tiles = props.blogItemsCollection.items

  const flowStyle = tiles.length > 4 ? 'column wrap' : 'row wrap'
  const justify = tiles.length > 4 ? 'flex-start' : 'space-evenly'

  // const firstColumn = tiles.filter((item, index) => index % 3 === 1)
  // const secondolumn = tiles.filter((item, index) => index % 3 === 2)
  // const thirdColumn = tiles.filter((item, index) => index % 3 === 0)

  return (
    <section>
      {props.title && <h1 className={styles.tilesTitle}>{props.title}</h1>}
      <div
        className={styles.tilesContainer}
        style={{ flexFlow: flowStyle, justifyContent: justify }}
      >
        {tiles.map((tile) => {
          return <Tile key={`${tile.sys.id} ${Math.random()}`} {...tile} />
        })}
        {/* {[firstColumn, secondolumn, thirdColumn].map((items, index) => {
          return (
            <div
              key={`${index} ${Math.random()}`}
              className={styles.tilesContainer2}
            >
              {items.map((item) => (
                <Tile key={`${item.sys.id} ${Math.random()}`} {...item} />
              ))}
            </div>
          )
        })} */}
      </div>
    </section>
  )
}
