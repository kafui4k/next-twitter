import { getProviders, signIn } from "next-auth/react";
function signin({ providers }) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img
        className="hidden  object-cover md:w-44 md:h-80 rotate-6 md:inline-flex"
        src="https://pbs.twimg.com/media/E4gqnIlWUAgQ3yw.jpg"
        alt="twitter image inside a phone"
      />

      <div className="">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center" key={provider.id}>
            <img
              className="w-36 obbject-cover"
              src="https://www.computerhope.com/jargon/t/twitter.png"
              alt="twitter logo"
            />
            <p className="text-center text-sm italic my-10 ">
              This app is created for learning purposes
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className="bg-red-400 rounded-lg p-3  text-white hover:bg-red-500"
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
