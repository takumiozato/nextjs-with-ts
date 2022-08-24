import styles from './index.module.css'
import Layout from '../../../components/layout'

const Page = () => {
  const dummyImages = [...Array(1000)]
  return (
    <Layout>
      <div className={styles.container}>
        <p>normal image</p>
        <div className={styles.image_container}>
          {dummyImages.map((_, i) => {
            return (
              <img
                key={`defaultImage-${i}`}
                src={`https://picsum.photos/400/200?random=${i}`}
                width={400}
                height={200}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Page
