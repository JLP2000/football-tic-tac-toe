import Gameboard from "@/components/Gameboard";
import Head from "next/head";

const Play = () => {
  return (
    <>
      <Head>
        <title>FTTT | Play</title>
      </Head>
      <div>
        <h1>Game Page</h1>
        <Gameboard />
      </div>
    </>
  );
};

export default Play;
