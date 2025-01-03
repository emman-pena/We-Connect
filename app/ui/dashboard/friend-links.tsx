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
  { key:'1', name: 'Emma Johnson', href: '/dashboard/messages/emma-johnson', imageSrc: '/p1.jpg'},
  { key:'2', name: 'Olivia Smith', href: '/dashboard/messages/olivia-smith', imageSrc: '/p2.jpg'},
  { key:'3', name: 'Ava Williams', href: '/dashboard/messages/ava-williams', imageSrc: '/p3.jpg'},
  { key:'4', name: 'Liam Brown', href: '/dashboard/messages/liam-brown', imageSrc: '/p4.jpg'},
  { key:'5', name: 'Noah Davis', href: '/dashboard/messages/noah-davis', imageSrc: '/p5.jpg'},
  { key:'6', name: 'James Wilson', href: '/dashboard/messages/james-wilson', imageSrc: '/p6.jpg'},
  { key:'7', name: 'Ethan Clark', href: '/dashboard/messages/ethan-clark', imageSrc: '/p7.jpg'},    
];

export default function FriendLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.key}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-gray-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3'
            )}
          >
            <Image src={link.imageSrc} alt={link.name} width={40} height={40} className="rounded-full"/>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
