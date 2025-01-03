
import FriendLinks from '@/app/ui/dashboard/friend-links';

export default function MessageNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-white rounded-md">
       <div className="mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40">
        <div className="flex items-center h-full w-full">
          Contacts
        </div>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <FriendLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-white md:block"></div> {/** empty space */}
      </div>
    </div>
  );
}
