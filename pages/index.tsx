import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from './index.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div>
          <h2 className={styles.headingLg}>next/imageの検証</h2>
          <h3
            className={
              styles.headingMd
            }>{`大量の画像をnext/imageと<img>でそれぞれ表示した場合の比較`}</h3>
          <p>
            <Link href="/imagelist/default">{`<img>を使用した場合`}</Link>
          </p>
          <p>
            <Link href="/imagelist/nextjs">{`next/imageを使用した場合`}</Link>
          </p>
        </div>
      </section>
    </Layout>
  )
}
