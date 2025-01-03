'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  FilmIcon,
  GlobeAltIcon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
  BuildingStorefrontIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Emma Johnson', href: '/dashboard/messages/emma-johnson', imageSrc: '/p1.png'},
  { name: 'Olivia Smith', href: '/dashboard/messages/olivia-smith', imageSrc: '/p2.png'},
  { name: 'Ava Williams', href: '/dashboard/messages/ava-williams', imageSrc: '/p3.png'},
  { name: 'Liam Brown', href: '/dashboard/messages/liam-brown', imageSrc: '/p4.png'},
  { name: 'Noah Davis', href: '/dashboard/messages/noah-davis', imageSrc: '/p5.png'},
  { name: 'James Wilson', href: '/dashboard/messages/james-wilson', imageSrc: '/p6.png'},
  { name: 'Ethan Clark', href: '/dashboard/messages/ethan-clark', imageSrc: '/p7.png'},    
];

export default function FriendLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-gray-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3'
            )}
          >
            <Image src={link.imageSrc} alt={link.name} width={24} height={24} className="rounded-full"/>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
