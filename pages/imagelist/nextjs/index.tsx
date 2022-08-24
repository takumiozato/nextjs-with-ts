import Image from 'next/image'

const Page = () => {
  return (
    <div>
      <p>nextjs image</p>
      <Image src="https://picsum.photos/400/200" width={400} height={200} />
    </div>
  )
}

export default Page
