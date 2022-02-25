import Image from 'next/image'
import Link from 'next/link'
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
    <header
      className="m-5 flex h-auto flex-col justify-between
      sm:flex-row sm:items-center"
    >
      <Link href="/">
        <Image
          className="cursor-pointer object-contain"
          src="https://links.papareact.com/ua6"
          width={200}
          height={80}
        />
      </Link>
      <div className="mt-5 flex max-w-2xl flex-grow justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
    </header>
  )
}

export default Header
