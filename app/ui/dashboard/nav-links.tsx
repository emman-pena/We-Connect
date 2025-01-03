'use client';

import {
  HomeIcon,
  GlobeAltIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Explore', href: '/dashboard/explore', icon: GlobeAltIcon },
  { name: 'Messages', href: '/dashboard/messages', icon: ChatBubbleOvalLeftIcon},
  { name: 'Notifications', href: '/dashboard/notifications', icon: BellIcon},    
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-gray-100 hover:text-yellow-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-green-100 text-yellow-500': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
