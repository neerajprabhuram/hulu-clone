import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = 'https://image.tmdb.org/t/p/original'

  return (
    <div
      ref={ref}
      className="group cursor-pointer p-2 transition duration-200 ease-in
      transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
      />
      <div className="p-2">
        <h2
          className="mt-1 text-xl text-white transition-all duration-100
          ease-in-out font-bold sm:font-normal sm:group-hover:font-bold"
        >
          {result.title || result.original_name}
        </h2>
        <p className="truncate max-w-md">{result.overview}</p>
        <p
          className="flex items-center mt-1 text-gray-400 text-sm 
          sm:opacity-0 group-hover:opacity-100 transition-all 
          duration-200 ease-in-out capitalize"
        >
          {result.media_type && `${result.media_type} ~`}{' '}
          {result.release_date || result.first_air_date} ~{' '}
          <ThumbUpIcon className="h-4 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  )
})

export default Thumbnail
