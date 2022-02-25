const HeaderItem = ({ Icon, title }) => {
  return (
    <div
      className="group flex w-12 cursor-pointer flex-col items-center 
      hover:text-white sm:w-20"
    >
      <Icon
        className="mb-1 h-6 transition duration-200 group-hover:scale-110
        group-hover:stroke-[#26ffcc] md:h-7 xl:h-8"
      />
      <p
        className="scale-0 text-xs tracking-widest text-[#26ffcc] 
        transition duration-200 group-hover:scale-100 sm:text-sm"
      >
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
