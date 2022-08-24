import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <h2>next/imageの検証</h2>
          <h3>{`大量の画像をnext/imageと<img>でそれぞれ表示した場合の比較`}</h3>
          <Link href="/imagelist/default">{`<img>を使用した場合`}</Link>
          <Link href="/imagelist/nextjs">{`next/imageを使用した場合`}</Link>
        </div>
      </section>
    </Layout>
  )
}
