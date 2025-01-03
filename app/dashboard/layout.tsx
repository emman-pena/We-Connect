import SideNav from '@/app/ui/dashboard/sidenav';
import MessageNav from '@/app/ui/dashboard/messagenav';
import Link from 'next/link';
import WeConnectLogo from '@/app/ui/weconnect-logo';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-green-500 p-4 md:h-40 block md:hidden"
        href="/"
      >
        <div className="flex items-center justify-center h-full w-full">
          <WeConnectLogo />
        </div>
      </Link>
      <div className="w-full flex-none md:w-64 hidden md:block">
        <SideNav/>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-gray-50">{children}</div>
      <div className="w-full flex-none md:w-64 hidden xl:block">
        <MessageNav />
      </div>
      {/**bottom nav for mobile */}
      <div className="w-full fixed bottom-0 flex-none bg-white md:w-64 block md:hidden">
        <SideNav />
      </div>
    </div>
  );
}