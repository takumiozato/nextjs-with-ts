import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import styles from './index.module.scss'
import CardLink from '../components/CardLink'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div>
          <h2 className={styles.headingLg}>next/imageの検証</h2>
          <div className={styles.linkCardWrapper}>
            <CardLink
              href="/imagelist/default"
              title="大量の画像をimgタグで表示した場合"
              summary="next/imageで表示した場合と比較して、レスポンスタイムにどれくらい差が出るかを検証。"
            />
          </div>
          <div className={styles.linkCardWrapper}>
            <CardLink
              href="/imagelist/nextjs"
              title="大量の画像をnext/imageで表示した場合"
              summary="imgタグで表示した場合と比較して、画像形式がwebpになっているか、lazy
              loadがどのように動作するか、レスポンスタイムにどれくらい差が出るかを検証。"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
