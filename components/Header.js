import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='flex flex-col-reverse sm:flex-row justify-between 
    items-center sm:items-end m-5 h-auto border'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain "
        src="https://links.papareact.com/ua6"
        width={200}
        height={80}
      />
    </header>
  )
}

export default Header