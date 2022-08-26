import Link from 'next/link'
import styles from './CardLink.module.scss'

type CardLinkProps = {
  href: string
  title: string
  summary: string
}
export const CardLink: React.FC<CardLinkProps> = ({ href, title, summary }) => {
  return (
    <div className={styles.container}>
      <Link href={href} passHref>
        <a className={styles.link}>
          <p className={styles.title}>{title}</p>
          <p className={styles.summary}>{summary}</p>
        </a>
      </Link>
    </div>
  )
}
