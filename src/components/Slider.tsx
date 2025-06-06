'use client'
import { useCounterStore } from '@/stores/counterStore'
import { useEffect, useState } from 'react'

const images = [
  '/slide1.jpg',
  '/slide2.jpg',
  '/slide3.jpg',
]

export default function Slider() {
    const { count, increase, decrease, reset } = useCounterStore()
  const [current, setCurrent] = useState(0)
  const [autoSlide, setAutoSlide] = useState(false)

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (!autoSlide) return

    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)
  }, [autoSlide])

  return (
    <div className=" border w-full max-w-[1200px] mx-auto  text-center">
      <div className="relative">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-[80vh] object-cover rounded"
        />

        {/* Prev and Next buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white px-2 py-1 rounded shadow"
        >
          ▶
        </button>
      </div>

      {/* Dots Indicator */}

      {/* <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div> */}

      {/* Auto Slide Button */}
      
      {/* <div
       onClick={() => setAutoSlide(!autoSlide)}
       className={`btn mx-auto  border-[2px] w-[80px] h-[30px] rounded-[20px] my-[10px] flex items-center transition-all  duration-1000 cursor-pointer  ${autoSlide?'flex-row-reverse border border-green-300 text-green-300   ':'flex-row  border-red-300 text-red-300 '} `}>
        <div className="cir w-[40px] h-[30px]  flex justify-center items-center p-[3px] rounded-full transition-all duration-1000 border-[inherit] border-[2px] ">auto</div>
        <div className="tog flex-1  transition-all duration-1000 ">
             {autoSlide ? 'On' : 'Off'}
        </div>
      </div> */}
    </div>
  )
}
