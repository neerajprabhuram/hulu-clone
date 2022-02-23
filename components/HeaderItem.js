const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 
    hover:text-white">
      <Icon className="h-6 sm:h-8 mb-1 group-hover:animate-bounce"/>
      <p className="text-xs sm:text-sm scale-0 group-hover:scale-100 tracking-widest">
        {title}
      </p>
    </div>
  )
}

export default HeaderItem
