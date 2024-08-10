import Link from 'next/link'

const PromoEventsCard = () => {
  return (
    <Link href="/detail">
    <div className="card bg-[url('/sports1.jpg')] bg-cover bg-center shadow-md  h-[400px] w-[280px] group gap-[0.5em] rounded-[1.5em] relative flex justify-end flex-col p-[1.5em] z-[1] overflow-hidden ">
      <div className="absolute h-full w-full  inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="container text-black z-[2] relative font-nunito flex flex-col gap-[0.5em]">
        <div className="flex justify-left items-center h-fit w-full gap-[1.5em]">
          <div className="w-fit h-fit text-white font-bold text-2xl">
            <p>EVENT Event Event Event 2024</p>
          </div>
        </div>
        <div className="flex justify-center items-center h-fit w-fit gap-[0.5em]">
          {['Sports', 'Promo'].map((genre) => (
            <div
            key={genre}
            className="rounded-lg text-md text-white font-semibold px-[0.5em] py-[0.05em] bg-blue3"
            >
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Link>
  )
}

export default PromoEventsCard