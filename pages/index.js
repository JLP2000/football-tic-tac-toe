import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FTTT | Home</title>
        <meta name="keywords" content="Footy TTT" />
      </Head>
      <h1>Homepage</h1>
      <Link href="/play">Play Game</Link>
    </div>
  );
}
