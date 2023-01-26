import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import CommentModal from "../components/CommentModal";

export default function Home({ newsResult, randomUserResults }) {
  return (
    <div>
      <Head>
        <title>Next Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen mx-auto">
        <Sidebar />

        <Feed />

        <Widgets
          newsResults={newsResult.articles}
          randomUserResults={randomUserResults.results}
        />

        <CommentModal />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const newsResult = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  const randomUserResults = await fetch(
    "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newsResult,
      randomUserResults,
    },
  };
}
