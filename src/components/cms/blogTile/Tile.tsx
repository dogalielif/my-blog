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
      className={styles.tile}
      key={tile.sys.id}
    >
      <h4>{tile.title}</h4>
      <img
        src={`${tile.image.url}`}
        alt={tile.title}
        className={styles.tileImage}
      />
      <h6>{tile.tileDescription}</h6>
    </div>
  )
}
