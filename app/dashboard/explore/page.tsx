import Form from 'next/form';
import Image from 'next/image';
import Link from "next/link";

import {
 MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

const images = [
  { src: '/skyscraper.jpg', alt: 'Image 1' },
  { src: '/cookies.jpg', alt: 'Image 2' },
  { src: '/whisky.jpg', alt: 'Image 3' },
  { src: '/bee.jpg', alt: 'Image 4' },
  { src: '/acanthus.jpg', alt: 'Image 5' },
  { src: '/ant.jpg', alt: 'Image 6' },
  { src: '/butterfly.jpg', alt: 'Image 7' },
  { src: '/mountains.jpg', alt: 'Image 8' },
];

const people = [
  { name: 'Sophia Lily', href: '/dashboard/profilePlaceholder', src: '/person1.png', alt: 'Image 1' },
  { name: 'Charlotte Anne', href: '/dashboard/profilePlaceholder', src: '/person2.png', alt: 'Image 2' },
  { name: 'Harper Victoria', href: '/dashboard/profilePlaceholder', src: '/person3.png', alt: 'Image 3' },
  { name: 'Amelia Mae', href: '/dashboard/profilePlaceholder', src: '/person4.png', alt: 'Image 4' },
  { name: 'Jack Harrison', href: '/dashboard/profilePlaceholder', src: '/person5.png', alt: 'Image 5' },
  { name: 'Eli Johnson', href: '/dashboard/profilePlaceholder', src: '/person6.png', alt: 'Image 6' },
  { name: 'Ella Kate', href: '/dashboard/profilePlaceholder', src: '/person7.png', alt: 'Image 7' },
  { name: 'Lucas Alexander', href: '/dashboard/profilePlaceholder', src: '/person8.png', alt: 'Image 8' },
];

export default function Page() {
    return (
      <div className='flex flex-row'>
      <div className="hidden h-auto w-1/4 grow rounded-md bg-gray-50 md:block"></div> {/** empty space */}
      
      <div className='flex flex-col gap-4'> 
        <div className="flex flex-col h-25 shrink-0 items-center justify-center rounded-lg shadow-md bg-white gap-4 p-4 md:h-25">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className='text-xl font-semibold'>
                    Search
                  </div>
                  
                  <Form action="/search" className='flex w-full'>
                    {/* On submission, the input value will be appended to 
                  the URL, e.g. /search?query=abc */}
                    <input name="query" className="flex h-10 shrink-0 items-end rounded-full bg-gray-50 p-4 border-none w-full md:h-25" placeholder="Search"/>
                  </Form>
                </div>
        </div>

        <div className="container mx-auto p-6">
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity duration-300">
                  <span className="text-white font-bold">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="flex flex-col h-25 shrink-0 items-center justify-center rounded-lg bg-white shadow-md gap-4 p-4 md:h-25">
          <div className="flex flex-row items-center gap-2 w-full text-lg font-semibold">
             Connect With People   
          </div> 
        </div>

        <div className="container mx-auto p-6">
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {people.map((person, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col h-25 shrink-0 items-center justify-center rounded-lg shadow-md bg-white gap-4 p-4 md:h-25">
                <Image
                  src={person.src}
                  alt={person.alt}
                  width={240}
                  height={240}
                  className="flex h-[48px] w-full h-auto rounded-lg shadow-md object-cover"
                />
                <div>
                <Link
                  key={person.name}
                  href={person.href}
                  className='flex h-[48px] grow items-start justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:text-yellow-500 md:flex-none md:justify-start md:p-2 md:px-3'>
                <p>{person.name}</p>
                </Link>
                </div>
                <div className='flex h-[36px] grow items-center justify-center rounded-md bg-green-500 text-white p-3 text-sm font-medium hover:text-yellow-500 md:flex-none md:justify-start md:p-2 md:px-3'>
                  Connect
                </div>
                </div>
              </div>
            ))}
            </div>
        </div>

      </div>

      <div className="hidden h-auto w-1/4 grow rounded-md bg-gray-50 md:block"></div> {/** empty space */}   
    </div>
    
    );
  }