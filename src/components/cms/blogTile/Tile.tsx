import { useRouter } from 'next/router'
import styles from '@/styles/BlogTiles.module.css'
import { BlogTile } from '@/interfaces/blogTile'

export default function Tile(tile: BlogTile): JSX.Element {
  const router = useRouter()
  const onClick = (slug: string): void => {
    router.push(`/posts/${slug}`)
  }
  return (
    <div
      onClick={() => onClick(tile.slug)}
      className={styles.card}
      key={`${tile.sys.id}  ${Math.random()}`}
    >
      <img
        src={tile?.tileImage?.url ? tile.tileImage.url : tile.image.url}
        alt={tile.title}
        className={styles.tileImage}
      />
      <h2>{tile.title}</h2>
      <p>{tile.tileDescription}</p>
    </div>
  )
}
