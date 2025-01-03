import Form from 'next/form';
import Image from 'next/image';
import Link from 'next/link';
import Posts from '@/app/ui/dashboard/posts'

import {
  VideoCameraIcon,
  PhotoIcon,
  FaceSmileIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline';

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined; //modal
};

export default function Page() {
    
    return (
    <div className='flex flex-row'>
      <div className="hidden h-auto w-2/5 grow rounded-md bg-gray-50 md:block"></div> {/** empty space */}
      
      <div className='flex flex-col gap-4'> 
        <div className="flex flex-col h-25 shrink-0 items-center justify-center rounded-lg shadow-md bg-white gap-4 p-4 md:h-25">
                <div className="flex flex-row items-center gap-2 w-full">
                  <Image src='/profile.png' alt='profile' width={50} height={50} className="rounded-full"/>
                  <form className='w-full'>
                    <input type="text" className="flex h-10 shrink-0 items-end rounded-full bg-gray-50 p-4 border-none w-full md:h-25" placeholder="What's on your mind?"/>
                      
                  </form>
                </div>
                <div className="flex flex-row items-center justify-center gap-2 w-full">
                <Link
                  key="Live Video"
                  href="/"
                  className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-gray-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3'>
                  <VideoCameraIcon className="w-6"/>
                  <p className="hidden md:block">Live Video</p>
                </Link>
                <Link
                  key="Photo-Video"
                  href="/"
                  className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-gray-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3'>
                  <PhotoIcon className="w-6"/>
                  <p className="hidden md:block">Photo/Video</p>
                </Link>
                <Link
                  key="Feeling-Activity"
                  href="/"
                  className='flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-gray-100 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3'>
                  <FaceSmileIcon className="w-6"/>
                  <p className="hidden md:block">Feeling/Activity</p>
                </Link> 
                </div>
        </div>

        <div>
          <Posts/>
        </div>
      </div>

      <div className="hidden h-auto w-2/5 grow rounded-md bg-gray-50 md:block"></div> {/** empty space */}   
    </div>

    );
  }

  