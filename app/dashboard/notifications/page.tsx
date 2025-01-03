import NotificationLinks from '@/app/ui/dashboard/notification-links';

export default function Page() {
    return (<div className='flex flex-row'>
      <div className="hidden h-auto w-1/4 grow rounded-md bg-gray-50 md:block"></div> {/** empty space */}
      
      <div className='flex flex-col gap-4'> 
        <div className="flex flex-col h-25 shrink-0 items-center justify-center rounded-lg shadow-md bg-white gap-4 p-4 md:h-25">
                <div className="flex flex-col items-start gap-4 w-full text-xl font-semibold">
                  Notifications
                    
                </div>
        </div>

        <div className="flex flex-col h-25 shrink-0 items-center justify-center rounded-lg shadow-md bg-white gap-4 p-4 md:h-25">
                <div className="flex flex-col items-start gap-4 w-full">
                  <div className='flex flex-col w-full gap-2'>
                    <NotificationLinks/>
                  </div>
                </div>
        </div>

        


      </div>

      <div className="hidden h-auto w-1/4 grow rounded-md bg-gray-50 md:block"></div> {/** empty space */}   
    </div>

    );
  }