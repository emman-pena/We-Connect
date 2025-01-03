
import MessageLinks from '@/app/ui/dashboard/message-links';

export default function Page() {
    
    return (
      <div className='flex flex-row w-full'>
        <div className="hidden h-auto w-1/4 grow rounded-md bg-gray-50 md:block"></div> {/** empty space */}
        
        <div className='flex bg-white shadow-md rounded-md px-48 py-12 text-lg font-semibold'>
          Messages
        </div>
        
        <div className="hidden h-auto w-1/4 grow rounded-md bg-gray-50 md:block"></div> {/** empty space */}
      </div>

    );
  }

  