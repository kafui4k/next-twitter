import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";

function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="https://imgs.search.brave.com/8zgfFJ-znBGldptcJiWo-ljNkNPqkVBxznlzJOi1C8E/rs:fit:320:320:1/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vcHJhY3RpY2Fs/ZGV2L2ltYWdlL2Zl/dGNoL3MtLWhEUHNq/UXB4LS0vY19maWxs/LGZfYXV0byxmbF9w/cm9ncmVzc2l2ZSxo/XzMyMCxxX2F1dG8s/d18zMjAvaHR0cHM6/Ly9kZXYtdG8tdXBs/b2Fkcy5zMy5hbWF6/b25hd3MuY29tL3Vw/bG9hZHMvdXNlci9w/cm9maWxlX2ltYWdl/LzI1ODUxMy9iYWJh/ZjBiOC1iMGRiLTQ2/MzItOTgxMC1hYzYz/MGIxMzVkODcuanBl/Zw"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
        alt="user-img"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700 "
            rows="2"
            placeholder="What's happening"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotoIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-500" />
            <FaceSmileIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-500" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
