import requests from '../utils/requests'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="relative flex items-center">
      <div
        className="flex space-x-10 overflow-x-scroll whitespace-nowrap px-10 py-5
        text-lg scrollbar-hide sm:space-x-20 sm:px-20 
        md:text-xl"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="before:transition-width relative cursor-pointer ease-out 
              before:absolute before:right-0 before:bottom-[-5px] before:h-[2px]
              before:w-0 before:bg-[#26ffcc] before:duration-300 last:mr-12 
              hover:text-[#26ffcc] before:hover:left-0 before:hover:right-auto 
              before:hover:w-full"
          >
            {title}
          </h2>
        ))}
      </div>
      <div
        className="absolute  left-0 h-10 w-[5%] 
        bg-gradient-to-r from-[#06202a]"
      />
      <div
        className="absolute  right-0 h-10 w-1/12
        bg-gradient-to-l from-[#06202a]"
      />
    </nav>
  )
}

export default Navbar
