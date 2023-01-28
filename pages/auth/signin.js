import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from "../../firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "@firebase/firestore";
import { useRouter } from "next/router";

function Signin() {
  const router = useRouter();
  const onGoogleClick = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider);

    const user = auth.currentUser.providerData[0];

    const docRef = doc(db, "users", user.uid);
    const docSnapshot = await getDoc(docRef);

    if (!docSnapshot.exists()) {
      await setDoc(docRef, {
        name: user.displayName,
        email: user.email,
        username: user.displayName.split(" ").join("").toLocaleLowerCase(),
        userImg: user.photoURL,
        uid: user.uid,
        timestamp: serverTimestamp(),
      });
    }

    router.push("/");

    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        className="hidden  object-cover md:w-44 md:h-80 rotate-6 md:inline-flex"
        src="https://pbs.twimg.com/media/E4gqnIlWUAgQ3yw.jpg"
        alt="twitter image inside a phone"
      />

      <div className="">
        <div className="flex flex-col items-center">
          <img
            className="w-36 obbject-cover"
            src="https://www.computerhope.com/jargon/t/twitter.png"
            alt="twitter logo"
          />
          <p className="text-center text-sm italic my-10 ">
            This app is created for learning purposes
          </p>
          <button
            onClick={onGoogleClick}
            className="bg-red-400 rounded-lg p-3  text-white hover:bg-red-500"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
