import Head from "next/head";
import Home from "../components/Home";

export default function App() {
  return (
    <div className='w-full flex flex-col items-center text-lg min-h-screen max-w-[1700px] mx-auto'>
      <Head>
        <title>Google</title>
      </Head>
      <Home />
    </div>
  )
}