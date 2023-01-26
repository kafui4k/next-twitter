import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Moment from "react-moment";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import {
  ChartBarIcon,
  ChatBubbleLeftEllipsisIcon,
  EllipsisHorizontalCircleIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconField } from "@heroicons/react/24/solid";

function Post({ post }) {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", post.id, "likes"),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, []);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  const likePost = async () => {
    if (session) {
      if (hasLiked) {
        await deleteDoc(doc(db, "posts", post.id, "likes", session?.user.uid));
      } else {
        await setDoc(doc(db, "posts", post.id, "likes", session?.user.uid), {
          username: session.user.username,
        });
      }
    } else {
      signIn();
    }
  };

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/**Image */}
      <img
        className="h-11 w-11 rounded-full mr-4"
        src={post.data().userImg}
        alt="user-img"
      />

      {/** right side */}
      <div className="">
        {/**Header */}
        <div className="flex items-center justify-between">
          {/**User info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.data().name}
            </h4>
            <span className="text-sm sm:text-[15px]">
              @{post.data().username} -{" "}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>
            </span>
          </div>

          {/** dot icon */}
          <EllipsisHorizontalCircleIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>
        {/**post text */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.data().text}
        </p>

        {/** post image */}
        <img
          className="rounded-2xl mr-2"
          src={post.data().image}
          alt="post-img"
        />

        {/** icons */}
        <div className="flex items-center justify-between text-gray-500 p-2">
          <ChatBubbleLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100" />

          <div className="flex items-center">
            {hasLiked ? (
              <HeartIconField
                onClick={likePost}
                className={`{h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100}`}
              />
            ) : (
              <HeartIcon
                onClick={likePost}
                className={`h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100`}
              />
            )}

            {likes.length > 0 && (
              <span
                className={`${hasLiked && "text-sm text-red-600 select-none"}`}
              >
                {likes.length}
              </span>
            )}
          </div>

          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}

export default Post;
