import Head from "next/head";
import Sidebar from "../components/sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto">
        {/**sidebar */}
        <Sidebar />

        {/**feed */}
        <Feed />

        {/**widget */}
        <Widgets />

        {/** Modal */}
      </main>
    </div>
  );
}
