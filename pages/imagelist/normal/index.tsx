const Page = () => {
  const dummyArray = [...Array(100)]
  return (
    <div>
      <p>normal image</p>
      {dummyArray.map((_, i) => {
        return (
          <img
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
