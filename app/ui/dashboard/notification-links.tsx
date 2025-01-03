"use client"

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { key:'1', name: 'Emma Johnson', href: '/dashboard/profilePlaceholder', imageSrc: '/p1.jpg', message: 'Accepted your connection request.'},
  { key:'2',name: 'Olivia Smith', href: '/dashboard/profilePlaceholder', imageSrc: '/p2.jpg', message: 'Updated status to single.'},
  { key:'3',name: 'Ava Williams', href: '/dashboard/profilePlaceholder', imageSrc: '/p3.jpg', message: 'Started a new job at XYZ Inc..'},
  { key:'4',name: 'Liam Brown', href: '/dashboard/profilePlaceholder', imageSrc: '/p4.jpg', message: 'Accepted your connection request.'},
  { key:'5',name: 'Noah Davis', href: '/dashboard/profilePlaceholder', imageSrc: '/p5.jpg', message: 'Have 1 new post.'},
  { key:'6',name: 'Ava Williams', href: '/dashboard/profilePlaceholder', imageSrc: '/p3.jpg', message: 'Accepted your connection request.'},
  { key:'7',name: 'Noah Davis', href: '/dashboard/profilePlaceholder', imageSrc: '/p5.jpg', message: 'Posted an update.'},    
];

export default function NotificationLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          
            <Link
                key={link.key}
                href={link.href}
                className={clsx(
                'flex h-[64px] grow items-center justify-start gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-gray-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3'
                )}
            >
                    <div className='flex flex-col'>
                        <div className='flex flex-row gap-2 items-center'>
                            <Image src={link.imageSrc} alt={link.name} width={40} height={40} className="rounded-full"/>
                            <div className='flex flex-col items-start'>
                                <p className="block md:block text-lg">{link.name}</p>
                                <p className="block md:block text-gray-700">{link.message}</p>
                            </div>
                        </div>
                        
                    </div>
            </Link>
          
        );
      })}
    </>
  );
}