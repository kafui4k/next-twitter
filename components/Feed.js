import { SparklesIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import Post from "./Post";

function Feed() {
  const posts = [
    {
      id: 1,
      name: "John Doe",
      username: "johndoe",
      userImg:
        "https://imgs.search.brave.com/8zgfFJ-znBGldptcJiWo-ljNkNPqkVBxznlzJOi1C8E/rs:fit:320:320:1/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vcHJhY3RpY2Fs/ZGV2L2ltYWdlL2Zl/dGNoL3MtLWhEUHNq/UXB4LS0vY19maWxs/LGZfYXV0byxmbF9w/cm9ncmVzc2l2ZSxo/XzMyMCxxX2F1dG8s/d18zMjAvaHR0cHM6/Ly9kZXYtdG8tdXBs/b2Fkcy5zMy5hbWF6/b25hd3MuY29tL3Vw/bG9hZHMvdXNlci9w/cm9maWxlX2ltYWdl/LzI1ODUxMy9iYWJh/ZjBiOC1iMGRiLTQ2/MzItOTgxMC1hYzYz/MGIxMzVkODcuanBl/Zw",
      img: "https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      text: "Coffee house",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Doe",
      username: "jane_doe",

      userImg:
        "https://imgs.search.brave.com/8zgfFJ-znBGldptcJiWo-ljNkNPqkVBxznlzJOi1C8E/rs:fit:320:320:1/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vcHJhY3RpY2Fs/ZGV2L2ltYWdlL2Zl/dGNoL3MtLWhEUHNq/UXB4LS0vY19maWxs/LGZfYXV0byxmbF9w/cm9ncmVzc2l2ZSxo/XzMyMCxxX2F1dG8s/d18zMjAvaHR0cHM6/Ly9kZXYtdG8tdXBs/b2Fkcy5zMy5hbWF6/b25hd3MuY29tL3Vw/bG9hZHMvdXNlci9w/cm9maWxlX2ltYWdl/LzI1ODUxMy9iYWJh/ZjBiOC1iMGRiLTQ2/MzItOTgxMC1hYzYz/MGIxMzVkODcuanBl/Zw",
      img: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
      text: "Coffee house",
      timestamp: "2 days ago",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex items-center py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>

      <Input />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
