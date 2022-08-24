import Image from 'next/image'

const Page = () => {
  const dummyArray = [...Array(100)]
  return (
    <div>
      <p>nextjs image</p>
      {dummyArray.map((_, i) => {
        return (
          <Image
            key={`nextImage-${i}`}
            src={`https://picsum.photos/400/200?random=${i}`}
            width={400}
            height={200}
          />
        )
      })}
    </div>
  )
}

export default Page
