import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import WeConnectLogo from '@/app/ui/weconnect-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-500 p-4 md:h-40 hidden md:block"
        href="/"
      >
        <div className="flex items-center justify-center h-full w-full">
          <WeConnectLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div> {/** empty space */}
        <form>
          <Link className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-green-300 hover:text-yellow-500 md:flex-none md:justify-start md:p-2 md:px-3" href="/">
            <PowerIcon className="w-6"/>
            <div className="hidden md:block">Sign Out</div>
          </Link>
        </form>
      </div>
    </div>
  );
}
