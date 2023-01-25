import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/**Twitter logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
          width="50"
          height="50"
          alt=""
        ></Image>
      </div>

      {/** Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notification" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmark" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>
      {/** Button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shaddow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/** Mini profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <img
          src="https://imgs.search.brave.com/8zgfFJ-znBGldptcJiWo-ljNkNPqkVBxznlzJOi1C8E/rs:fit:320:320:1/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vcHJhY3RpY2Fs/ZGV2L2ltYWdlL2Zl/dGNoL3MtLWhEUHNq/UXB4LS0vY19maWxs/LGZfYXV0byxmbF9w/cm9ncmVzc2l2ZSxo/XzMyMCxxX2F1dG8s/d18zMjAvaHR0cHM6/Ly9kZXYtdG8tdXBs/b2Fkcy5zMy5hbWF6/b25hd3MuY29tL3Vw/bG9hZHMvdXNlci9w/cm9maWxlX2ltYWdl/LzI1ODUxMy9iYWJh/ZjBiOC1iMGRiLTQ2/MzItOTgxMC1hYzYz/MGIxMzVkODcuanBl/Zw"
          alt="user-img"
          className="h-10 w-10 rounded-full xl:mr-2"
        />

        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Kafui Alordo</h4>
          <p className="text-gray-500">@kafuialordo</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}

export default Sidebar;
