import type { HomePageCardType } from "../../types/Types"

const HomePageCard = (card: HomePageCardType) => {
  return (
    <div 
    className='bg-gradient-to-b from-white to-gray-200 border-gray-300 border-[1px]
    py-[30px] px-[20px] flex flex-col gap-5 rounded-[10px] hover:scale-[102%]'>
        <p className='text-lg xl:text-xl font-semibold text-center'>{card.title}</p>
        <div className='h-[300px]'>
            <img className='h-full w-full object-cover rounded-[10px]'  src={card.image} alt="" />
        </div>
        <a className='text-xs xl:text-sm text-gray-800 ml-[10px] hover:font-semibold' href="#">{card.link}</a>
    </div>
  )
}

export default HomePageCard